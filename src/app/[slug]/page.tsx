import configuration from "@/const";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import QuestionnaireStep from "@/components/QuestionnaireStep";

export function generateStaticParams() {
  const steps = configuration.steps;

  return steps.map((step) => ({
    slug: step.id,
  }));
}

export default async function QuestionnairePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const stepData = configuration.steps.find((s) => s.id === slug);

  if (!stepData) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <QuestionnaireStep {...stepData} />
    </div>
  );
}
