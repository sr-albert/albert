/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Select } from "@/components";
import { IOption } from "@/types/contact-option";
import { useForm } from "react-hook-form";
import { Form, redirect } from "react-router-dom";
import "./Contact.scss";
import Button from "@/components/Button";

export async function action({ request }: any): Promise<Response> {
  const formData = await request.formData();
  const objData = Object.fromEntries(formData);
  const queryString = new URLSearchParams(objData).toString();

  return redirect(`/contact?${queryString}`);
}

export default function Contact() {
  return (
    <div id="contact-container">
      <ContactForm />
    </div>
  );
}

const OPTIONS: IOption[] = [
  {
    value: "HIRING-ME",
    name: "Hiring me",
  },
  {
    value: "OTHER",
    name: "Other",
  },
];

interface IContactFormInput {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormInput>();
  const onSubmit = (data: Record<string, any>) => console.log(data);
  return (
    <Form
      key="contact-form"
      method="post"
      aria-label="Contact me"
      action="/contact"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Contact me</h1>

      <Input
        id="input-full-name"
        data-testid="input-full-name"
        type="text"
        placeholder="..."
        aria-label="Full Name"
        label="Full Name"
        error={errors.name}
        {...register("name")}
      />

      <Input
        id="input-email"
        data-testid="input-email"
        type="text"
        placeholder="..."
        aria-label="Email"
        label="Email"
        error={errors.email}
        {...register("email")}
      />

      <Input
        id="input-phone"
        data-testid="input-phone"
        type="text"
        placeholder="+84"
        aria-label="Phone"
        label="Phone"
        error={errors.phone}
        {...register("phone")}
      />

      <Select
        label="Reason"
        id="select-reason"
        defaultValue="OTHER"
        placeholder="..."
        options={OPTIONS}
        {...register("reason")}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        aria-label="Message"
        placeholder="..."
        {...register("message")}
      />

      {errors.message && (
        <span
          className="input-error"
          style={{
            color: "red",
          }}
        >
          {errors.message.message}
        </span>
      )}

      <Button
        label="Submit"
        id="btn-submit"
        type="submit"
        datatest-id="btn-submit"
        isLoading={false}
      />
    </Form>
  );
}
