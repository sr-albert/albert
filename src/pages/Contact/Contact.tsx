import "./Contact.scss";
import { Form, useSubmit } from "react-router-dom";

interface ContactProps {
  fullName: string;
  email: string;
  message: string;
  reason: string;
}

export function action({ request }: any) {
  const formData = request.formData();

  console.log(formData.get("fullName"));
  console.log(formData.get("email"));
  console.log(formData.get("message"));
  console.log(formData.get("reason"));

  return { formData };
}

export default function Contact(data?: ContactProps) {
  const submit = useSubmit();

  const onFieldChange = (event: any) => {
    submit(event.target.form);
  };

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
          onChange={onFieldChange}
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
