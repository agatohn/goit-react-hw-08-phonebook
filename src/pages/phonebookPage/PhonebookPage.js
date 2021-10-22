import Form from "../../components/contactForm/ContactForm";
import PhonebookList from "../../components/contactList/ContactList";
import Filter from "../../components/filter/Filter";

export default function phonebookPage() {
  return (
    <>
      <Form />
      <Filter />
      <PhonebookList />
    </>
  );
}
