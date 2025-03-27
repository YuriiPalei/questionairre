import { ButtonHTMLAttributes } from "react";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";
import styles from "./styles.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & Pick<ImageProps, "src" | "alt" | "width" | "height">;

const IconButton = ({ src, alt, height, width, className, ...rest }: Props) => {
  return (
    <button className={classNames(styles.icon_button, className)} {...rest}>
      <Image src={src} alt={alt} height={height} width={width} />
    </button>
  );
};

export default IconButton;
