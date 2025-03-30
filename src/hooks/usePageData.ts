import { useSelector } from "react-redux";
import { QuestionnaireState } from "@/types/store";
import { getStepById } from "@/lib/slices/questionnaire/selectors";
import { notFound } from "next/navigation";
import { QuestionnaireStepType } from "@/types";

const usePageData = (id: string): QuestionnaireStepType => {
  const pageData = useSelector((state: QuestionnaireState) => getStepById(state, id));

  if (!pageData) {
    notFound();
  }

  return pageData;
};

export default usePageData;
