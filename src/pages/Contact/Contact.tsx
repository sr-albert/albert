/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Snackbar } from "@/components";
import React from "react";
import { redirect } from "react-router-dom";
import "./Contact.scss";
import { ContactForm } from "./ContactForm";

export async function action({ request }: any): Promise<Response> {
  const formData = await request.formData();
  const objData = Object.fromEntries(formData);
  const queryString = new URLSearchParams(objData).toString();

  return redirect(`/contact?${queryString}`);
}

interface IContactContext {
  setShowSnackbar: (showSnackbar: boolean) => void;
}

export const ContactContext = React.createContext<IContactContext>({
  setShowSnackbar: () => {},
});

export default function Contact() {
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  return (
    <ContactContext.Provider value={{ setShowSnackbar }}>
      <div
        id="contact-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <ContactForm />
        <Snackbar
          visible={showSnackbar}
          message={"TestTestTestTestTestTestTest"}
        />
      </div>
    </ContactContext.Provider>
  );
}
