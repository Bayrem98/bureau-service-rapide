import { useEffect, useState } from "react";
import Contact from "../../../@types/Contact";
import { getContacts } from "../../../actions/Contact/action";

interface Props {}

const ContactsTable = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getContacts(setContacts);
  }, []);

  return (
    <>
      <div className=""></div>
    </>
  );
};

export default ContactsTable;
