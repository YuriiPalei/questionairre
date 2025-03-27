"use client";

import RadioGroup from "../components/RadioGroup";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("male");

  return (
    <div className={styles.page}>
      <RadioGroup
        label="Select your gender:"
        value={selectedValue}
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        onChange={(event) => setSelectedValue(event.target.value)}
      />
    </div>
  );
}
