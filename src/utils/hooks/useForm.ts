import {
  IContactErrors,
  IContactFormValue,
  IContactInitialValues,
} from "@/types/contact";
import { FormEvent, useState } from "react";

interface UseFormOptions {
  initialValues: IContactFormValue;
  onSubmit: (values: IContactInitialValues) => void;
  validate: (values: IContactInitialValues) => IContactErrors;
}

const useForm = ({ initialValues, validate, onSubmit }: UseFormOptions) => {
  const [isVaild] = useState(false);
  const [values, setValues] = useState(
    initialValues || {
      name: { value: "", error: "" },
      email: { value: "", error: "" },
      message: { value: "", error: "" },
    }
  );
  const [state, setFormState] = useState("initial");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: { ...values[name], value },
    });

    // if (validate) {
    //   // const newErrors = validate({ ...values, [name]: value });
    //   // setErrors({ ...errors, ...newErrors });
    //   // TODO: set error here ...
    // }

    setFormState("dirty");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);

      if (Object.keys(validationErrors).length > 0) {
        // TODO: set error here ...

        return;
      }
    }

    onSubmit(values);
  };

  return { values, isVaild, state, handleChange, handleSubmit };
};

export default useForm;
