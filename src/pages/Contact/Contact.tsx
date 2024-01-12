/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import useForm from "@/utils/hooks/useForm";
import { Form, redirect } from "react-router-dom";
import "./Contact.scss";

export async function action({ request }: any): Promise<Response> {
  const formData = await request.formData();
  const objData = Object.fromEntries(formData);
  const queryString = new URLSearchParams(objData).toString();

  return redirect(`/contact?${queryString}`);
}

export default function Contact() {
  // const { values, handleChange, isVaild } = useForm({
  //   initialValues: {
  //     name: { value: "", error: "" },
  //     email: { value: "", error: "" },
  //     phone: { value: "", error: "" },
  //     message: { value: "", error: "" },
  //     kind: { value: "OTHER" },
  //   },
  //   validate: (values: Record<string, any>) => {
  //     console.log({
  //       entry: "validate from Contac page",
  //       values,
  //     });
  //     return {};
  //   },
  //   onSubmit: (values: Record<string, any>) => {
  //     console.log(values);
  //   },
  // });

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   console.log({
  //     entry: "onSubmit from Contact page",
  //     values,
  //   });
  // };

  return (
    <div id="contact-container">
      Contact Form
      {/* <Form
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

        <label htmlFor="input-phone">Phone</label>
        <input
          id="input-phone"
          data-testid="input-phone"
          name="phone"
          type="text"
          placeholder="+84"
          aria-label="Phone"
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

        <button id="btn-submit" type="submit">
          Submit
        </button>
      </Form> */}
    </div>
  );
}

function ContactForm() {
  return (
    <Form
      key="contact-form"
      method="post"
      aria-label="Contact me"
      action="/contact"
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
      />

      <label htmlFor="input-email">Email</label>
      <input
        id="input-email"
        data-testid="input-email"
        name="email"
        type="text"
        placeholder="..."
        aria-label="Email"
      />

      <label htmlFor="input-phone">Phone</label>
      <input
        id="input-phone"
        data-testid="input-phone"
        name="phone"
        type="text"
        placeholder="+84"
        aria-label="Phone"
      />

      <label htmlFor="select-reason">Reason</label>
      <select
        id="select-reason"
        aria-disabled={true}
        defaultValue="OTHER"
        name="reason"
        placeholder="..."
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
      />

      <button id="btn-submit" type="submit">
        Submit
      </button>
    </Form>
  );
}
