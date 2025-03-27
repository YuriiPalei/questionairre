import classNames from "classnames";
import { OptionType } from "@/types";
import styles from "./styles.module.css";

type Props = {
  selectedValue: string | undefined;
  options: OptionType[];
  name: string;
  onChange: (option: OptionType) => void;
};

const RadioGroup = ({ options, selectedValue, onChange, name }: Props) => {
  const handleClick = (option: OptionType) => {
    if (option.value !== selectedValue) return;

    if (onChange) onChange(option);
  };

  return (
    <div className={styles.radio_group} role="radiogroup">
      {options.map((option) => {
        const { value } = option;
        const isChecked = selectedValue === value;
        const inputId = `${name}-${value}`;

        return (
          <label
            key={value}
            className={classNames(styles.radio_button, {
              [styles.radio_button__checked]: isChecked,
            })}
            htmlFor={inputId}
            onClick={() => handleClick(option)}
          >
            <input
              id={inputId}
              type="radio"
              value={value}
              checked={isChecked}
              onChange={() => onChange(option)}
              aria-checked={isChecked}
            />
            <span>{value}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;
