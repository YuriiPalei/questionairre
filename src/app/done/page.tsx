"use client";

import { useSelector } from "react-redux";
import { getFormData } from "@/lib/slices/formData/selectors";

const DonePage = () => {
  const formData = useSelector(getFormData);

  return (
    <section>
      <h1>Done</h1>
      <p>Thank you for submitting the form. Here is the data you submitted:</p>
      <div>
        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <strong>{key}</strong>: {value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default DonePage;
