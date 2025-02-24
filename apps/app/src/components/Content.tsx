"use client";

import { usePathname } from "next/navigation";

import DnsRecords from "@/components/DnsRecords";
import Analytics from "@/components/Analytics";
import Settings from "@/components/Settings";
import NotFound from "@/components/NotFound";

const Content = () => {
  const pathName = usePathname();

  return pathName === "/" ? (
    <DnsRecords />
  ) : pathName === "/analytics" ? (
    <Analytics />
  ) : pathName === "/settings" ? (
    <Settings />
  ) : (
    <NotFound />
  );
};

export default Content;
