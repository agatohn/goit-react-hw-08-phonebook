import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/phonebook";
import style from "./ContactList.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function PhonebookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContact());
  }, [dispatch]);

  const filteredContacts = useSelector(contactsSelectors.getVisibleContacts);

  const deleteBtnHandler = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Typography align="center" component="h2" variant="h4">
          Contacts
        </Typography>
        <Grid container spacing={2}>
          {/* <ul className={style.contactList}> */}
          {filteredContacts.map((contact) => (
            <Grid item xs={3} key={contact.id}>
              {/* <li className={style.contactListItem} key={contact.id}> */}
              <div className={style.contactListItem}>
                <span className={style.listItemdData}>
                  {contact.name}:{" "}
                  <a href="tel:+{contact.number}">{contact.number}</a>
                </span>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  startIcon={<DeleteIcon />}
                  type="button"
                  onClick={() => deleteBtnHandler(contact.id)}
                >
                  delete
                </Button>
              </div>
              {/* </li> */}
            </Grid>
          ))}
          {/* </ul> */}
        </Grid>
      </Container>
    </>
  );
}
