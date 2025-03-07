"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { changeDomain, setDomains } from "@/store/domainSlice";
import { mapDomainRecords } from "@/store/recordSlice";
import DnsRecords from "@/components/DnsRecords";
import Analytics from "@/components/Analytics";
import Settings from "@/components/Settings";
import NotFound from "@/components/NotFound";
import NewDomain from "@/components/NewDomain";

const Content = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    let tryCount = 0;
    const fetchDomainWRecords = async () => {
      try {
        const response = await fetch("/api/domain/get");

        if (response.ok) {
          const data = await response.json();

          if (data.domains?.length) {
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
          } else {
            window.history.pushState({}, "", "/new-domain");
            toast.info("Book your first domain to continue.", {
              theme: "colored",
            });
          }
        } else if (response.status === 404) {
          if (tryCount === 5) {
            toast.info("User not registered. Please try logging in again!");
            return;
          }
          tryCount += 1;
          setTimeout(fetchDomainWRecords, 1000);
        } else {
          throw new Error("Unable to fetch data!");
        }
      } catch (err) {
        toast.error("Unable to fetch Domain or Records!");
      }
    };

    fetchDomainWRecords();
  }, []);

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
