"use client";

import { Provider } from "react-redux";

import styles from "@/styles/page.module.scss";

import store from "@/store/store";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

const App = () => {
  return (
    <Provider store={store}>
      <Sidebar />
      <div className={styles.content}>
        <div>
          <Content />
        </div>
      </div>
    </Provider>
  );
};

export default App;
