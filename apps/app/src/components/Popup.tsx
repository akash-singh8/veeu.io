import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { StoreState } from "@/store/store";
import { addRecord, updateRecord, removeRecord } from "@/store/recordSlice";
import { postDnsRecord, putDnsRecord, deleteDnsRecord } from "@/lib/recordOps";

import styles from "@/styles/popup.module.scss";
import dnsStyles from "@/styles/dnsrecords.module.scss";

import crossSvg from "@/assets/svgs/cross.svg";

type PopupProps = {
  task: string;
  recordId?: string;
  type?: string;
  name?: string;
  value?: string;
  user?: string;
  onClose: () => void;
};

const Popup = ({
  task,
  recordId,
  type,
  name,
  value,
  user,
  onClose,
}: PopupProps) => {
  let title = "Add DNS Record";
  let description = "Create a new DNS record for your domain";
  let action = "Add Record";

  switch (task) {
    case "EditRecord":
      title = "Edit DNS Record";
      description = "Tweak a existing DNS record for your domain";
      action = "Update Record";
      break;
    case "DeleteRecord":
      title = "Delete DNS Record";
      description = "Please enter 'confirm' to delete";
      action = "Delete Record";
      break;
    case "Invite":
      title = "Invite User";
      description = "Please enter user's email to invite";
      action = "Send Invitation";
      break;
    case "Remove":
      title = "Remove User";
      description = "Please enter 'confirm' to remove user";
      action = "Remove";
      break;
    case "Unregister":
      title = "Unregister Domain";
      description = "Please enter 'confirm' to unregister domain";
      action = "Unregister";
      break;
  }

  const dispatch = useDispatch();
  const domain = useSelector((state: StoreState) => state.domain.currDomain);
  const [isDisabled, setIsDisabled] = useState(true);
  const [confirmInp, setConfirmInp] = useState("");

  useEffect(() => {
    if (task === "Invite") setIsDisabled(false);
    else setIsDisabled(confirmInp.toLowerCase() !== "confirm");
  }, [confirmInp]);

  useEffect(() => {
    const container = document.querySelector(
      `.${styles.container}`
    ) as HTMLDivElement;

    setTimeout(() => {
      container.style.opacity = "1";
    }, 50);
  }, []);

  const handleClose = () => {
    const container = document.querySelector(
      `.${styles.container}`
    ) as HTMLDivElement;
    container.style.opacity = "0";
    setTimeout(onClose, 200);
  };

  const deleteRecord = async () => {
    const isDeleted = await deleteDnsRecord(recordId!, domain);
    if (!isDeleted) return;
    dispatch(removeRecord({ domain, id: recordId }));
  };

  const actionHandler = async () => {
    setIsDisabled(true);
    if (task === "DeleteRecord") await deleteRecord();
    setIsDisabled(false);

    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <Image src={crossSvg} alt="close" width={28} onClick={handleClose} />
        </div>

        {task === "DeleteRecord" ||
        task === "Invite" ||
        task === "Remove" ||
        task === "Unregister" ? (
          <div className={styles.deleteRecord}>
            {task === "DeleteRecord" && (
              <table className={dnsStyles.records}>
                <thead>
                  <tr>
                    <td>TYPE</td>
                    <td>NAME</td>
                    <td>VALUE</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>{type}</p>
                    </td>
                    <td>{name}</td>
                    <td>{value}</td>
                  </tr>
                </tbody>
              </table>
            )}
            {task === "Remove" && (
              <p className={styles.removeUser}>
                removing <strong>'{user}'</strong>
              </p>
            )}
            <input
              type="text"
              placeholder={task === "Invite" ? "user@example.com" : "confirm"}
              className={styles.inputField}
              autoFocus={true}
              value={confirmInp}
              onChange={(e) => setConfirmInp(e.target.value)}
            />

            <button
              onClick={actionHandler}
              className={styles.action}
              disabled={isDisabled}
            >
              {action}
            </button>
          </div>
        ) : (
          <RecordBody
            task={task}
            action={action}
            domain={domain}
            recordId={recordId!}
            rType={type!}
            rName={name!}
            rValue={value!}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
            close={onClose}
          />
        )}
      </div>
    </div>
  );
};

type RecordProps = {
  task: string;
  action: string;
  domain: string;
  recordId: string;
  rType: string;
  rName: string;
  rValue: string;
  isDisabled: boolean;
  setIsDisabled: (s: boolean) => void;
  close: () => void;
};

const RecordBody = ({
  task,
  action,
  domain,
  recordId,
  rType,
  rName,
  rValue,
  isDisabled,
  setIsDisabled,
  close,
}: RecordProps) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(rType ?? "A");
  const [name, setName] = useState(rName);
  const [value, setValue] = useState(rValue);

  useEffect(() => {
    if (rType && rName && rValue) {
      setIsDisabled(
        !(!!name && !!value) ||
          !(rType !== type || rName !== name || rValue !== value)
      );
    } else {
      setIsDisabled(!(!!name && !!value));
    }
  }, [type, name, value]);

  const addNewRecord = async () => {
    const id = await postDnsRecord(type, name, value, domain);
    if (!id) return;
    dispatch(addRecord({ domain, record: { id, type, name, value } }));
  };

  const modifyRecord = async () => {
    const isUpdated = await putDnsRecord(
      recordId,
      domain,
      rType !== type ? type : "",
      rName !== name ? name : "",
      rValue !== value ? value : ""
    );
    if (!isUpdated) return;
    dispatch(
      updateRecord({ domain, newRecord: { id: recordId, type, name, value } })
    );
  };

  const actionHandler = async () => {
    setIsDisabled(true);
    if (task === "NewRecord") await addNewRecord();
    if (task === "EditRecord") await modifyRecord();
    setIsDisabled(false);

    close();
  };

  return (
    <div className={styles.body}>
      <div>
        <p>Record Type</p>
        <select
          defaultValue={type ?? "A"}
          className={styles.inputField}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="A">A</option>
          <option value="AAAA">AAAA</option>
          <option value="CNAME">CNAME</option>
          <option value="MX">MX</option>
          <option value="TXT">TXT</option>
        </select>
      </div>

      <div>
        <p>Name</p>
        <input
          type="text"
          placeholder="@"
          className={styles.inputField}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <p>Value</p>
        <input
          type="text"
          placeholder="1.2.3.4"
          className={styles.inputField}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button
        onClick={actionHandler}
        className={styles.action}
        disabled={isDisabled}
      >
        {action}
      </button>
    </div>
  );
};

export default Popup;
