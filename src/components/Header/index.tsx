"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import IconButton from "@/components/IconButton";
import arrowIconBlack from "@/app/assets/arrow-black.svg";
import arrowIconWhite from "@/app/assets/arrow-white.svg";
import { useSelector } from "react-redux";
import { getIsFirstStep } from "@/lib/slices/questionnaire/selectors";
import { QuestionnaireState } from "@/types/store";
import styles from "./styles.module.css";

type Props = {
  inverted?: boolean;
};

const Header = ({ inverted }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const isFirstStep = useSelector((state: QuestionnaireState) => getIsFirstStep(state, slug));

  const arrowIcon = inverted ? arrowIconWhite : arrowIconBlack;
  const logo = inverted ? "/logo-white.webp" : "/logo-black.webp";

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
      <Image src={logo} alt="Logo" width={15} height={16} />
      <span className={styles.header__icon_button__container} />
    </header>
  );
};

export default Header;
