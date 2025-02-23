import styles from "@/styles/settings.module.scss";

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
  return (
    <div className={styles.main}>
      <h2>Settings</h2>

      <div>
        <p>Domain Access Control</p>

        <div className={styles.users}>
          <div className={styles.usersTop}>
            <p>Manage who can access and modify your domain settings</p>
            <button>+ Invite Users</button>
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
                    <td className={styles.action}>remove</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.unregister}>
        <p>Danzer Zone</p>
        <button>Unregister Domain</button>
      </div>
    </div>
  );
};

export default Settings;
