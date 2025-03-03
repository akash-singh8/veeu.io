import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "@/store/store";
import Popup from "./Popup";

import styles from "@/styles/dnsrecords.module.scss";
import serverSvg from "@/assets/svgs/server.svg";
import editSvg from "@/assets/svgs/edit.svg";
import trashSvg from "@/assets/svgs/trash.svg";

const DnsRecords = () => {
  const [task, setTask] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<
    (RecordProps & { id: string }) | null
  >(null);
  const dnsRecords = useSelector(
    (state: StoreState) => state.record.currRecords
  );

  const setTaskAndRecord = (task: string, ind: number) => {
    setTask(task);
    setSelectedRecord({
      id: dnsRecords[ind].id,
      type: dnsRecords[ind].type,
      name: dnsRecords[ind].name,
      value: dnsRecords[ind].value,
    });
  };

  return (
    <>
      {task && (
        <Popup
          task={task}
          recordId={selectedRecord?.id}
          type={selectedRecord?.type}
          name={selectedRecord?.name}
          value={selectedRecord?.value}
          onClose={() => {
            setTask("");
            setSelectedRecord(null);
          }}
        />
      )}

      <div className={styles.main}>
        <h2>DNS Records</h2>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            <div>
              <Image src={serverSvg} alt="records" width={24} height={24} />
              <p>2 DNS Records</p>
            </div>
            <button onClick={() => setTask("NewRecord")}>Add Record</button>
          </div>
          <table className={styles.records}>
            <thead>
              <tr>
                <td>TYPE</td>
                <td>NAME</td>
                <td>VALUE</td>
                <td>ACTIONS</td>
              </tr>
            </thead>
            <tbody>
              {dnsRecords.map((record, i) => (
                <Record
                  key={record.id}
                  type={record.type}
                  name={record.name}
                  value={record.value}
                  onEdit={() => setTaskAndRecord("EditRecord", i)}
                  onDelete={() => setTaskAndRecord("DeleteRecord", i)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

type RecordProps = {
  type: string;
  name: string;
  value: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

const Record = ({ type, name, value, onEdit, onDelete }: RecordProps) => {
  return (
    <tr>
      <td>
        <p>{type}</p>
      </td>
      <td>{name}</td>
      <td>{value}</td>
      <td className={styles.recordAction}>
        <Image
          src={editSvg}
          alt="edit"
          width={26}
          height={26}
          onClick={onEdit}
          aria-label="Edit Record"
        />
        <Image
          src={trashSvg}
          alt="delete"
          width={26}
          height={26}
          onClick={onDelete}
          aria-label="Delete Record"
        />
      </td>
    </tr>
  );
};

export default DnsRecords;
