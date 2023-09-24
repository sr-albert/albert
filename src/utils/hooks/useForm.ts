import { IContactInitialValues } from "@/types/contact";
import { useState } from "react";

const useForm = (initialValues: IContactInitialValues) => {
  const [isVaild, setValid] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    if (!value) {
      setErrors({ ...errors, [name]: "Error" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }

    setValid(Object.values(errors).every((x) => x === ""));

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    // TODO: add param to path to make it dynamic (e.g. /contact?reason=general)
  };

  return { values, isVaild, errors, handleChange };
};

export default useForm;
