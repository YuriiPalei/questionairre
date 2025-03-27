import makeStore from "@/lib/store";

export type Store = ReturnType<typeof makeStore>;

export type FormDataState = {
  gender: "male" | "female" | undefined;
  relationshipStatus: "single" | "inRelationship" | undefined;
  isParent: boolean | undefined;

  inRelationship?: {
    relationshipProblem: string;
    partnerType: string;
    partnerGender: "male" | "female";
    sexPriority: string;
    relationshipGoal: string;
  };

  single?: {
    singleProblem: string;
    isTendOverthink: string;

    //isTendOverthink: true
    mostImportant: string;

    //isTendOverthink: false
    emotionalControl: string;
  };

  whereYouHeardAboutUs: string | undefined;
};
