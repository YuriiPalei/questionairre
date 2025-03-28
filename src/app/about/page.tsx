"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { notFound, usePathname, useRouter } from "next/navigation";
import {
  getAnswersLength,
  getCurrentStep,
  getFirstStep,
  getStepById,
} from "@/lib/slices/questionnaire/selectors";
import Link from "next/link";
import Header from "@/components/Header";
import { QuestionnaireState } from "@/types/store";
import styles from "./about.module.css";

const AboutPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentStep = useSelector(getCurrentStep);
  const answersLength = useSelector(getAnswersLength);
  const pageData = useSelector((state: QuestionnaireState) => getStepById(state, pathname));
  const { id } = useSelector(getFirstStep);

  useEffect(() => {
    if (!answersLength) {
      router.push(`/${id}`);
    }
  }, []);

  if (!pageData) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Header inverted />
      <section className={styles.page}>
        <h1>{pageData.question}</h1>
        <p className={styles.page__text}>{pageData.text}</p>
        <Link href={`/${currentStep}`} className={styles.page__button}>
          Next
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
