"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { changeDomain, setDomains } from "@/store/domainSlice";
import DnsRecords from "@/components/DnsRecords";
import Analytics from "@/components/Analytics";
import Settings from "@/components/Settings";
import NotFound from "@/components/NotFound";
import NewDomain from "@/components/NewDomain";
import { mapDomainRecords, setCurrRecords } from "@/store/recordSlice";
import { StoreState } from "@/store/store";

const Content = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [hasDomains, setHasDomains] = useState(false);

  useEffect(() => {
    const fetchDomainWRecords = async () => {
      try {
        const response = await fetch("/api/domain/get");

        if (response.ok) {
          const data = await response.json();

          if (data.domains?.length) {
            setHasDomains(true);
            dispatch(changeDomain(data.domains[0].domain));
            dispatch(
              setDomains(
                data.domains?.map((item: { domain: string }) => item.domain)
              )
            );

            const domainRecordMap: any = {};
            data.domains.forEach((item: any) => {
              domainRecordMap[item.domain] = item.records;
            });

            dispatch(mapDomainRecords(domainRecordMap));
            dispatch(setCurrRecords(data.domains[0].records));
          } else {
            // TODO: redirect to new domain registration
            toast.info("Please register a domain to continue.");
          }
        } else if (response.status === 404) {
          toast.info("User not found!");
        } else {
          throw new Error("Unable to fetch data!");
        }
      } catch (err) {
        toast.error("Unable to fetch Domain or Records!");
      }
    };

    fetchDomainWRecords();
  }, []);

  if (!hasDomains) return <NewDomain isFirstDomain={true} />;

  return pathName === "/" ? (
    <DnsRecords />
  ) : pathName === "/analytics" ? (
    <Analytics />
  ) : pathName === "/settings" ? (
    <Settings />
  ) : pathName === "/new-domain" ? (
    <NewDomain />
  ) : (
    <NotFound />
  );
};

export default Content;
