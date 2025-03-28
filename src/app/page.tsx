"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { getFirstStep } from "@/lib/slices/questionnaire/selectors";

export default function Home() {
  const { id } = useSelector(getFirstStep);

  redirect(`/${id}`);
}
