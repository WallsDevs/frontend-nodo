import React from "react";
import { Input, InputProps, InputRef } from "antd";
import styles from "./CustomInput.module.css";

interface CustomInputProps extends InputProps {
  label: string;
  error?: string;
}

const CustomInput = React.forwardRef<InputRef, CustomInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <label className={styles.label}>{label}</label>
        <Input
          ref={ref}
          {...props}
          className={styles.input + (error ? " " + styles.error : "")}
        />
        {error && <span className={styles.errorMsg}>{error}</span>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
