"use client";

import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

import { StoreState } from "@/store/store";
import DnsRecords from "@/components/DnsRecords";
import Analytics from "@/components/Analytics";
import Settings from "@/components/Settings";
import NotFound from "@/components/NotFound";
import NewDomain from "@/components/NewDomain";

const Content = () => {
  const pathName = usePathname();
  const domain = useSelector((state: StoreState) => state.domain);

  if (!domain) return <NewDomain />;

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
