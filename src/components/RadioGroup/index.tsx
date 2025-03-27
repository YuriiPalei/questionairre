import { ChangeEvent, InputHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

type Props = {
  value: string | undefined;
  options: { value: string; label: string }[];
  name: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "onChange">;

const RadioGroup = ({ options, value, onChange, name }: Props) => {
  const handleClick = (val: string) => {
    if (val !== value) return;

    const syntheticEvent = {
      target: {
        value: val,
      },
    } as ChangeEvent<HTMLInputElement>;

    if (onChange) onChange(syntheticEvent);
  };

  return (
    <div className={styles.radio_group} role="radiogroup">
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
            onClick={() => handleClick(val)}
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
  );
};

export default RadioGroup;
