import { Form, redirect } from "react-router-dom";
import "./Contact.scss";

export async function action() {
  return redirect(`/contact`);
}

export default function Contact() {
  return (
    <div id="contact-container">
      <Form method="post" aria-label="Contact me" action="/contact">
        <input
          id="input-full-name"
          data-testid="input-full-name"
          name="fullName"
          type="text"
          aria-label="Full Name"
          placeholder="Your name ...."
        />

        <input
          id="input-email"
          data-testid="input-email"
          name="email"
          type="text"
          aria-label="Email"
          placeholder="Your email ...."
        />

        <select
          id="select-reason"
          aria-disabled={true}
          defaultValue="OTHER"
          name="reason"
        >
          <option value="HIRING-ME">Hiring me</option>
          <option value="OTHER">Other</option>
        </select>

        <textarea aria-label="Message" label="Message" name="message" />

        <button id="btn-submit" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
