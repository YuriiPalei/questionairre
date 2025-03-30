import React, { HTMLAttributes } from "react";
import { OptionType } from "@/types";
import classNames from "classnames";
import styles from "./page.module.css";

type Props = {
  options: OptionType[];
  onClick: (option: OptionType) => void;
} & Omit<HTMLAttributes<HTMLButtonElement>, "onClick">;

const ButtonsGroup = ({ options, onClick, className, ...rest }: Props) => {
  return (
    <div className={styles.wrapper}>
      {options.map((option: OptionType) => (
        <button
          key={option.value}
          onClick={() => onClick(option)}
          className={classNames(styles.button, className)}
          {...rest}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

export default ButtonsGroup;
