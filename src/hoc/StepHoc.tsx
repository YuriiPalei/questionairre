"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllAnswers, getFirstStep } from "@/lib/slices/questionnaire/selectors";
import { useRouter } from "next/navigation";

const withEmptyAnswersHandling = (WrappedComponent: React.ComponentType) => {
  const WithEmptyAnswersHandling = (props: Record<string, unknown>) => {
    const router = useRouter();
    const questionnaireState = useSelector(getAllAnswers);
    const { id: firstStepId } = useSelector(getFirstStep);

    useEffect(() => {
      if (Object.keys(questionnaireState).length === 0) {
        router.push(`/${firstStepId}`);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithEmptyAnswersHandling;
};

export default withEmptyAnswersHandling;
