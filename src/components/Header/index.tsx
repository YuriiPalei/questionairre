"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "@/components/IconButton";
import arrowIcon from "@/app/assets/arrow-back.svg";
import styles from "./styles.module.css";

const Header = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <IconButton
        src={arrowIcon}
        className={styles.header__icon_button__container}
        alt="Back"
        onClick={handleBack}
      />
      <Image src="/logo.webp" alt="Logo" width={15} height={16} />
      <span className={styles.header__icon_button__container} />
    </header>
  );
};

export default Header;
