import { notFound } from "next/navigation";
import QuestionnaireStep from "@/components/QuestionnaireStep";
import configuration from "@/app/configuration.json";
import { QuestionnaireStepType } from "@/types";
import styles from "./page.module.css";
import Header from "@/components/Header";
import React from "react";

export function generateStaticParams() {
  const steps = configuration.steps;

  return steps.map((step) => ({
    slug: step.id,
  }));
}

export default async function QuestionnairePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const stepData = configuration.steps.find((s) => s.id === slug) as QuestionnaireStepType | undefined;

  if (!stepData) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Header />
      <QuestionnaireStep {...stepData} />
    </div>
  );
}
