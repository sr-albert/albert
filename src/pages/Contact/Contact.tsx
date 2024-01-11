/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Contact.scss";
import { Form, redirect } from "react-router-dom";
import useForm from "@/utils/hooks/useForm";
import { IContactInitialValues } from "@/types/contact";

export async function action({ request }: any): Promise<Response> {
  const formData = await request.formData();
  const objData = Object.fromEntries(formData);
  const queryString = new URLSearchParams(objData).toString();

  return redirect(`/contact?${queryString}`);
}

export default function Contact() {
  const initialValues = {};
  const { values, handleChange, isVaild } = useForm({
    initialValues,
    validate: (values: IContactInitialValues) => {
      console.log({
        entry: "validate from Contac page",
        values,
      });
      return {};
    },
    onSubmit: (values: IContactInitialValues) => {
      console.log(values);
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      entry: "onSubmit from Contac page",
      values,
    });
  };

  return (
    <div id="contact-container">
      <Form
        key="contact-form"
        method="post"
        aria-label="Contact me"
        action="/contact"
        onSubmit={onSubmit}
      >
        <h1>Contact me</h1>

        <label htmlFor="input-full-name">Full Name</label>
        <input
          id="input-full-name"
          data-testid="input-full-name"
          name="name"
          type="text"
          placeholder="..."
          aria-label="Full Name"
          onChange={handleChange}
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          data-testid="input-email"
          name="email"
          type="text"
          placeholder="..."
          aria-label="Email"
          onChange={handleChange}
        />

        <label htmlFor="select-reason">Reason</label>
        <select
          id="select-reason"
          aria-disabled={true}
          defaultValue="OTHER"
          name="reason"
          placeholder="..."
          onChange={handleChange}
        >
          <option value="HIRING-ME">Hiring me</option>
          <option value="OTHER">Other</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          aria-label="Message"
          name="message"
          placeholder="..."
          onChange={handleChange}
        />

        <button id="btn-submit" type="submit" disabled={!isVaild}>
          Submit
        </button>
      </Form>
    </div>
  );
}
