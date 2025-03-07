import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

import "@/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "veeu",
  description:
    "An open-source and free DNS provider and management tool for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <ClerkProvider>
          <ToastContainer
            position="top-right"
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
