"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getAllAnswers, getCurrentStep } from "@/lib/slices/questionnaire/selectors";
import Link from "next/link";
import Header from "@/components/Header";
import configuration from "@/app/configuration.json";
import styles from "./about.module.css";

const AboutPage = () => {
  const router = useRouter();

  const currentStep = useSelector(getCurrentStep);
  const answers = useSelector(getAllAnswers);

  useEffect(() => {
    if (Object.keys(answers).length === 0) {
      router.push(`/${configuration.steps[0].id}`);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header inverted />
      <section className={styles.page}>
        <h1>So how does it work?</h1>
        <p className={styles.page__text}>
          We analyze hundreds of data points to create your unique astrological blueprint. This is combined
          with AI to tailor-make your astrological insights, based on your answers. We’re going to change your
          relationship with astrology.
        </p>
        <Link href={`/${currentStep}`} className={styles.page__button}>
          Next
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
