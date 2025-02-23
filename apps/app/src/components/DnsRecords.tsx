"use client";
import { useState } from "react";
import Image from "next/image";

import styles from "@/styles/dnsrecords.module.scss";
import Popup from "./Popup";

import serverSvg from "@/assets/svgs/server.svg";
import editSvg from "@/assets/svgs/edit.svg";
import trashSvg from "@/assets/svgs/trash.svg";

const DNS_Records = [
  {
    type: "A",
    name: "@",
    value: "192.168.1.1",
  },
  {
    type: "CNAME",
    name: "www",
    value: "codex.veeu.io",
  },
];

const DnsRecords = () => {
  const [task, setTask] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<RecordProps | null>(
    null
  );

  const setTaskAndRecord = (task: string, ind: number) => {
    setTask(task);
    setSelectedRecord({
      type: DNS_Records[ind].type,
      name: DNS_Records[ind].name,
      value: DNS_Records[ind].value,
    });
  };

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
              {DNS_Records.map((record, i) => (
                <Record
                  key={i}
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
