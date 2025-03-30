"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAnswersLength, getFirstStep, getIsFirstStep } from "@/lib/slices/questionnaire/selectors";
import { redirect, useParams } from "next/navigation";
import { QuestionnaireState } from "@/types/store";

const withEmptyAnswersHandling = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithEmptyAnswersHandling = (props: P) => {
    const { slug } = useParams<{ slug: string }>();
    const answersLength = useSelector(getAnswersLength);
    const { id: firstStepId } = useSelector(getFirstStep);
    const isFirstStep = useSelector((state: QuestionnaireState) => getIsFirstStep(state, slug));

    useEffect(() => {
      if (!isFirstStep && !answersLength) {
        redirect(`/${firstStepId}`);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithEmptyAnswersHandling;
};

export default withEmptyAnswersHandling;
