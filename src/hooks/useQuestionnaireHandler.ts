import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { OptionType } from "@/types";
import { setAnswer } from "@/lib/slices/questionnaire/actions";

const useQuestionnaireHandler = ({
  id,
  valueName,
  formattedQuestion,
  middleware,
  isMiddleware,
  currentStep,
}: {
  id: string;
  valueName?: string;
  formattedQuestion: string;
  middleware?: string;
  isMiddleware?: boolean;
  currentStep: string;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSelect = (option: OptionType) => {
    if (isMiddleware) {
      router.push(`/${currentStep}`);
      return;
    }

    const { value, target, booleanValue } = option;

    dispatch(
      setAnswer({
        id: valueName ?? id,
        question: formattedQuestion,
        answer: value,
        booleanValue,
        nextStep: target,
      }),
    );
    router.push(`/${middleware ?? target}`);
  };

  return { handleSelect };
};

export default useQuestionnaireHandler;
