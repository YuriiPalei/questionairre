import React from "react";
import configuration from "@/app/configuration.json";
import styles from "./page.module.css";
import Header from "@/components/Header";

export function generateStaticParams() {
  const steps = configuration.steps;

  return steps.map((step) => ({
    slug: step.id,
  }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.page}>
      <Header />
      {children}
    </div>
  );
}
