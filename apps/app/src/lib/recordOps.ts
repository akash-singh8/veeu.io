import { toast } from "react-toastify";

export const postDnsRecord = async (
  type: string,
  name: string,
  value: string,
  domain: string
) => {
  try {
    const response = await fetch("/api/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        name,
        value,
        domain,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Record added successfully!");
      return data.recordId as string;
    }

    toast.info(data.message);
  } catch (err) {
    console.error("Error while adding new record :", err);
    toast.error("Unable to add new record. Please try again later!");
  }
};

export const putDnsRecord = async (
  id: string,
  domain: string,
  type?: string,
  name?: string,
  value?: string
) => {
  try {
    const response = await fetch("/api/record/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        type,
        name,
        value,
        domain,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Record updated successfully!");
      return true;
    }

    toast.info(data.message);
  } catch (err) {
    console.error("Error while updating record :", err);
    toast.error("Unable to update record. Please try again later!");
  }
};

export const deleteDnsRecord = async (id: string, domain: string) => {
  try {
    const response = await fetch("/api/record/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, domain }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Record deleted successfully!");
      return true;
    }

    toast.info(data.message);
  } catch (err) {
    console.error("Error while deleting record :", err);
    toast.error("Unable to delete record. Please try again later!");
  }
};
