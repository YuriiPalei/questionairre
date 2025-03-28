"use client";

import { useSelector } from "react-redux";
import { getAllAnswers } from "@/lib/slices/questionnaire/selectors";
import { formatTemplate } from "@/utils/formatting";
import React, { useEffect } from "react";
import configuration from "@/app/configuration.json";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import styles from "./styles.module.css";

const DonePage = () => {
  const router = useRouter();
  const answers = useSelector(getAllAnswers);

  const dynamicData = {
    gender: answers["gender"]?.answer ?? "",
    hasChildren:
      (answers["inRelationshipParent"]?.answer ?? answers["singleParent"]?.answer) === "Yes" || false,
  };

  useEffect(() => {
    if (Object.keys(answers).length === 0) {
      router.push(`/${configuration.steps[0].id}`);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Done</h1>
      <p>Thank you for submitting the questionnaire. Here is the data you submitted:</p>
      <div className={styles.container__results}>
        {Object.values(answers).map(({ answer, question }) => (
          <p key={question}>
            <strong>{formatTemplate(question, dynamicData)}</strong>
            <br />
            {answer}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DonePage;
