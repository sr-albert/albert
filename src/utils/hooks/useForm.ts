import { useState } from "preact/hooks";

const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return { values, handleChange };
};

export default useForm;
