"use client";

import React from "react";
import { useParams } from "next/navigation";
import classNames from "classnames";
import Header from "@/components/Header";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { QuestionnaireState } from "@/types/store";
import { getStepById } from "@/lib/slices/questionnaire/selectors";

export default function StepsLayout({ children }: { children: React.ReactNode }) {
  const { slug } = useParams<{ slug: string }>();
  const { isMiddleware } = useSelector((state: QuestionnaireState) => getStepById(state, slug)) ?? {};

  return (
    <div
      className={classNames(styles.page, {
        [styles.page__inverted]: isMiddleware,
      })}
    >
      <div className={styles.container}>
        <Header inverted={isMiddleware} />
        {children}
      </div>
    </div>
  );
}
