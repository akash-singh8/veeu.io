"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";

import { changeDomain, setDomains } from "@/store/domainSlice";
import DnsRecords from "@/components/DnsRecords";
import Analytics from "@/components/Analytics";
import Settings from "@/components/Settings";
import NotFound from "@/components/NotFound";
import NewDomain from "@/components/NewDomain";

const Content = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [hasDomains, setHasDomains] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchDomainWRecords = async () => {
      try {
        const response = await fetch(
          `/api/domain/get?email=${user?.primaryEmailAddress?.emailAddress}`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.domains?.length) {
            dispatch(changeDomain(data.domains[0].domain));
            setHasDomains(true);
          }
          dispatch(
            setDomains(
              data.domains?.map((item: { domain: string }) => item.domain)
            )
          );
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
  }, [user]);

  if (!hasDomains) return <NewDomain />;

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
