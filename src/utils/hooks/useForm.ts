import { IContactInitialValues } from "@/types/contact";
import { useState } from "react";
const useForm = (initialValues: IContactInitialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return { values, handleChange };
};

export default useForm;
