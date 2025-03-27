import makeStore from "@/lib/store";

export type Store = ReturnType<typeof makeStore>;

export type FormDataState = Record<string, string>;
