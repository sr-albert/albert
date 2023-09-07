import { Form, redirect } from "react-router-dom";
import "./Contact.scss";

export async function action({ request }: any) {
  const formData = await request.formData();
  const objData = Object.fromEntries(formData);
  const queryString = new URLSearchParams(objData).toString();

  return redirect(`/contact?${queryString}`);
}

export default function Contact() {
  return (
    <div id="contact-container">
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
          name="fullName"
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
          label="Message"
          name="message"
          placeholder="..."
        />

        <button id="btn-submit" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
