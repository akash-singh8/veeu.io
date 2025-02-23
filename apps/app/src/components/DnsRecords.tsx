"use client";
import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/dnsrecords.module.scss";
import Popup from "./Popup";

import serverSvg from "@/assets/svgs/server.svg";
import editSvg from "@/assets/svgs/edit.svg";
import trashSvg from "@/assets/svgs/trash.svg";

const DnsRecords = () => {
  const [task, setTask] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<RecordProps | null>(
    null
  );

  return (
    <>
      {task && (
        <Popup
          task={task}
          type={selectedRecord?.type!}
          name={selectedRecord?.name!}
          value={selectedRecord?.value!}
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
              <Record
                type="A"
                name="@"
                value="192.168.1.1"
                onEdit={() => {
                  setTask("EditRecord");
                  setSelectedRecord({
                    type: "A",
                    name: "@",
                    value: "192.168.1.1",
                  });
                }}
                onDelete={() => {
                  setTask("DeleteRecord");
                  setSelectedRecord({
                    type: "A",
                    name: "@",
                    value: "192.168.1.1",
                  });
                }}
              />
              <Record
                type="CNAME"
                name="www"
                value="codex.veeu.io"
                onEdit={() => {
                  setTask("EditRecord");
                  setSelectedRecord({
                    type: "CNAME",
                    name: "www",
                    value: "codex.veeu.io",
                  });
                }}
                onDelete={() => {
                  setTask("DeleteRecord");
                  setSelectedRecord({
                    type: "CNAME",
                    name: "www",
                    value: "codex.veeu.io",
                  });
                }}
              />
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
