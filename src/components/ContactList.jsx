import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contactsProp.map((data) => {
    return (
      <ContactCard
        contactPropFurther={data}
        clickHandler={deleteContactHandler}
        key={data.id}
      />
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
