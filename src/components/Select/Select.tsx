import { IOption } from "@/types/contact-option";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  defaultValue?: string;
  options?: IOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, defaultValue, options, name, id, ...other }: SelectProps, ref) => (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      <select
        aria-label={label ? label : "Selection"}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
        {...other}
      >
        {options?.map(({ name, value }, idx) => (
          <option key={idx} aria-label="Option" value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
);

export default Select;
