import { useState } from "react";

import styles from "@/styles/settings.module.scss";
import Popup from "@/components/Popup";

const Users = [
  {
    id: "owner@example.com",
    role: "Owner",
    isActive: true,
  },
  {
    id: "admin@example.com",
    role: "Admin",
    isActive: false,
  },
];

const Settings = () => {
  const [task, setTask] = useState("");
  const [userToRemove, setUserToRemove] = useState("");

  return (
    <div className={styles.main}>
      {task && (
        <Popup task={task} user={userToRemove} onClose={() => setTask("")} />
      )}

      <h2>Settings</h2>

      <div>
        <p>Domain Access Control</p>

        <div className={styles.users}>
          <div className={styles.usersTop}>
            <p>Manage who can access and modify your domain settings</p>
            <button onClick={() => setTask("Invite")}>+ Invite Users</button>
          </div>

          <table className={styles.records}>
            <thead>
              <tr>
                <td>USER</td>
                <td>ROLE</td>
                <td>STATUS</td>
                <td>ACTIONS</td>
              </tr>
            </thead>
            <tbody>
              {Users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.role}</td>
                  <td>
                    <p
                      className={user.isActive ? styles.active : styles.pending}
                    >
                      {user.isActive ? "active" : "pending"}
                    </p>
                  </td>
                  {user.role === "Owner" ? (
                    <td></td>
                  ) : (
                    <td
                      className={styles.action}
                      onClick={() => {
                        setUserToRemove(user.id);
                        setTask("Remove");
                      }}
                    >
                      remove
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.unregister}>
        <p>Danzer Zone</p>
        <button onClick={() => setTask("Unregister")}>Unregister Domain</button>
      </div>
    </div>
  );
};

export default Settings;
