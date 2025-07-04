"use client";

import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";
import LoadingIcon from "@/components/LoadingIcon";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface FormData {
  client_name: string;
  project_type: string;
  description: string;
  budget: string;
  contact: string;
}

const OrderProject = () => {
  const [formData, setFormData] = useState<FormData>({
    client_name: "",
    project_type: "",
    description: "",
    budget: "",
    contact: ""
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // API call function
  const orderProject = async (data: FormData) => {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, value.toString());
    });
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/order-project/`,
      params,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: orderProject,
    onSuccess: (data) => {
      setSuccessMsg("Arza jiberildi! (Successfully sent)");
      setErrorMsg("");
      setFormData({
        client_name: "",
        project_type: "",
        description: "",
        budget: "",
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

  // Define form fields as an array with type-safe props
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
        label: "Buyırtpashı atı",
        id: "name",
        type: "text",
        placeholder: "Bizler group yáki Ajiniyaz",
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: "[A-Za-zА-Яа-яЁёs]+",
        value: formData.client_name,
        onChange: (e) => handleInputChange("client_name", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Proyekt-túri",
        id: "type",
        type: "text",
        placeholder: "Web sayt, mobil app, dizayn, h.t.b.",
        required: true,
        minLength: 3,
        maxLength: 100,
        value: formData.project_type,
        onChange: (e) => handleInputChange("project_type", e.target.value)
      }
    },
    {
      type: "textarea",
      props: {
        label: "Proyekt haqqında maǵlıwmat",
        id: "description",
        placeholder:
          "HTML5, CSS3, python, javascript, typescript yaki Photoshop, Premiere pro, After effects",
        required: true,
        minLength: 3,
        maxLength: 500,
        value: formData.description,
        onChange: (e) => handleInputChange("description", e.target.value),
        rows: 4
      }
    },
    {
      type: "input",
      props: {
        label: "Budjet",
        id: "budget",
        type: "text",
        placeholder: "Nokis qalasi, A. Dosnazarov 89",
        required: true,
        minLength: 5,
        maxLength: 200,
        value: formData.budget,
        onChange: (e) => handleInputChange("budget", e.target.value)
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
        <h1 className="text-blue-400 text-lg font-medium mt-4">
          Proyekt buyırtpa qılıw forması
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

        <div className="flex flex-col items-center mb-10">
          <p className="text-[#38bdf8] mb-3">
            Aǵza bolıw arqalı siz qupıyalıq siyasatı menen paydalanıw shártlerin
            qabıl etesiz
          </p>
          <button
            type="submit"
            className="w-fit bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors px-2 flex items-center justify-center min-w-[150px]"
            disabled={mutation.isPending}
          >
            {mutation.isPending && <LoadingIcon />}
            {mutation.isPending
              ? "Arza jiberilip atır"
              : "Kanalǵa arza jiberiw"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderProject;
