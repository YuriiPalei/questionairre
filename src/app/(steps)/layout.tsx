"use client";

import React from "react";
import { useParams } from "next/navigation";
import usePageData from "@/hooks/usePageData";
import classNames from "classnames";
import Header from "@/components/Header";
import styles from "./styles.module.css";

export default function StepsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { slug } = useParams<{ slug: string }>();
  const { isMiddleware } = usePageData(slug);

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
