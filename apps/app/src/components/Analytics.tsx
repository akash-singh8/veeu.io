import Image from "next/image";
import { useEffect } from "react";

import styles from "@/styles/analytics.module.scss";

import analyticsSvg from "@/assets/svgs/analytics.svg";
import clockSvg from "@/assets/svgs/clock.svg";

const Analytics = () => {
  const createdAt = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
  const labels = new Array(7);
  const data = [12, 18, 3, 5, 2, 3, 8];

  for (let i = 0; i < 7; i++) {
    labels[i] = new Date(createdAt + i * 24 * 60 * 60 * 1000).toDateString();
  }

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const queries = document.querySelector(`.${styles.queries}`);
    queries?.appendChild(canvas);

    new (window as any).Chart(canvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Queries by Day",
            data: data,
            borderWidth: 1,
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      queries?.removeChild(canvas);
    };
  }, []);

  return (
    <div className={styles.main}>
      <h2>Analytics</h2>
      <div className={styles.overview}>
        <div>
          <div>
            <Image src={analyticsSvg} alt="analytics" width={28} />
            <p>Total Queries</p>
          </div>
          <p>2.7M</p>
        </div>

        <div>
          <div>
            <Image src={clockSvg} alt="clock" width={28} />
            <p>Avg. Response Time</p>
          </div>
          <p>45ms</p>
        </div>
      </div>

      <div className={styles.queries}>
        <h2>DNS Queries</h2>
      </div>

      <div className={styles.queries}>
        <h2>Queries by Location</h2>
        <p>{"<Coming Soon...>"}</p>
      </div>
    </div>
  );
};

export default Analytics;
