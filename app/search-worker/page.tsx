"use client";
import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";
import SendFormButton from "@/components/SendFormButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface FormData {
  company: string;
  position: string;
  requirements: string;
  salary: string;
  contact: string;
}

export default function SearchWorker() {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    position: "",
    requirements: "",
    salary: "",
    contact: ""
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // API call function
  const postWorker = async (data: FormData) => {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, value.toString());
    });
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/find-worker/`,
      params,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postWorker,
    onSuccess: (data) => {
      setSuccessMsg("Arza jiberildi! (Successfully sent)");
      setErrorMsg("");
      setFormData({
        company: "",
        position: "",
        requirements: "",
        salary: "",
        contact: ""
      });
    },
    onError: (error: any) => {
      setErrorMsg(
        "Arza jiberiwde qátelik: " +
          (error?.response?.data?.message || error.message || "")
      );
      setSuccessMsg("");
    }
  });

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  type InputField = {
    type: "input";
    props: React.ComponentProps<typeof FormInput>;
  };
  type TextareaField = {
    type: "textarea";
    props: React.ComponentProps<typeof FormTextarea>;
  };
  type Field = InputField | TextareaField;

  const formFields: Field[] = [
    {
      type: "input",
      props: {
        label: "Kompaniya atı",
        id: "company",
        type: "text",
        placeholder: "Bizler Group",
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: "[A-Za-zА-Яа-яЁё0-9\\s]+",
        value: formData.company,
        onChange: (e) => handleInputChange("company", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Lawazım",
        id: "position",
        type: "text",
        placeholder: "Senior Frontend Developer, Web Designer, h.t.b.",
        required: true,
        minLength: 3,
        maxLength: 100,
        value: formData.position,
        onChange: (e) => handleInputChange("position", e.target.value)
      }
    },
    {
      type: "textarea",
      props: {
        label: "Talaplar",
        id: "requirements",
        placeholder:
          "Komanda menen jaqsı islese alıwı kerek, 3 jıllıq tájiriybesi bolıwı kerek, h.t.b.",
        required: true,
        minLength: 3,
        maxLength: 500,
        value: formData.requirements,
        onChange: (e) => handleInputChange("requirements", e.target.value),
        rows: 4
      }
    },
    {
      type: "input",
      props: {
        label: "Aylıq",
        id: "salary",
        type: "text",
        placeholder: "1000$, 5 000 000 swm, h.t.b.",
        required: true,
        minLength: 5,
        maxLength: 200,
        value: formData.salary,
        onChange: (e) => handleInputChange("salary", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Baylanıs",
        id: "contact",
        type: "text",
        placeholder: "Telefon nomeri, telegram, email",
        required: true,
        minLength: 5,
        maxLength: 100,
        value: formData.contact,
        onChange: (e) => handleInputChange("contact", e.target.value)
      }
    }
  ];

  return (
    <div className="text-white">
      {/* Header */}
      <div className="px-4 py-4">
        <h1 className="text-blue-800 dark:text-blue-400 text-lg font-medium mt-4">
          Jumısshı izlew forması
        </h1>
      </div>

      {/* Feedback messages */}
      {successMsg && (
        <div className="bg-green-700/80 text-green-200 rounded px-4 py-2 mb-2">
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="bg-red-700/80 text-red-200 rounded px-4 py-2 mb-2">
          {errorMsg}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSuccessMsg("");
          setErrorMsg("");
          mutation.mutate(formData);
        }}
        className="px-4 space-y-6"
      >
        {formFields.map((field) => {
          if (field.type === "input") {
            return <FormInput key={field.props.id} {...field.props} />;
          } else if (field.type === "textarea") {
            return <FormTextarea key={field.props.id} {...field.props} />;
          }
          return null;
        })}

        <SendFormButton mutation={mutation} />
      </form>
    </div>
  );
}
