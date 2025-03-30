import Mustache from "mustache";
import { useSelector } from "react-redux";
import { getAnswersByIds } from "@/lib/slices/questionnaire/selectors";
import { QuestionnaireState } from "@/types/store";

type Props = {
  template: string;
  dynamicData: string[];
};

const useFormatting = ({ template, dynamicData }: Props): string => {
  const answers = useSelector((state: QuestionnaireState) => getAnswersByIds(state, dynamicData));

  const data = dynamicData.reduce(
    (acc, key) => {
      const booleanValue = answers[key]?.booleanValue;

      if (booleanValue !== undefined) {
        acc[key] = booleanValue;
        return acc;
      }

      acc[key] = answers[key]?.answer ?? "";
      return acc;
    },
    {} as Record<string, string | boolean>,
  );

  return Mustache.render(template, data);
};

export default useFormatting;
