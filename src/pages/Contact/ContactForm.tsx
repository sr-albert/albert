import { Input, Select } from "@/components";
import Button from "@/components/Button";
import { createRequest } from "@/services/request.service";
import { IOption } from "@/types/contact-option";
import { Request } from "@/types/request";
import { getCurrentDateTime } from "@/utils/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-router-dom";
import * as yup from "yup";
import { ContactContext } from "./Contact";

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

export const ContactForm = React.forwardRef(() => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IContactFormInput>({
    resolver: resolver,
  });

  const { setShowSnackbar } = React.useContext(ContactContext);
  const [formSubmitting, setFormSubmitting] = React.useState(false);

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
      setFormSubmitting(true);

      const res = await createRequest(data);

      setFormSubmitting(false);

      if (res.status === 200) {
        setShowSnackbar(true);
        control._reset();
      }
    } catch (error) {
      console.error(error);
      setShowSnackbar(true);
      setFormSubmitting(false);
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
        label="Full Name"
        error={errors.name}
        placeholder="..."
        type="text"
        data-testid="input-full-name"
        aria-label="Full Name"
        disabled={formSubmitting}
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
        disabled={formSubmitting}
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
        disabled={formSubmitting}
        {...register("phone")}
      />

      <Select
        label="Reason"
        id="select-reason"
        defaultValue="OTHER"
        placeholder="..."
        options={OPTIONS}
        disabled={formSubmitting}
        {...register("reason")}
      />

      <div className="selection-wrapper">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          aria-label="Message"
          placeholder="..."
          disabled={formSubmitting}
          {...register("message")}
        />
        {errors.message && (
          <span className="txt-error-helper">{errors.message.message}</span>
        )}
      </div>

      <Button
        label={formSubmitting ? "Submitting ..." : "Submit"}
        id="btn-submit"
        type="submit"
        datatest-id="btn-submit"
        isLoading={formSubmitting}
      />
    </Form>
  );
});
