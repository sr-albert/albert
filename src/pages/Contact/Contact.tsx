/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Select } from "@/components";
import Button from "@/components/Button";
import { createRequest } from "@/services/request.service";
import { IOption } from "@/types/contact-option";
import { Request } from "@/types/request";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, redirect } from "react-router-dom";
import * as yup from "yup";
import "./Contact.scss";
import { getCurrentDateTime } from "@/utils/helper";
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
    value: 1,
    name: "Hiring me",
  },
  {
    value: 0,
    name: "Other",
  },
];

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phone: yup
    .string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is not valid")
    .required("Phone is required"),
  reason: yup.number().required("Reason is required"),
  message: yup.string().required("Message is required"),
});

const resolver = yupResolver(schema);
interface IContactFormInput {
  name: string;
  email: string;
  phone: string;
  reason: number;
  message: string;
}
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IContactFormInput>({
    resolver: resolver,
  });

  useEffect(() => {
    console.log("isSubmitting", isSubmitting);
  }, [isSubmitting]);

  const generateTitle = (reason: number): string => {
    switch (reason) {
      case 1:
        return "Hiring me";
      case 0:
        return "Other";
      default:
        return "Unknown";
    }
  };

  const onSubmit = async ({
    name,
    email,
    phone,
    reason,
    message,
  }: IContactFormInput) => {
    try {
      const title = generateTitle(reason);
      // Generate title by reason
      const data: Request = {
        title: title,
        description: message,

        author: {
          name: name,
          email: email,
          phone: phone,
        },
        kind: 0,
        createdAt: getCurrentDateTime(),
        updatedAt: getCurrentDateTime(),
      };

      const res = createRequest(data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      id="contact-form"
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
        disabled={isSubmitting}
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
        disabled={isSubmitting}
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
        disabled={isSubmitting}
        {...register("phone")}
      />

      <Select
        label="Reason"
        id="select-reason"
        defaultValue="OTHER"
        placeholder="..."
        options={OPTIONS}
        disabled={isSubmitting}
        {...register("reason")}
      />

      <div className="selection-wrapper">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          aria-label="Message"
          placeholder="..."
          disabled={isSubmitting}
          {...register("message")}
        />
        {errors.message && (
          <span className="txt-error-helper">{errors.message.message}</span>
        )}
      </div>

      <Button
        label="Submit"
        id="btn-submit"
        type="submit"
        datatest-id="btn-submit"
        isLoading={isSubmitting}
      />
    </Form>
  );
}
