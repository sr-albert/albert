/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Select } from "@/components";
import Button from "@/components/Button";
import { IOption } from "@/types/contact-option";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, redirect } from "react-router-dom";
import * as yup from "yup";
import "./Contact.scss";
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

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phone: yup
    .string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{9})\b/, "Phone number is not valid")
    .required("Phone is required"),
  reason: yup.string().required("Reason is required"),
  message: yup.string().required("Message is required"),
});

const resolver = yupResolver(schema);
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
  } = useForm<IContactFormInput>({
    resolver: resolver,
  });
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
