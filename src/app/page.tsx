import configuration from "@/app/configuration.json";
import { redirect } from "next/navigation";

export default function Home() {
  const { id } = configuration.steps[0];

  redirect(`/${id}`);
}
