interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  chidlren?: React.ReactNode;
}

export default function Input({ label, name, ...other }: InputProps) {
  return (
    <div className="input-wrapper">
      {label && (
        <label
          className={name ? `input-label-${name}` : ""}
          htmlFor={`${name ? `input-${name}` : ""}`}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        {...other}
        style={{
          width: "100%",
          margin: "0px 0px 1.5rem 0px",
          border: "1px solid #ffffff",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
