import { IContactErrors, IContactInitialValues } from "@/types/contact";
import { FormEvent, useState } from "react";

interface UseFormOptions {
  initialValues: IContactInitialValues;
  onSubmit: (values: IContactInitialValues) => void;
  validate: (values: IContactInitialValues) => IContactErrors;
}

const useForm = ({ initialValues, validate, onSubmit }: UseFormOptions) => {
  const [isVaild] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state] = useState("initial");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (validate) {
      const newErrors = validate({ ...values, [name]: value });
      setErrors({ ...errors, ...newErrors });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);

      if (Object.keys(validationErrors).length > 0) {
        setErrors({ ...errors, ...validationErrors });
        return;
      }
    }

    onSubmit(values);
  };

  return { values, isVaild, errors, state, handleChange, handleSubmit };
};

export default useForm;
