import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

type Props = {
  label: string;
  value: string | undefined;
  options: { value: string; label: string }[];
  name: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const RadioGroup = ({ label, options, value, onChange, name }: Props) => {
  return (
    <div className={styles.container}>
      <h1 id={`${name}-label`}>{label}</h1>
      <div className={styles.radio_group} role="radiogroup" aria-labelledby={`${name}-label`}>
        {options.map(({ value: val, label }) => {
          const isChecked = value === val;
          const inputId = `${name}-${val}`;

          return (
            <label
              key={val}
              className={classNames(styles.radio_button, {
                [styles.radio_button__checked]: isChecked,
              })}
              htmlFor={inputId}
            >
              <input
                id={inputId}
                type="radio"
                value={val}
                checked={isChecked}
                onChange={onChange}
                aria-checked={isChecked}
              />
              <span>{label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
