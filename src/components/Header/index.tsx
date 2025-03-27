"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import IconButton from "@/components/IconButton";
import arrowIcon from "@/app/assets/arrow-back.svg";
import configuration from "@/app/configuration.json";
import styles from "./styles.module.css";

const Header = () => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();

  const isFirstStep = slug === configuration.steps[0].id;

  const handleBack = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <IconButton
        disabled={isFirstStep}
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
