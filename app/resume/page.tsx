"use client";
import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";
import SendFormButton from "@/components/SendFormButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

interface FormData {
  full_name: string;
  age: number;
  profession: string;
  address: string;
  skills: string;
  experience: string;
  salary: string;
  goal: string;
  contacts: string;
  portfolio: string;
  init_data?: string;
}

interface TelegramWebApp {
  initData: string;
}

interface TelegramWindow extends Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}

export default function ResumeForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    profession: "",
    age: 0,
    address: "",
    skills: "",
    experience: "",
    portfolio: "",
    salary: "",
    goal: "",
    contacts: ""
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [initData, setInitData] = useState<string | null>(null);

  useEffect(() => {
    const telegramWindow = window as TelegramWindow;

    if (typeof window !== "undefined" && telegramWindow.Telegram?.WebApp) {
      setInitData(telegramWindow.Telegram.WebApp.initData || null);
    }
  }, []);

  // API call function
  const sendResume = async (data: FormData) => {
    if (initData) {
      data.init_data = initData;
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/send-resume/`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );

    return response.data;
  };

  const mutation = useMutation({
    mutationFn: sendResume,
    onSuccess: (data) => {
      setSuccessMsg("Arza jiberildi! (Successfully sent)");
      setErrorMsg("");
      setFormData({
        full_name: "",
        profession: "",
        age: 0,
        address: "",
        skills: "",
        experience: "",
        portfolio: "",
        salary: "",
        goal: "",
        contacts: ""
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
        label: "Tolıq atıńız",
        id: "name",
        type: "text",
        placeholder: "Ajiniyaz",
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: "[A-Za-zА-Яа-яЁёÀ-ÿ'’\\- ]{2,100}",
        value: formData.full_name,
        onChange: (e) => handleInputChange("full_name", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Kásibińiz",
        id: "profession",
        type: "text",
        placeholder: "Programmist, dizayner, rejissyor t.b",
        required: true,
        minLength: 3,
        maxLength: 100,
        value: formData.profession,
        onChange: (e) => handleInputChange("profession", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Jasıńız",
        id: "age",
        type: "number",
        placeholder: "25",
        required: true,
        minLength: 16,
        maxLength: 100,
        value: formData.age || "",
        onChange: (e) => handleInputChange("age", parseInt(e.target.value) || 0)
      }
    },
    {
      type: "input",
      props: {
        label: "Mánzilińiz",
        id: "address",
        type: "text",
        placeholder: "Nokis qalasi, A. Dosnazarov 89",
        required: true,
        minLength: 5,
        maxLength: 200,
        value: formData.address,
        onChange: (e) => handleInputChange("address", e.target.value)
      }
    },
    {
      type: "textarea",
      props: {
        label: "Qanday uqıplarǧa iyesiz?",
        id: "skills",
        placeholder:
          "HTML5, CSS3, python, javascript, typescript yaki Photoshop, Premiere pro, After effects",
        required: true,
        minLength: 3,
        maxLength: 500,
        value: formData.skills,
        onChange: (e) => handleInputChange("skills", e.target.value),
        rows: 4
      }
    },
    {
      type: "input",
      props: {
        label: "Jumıs tájiriybeńiz",
        id: "experience",
        type: "text",
        placeholder: "2 jil, 5 jil, yamasa 4 ay",
        required: true,
        minLength: 2,
        maxLength: 50,
        value: formData.experience,
        onChange: (e) => handleInputChange("experience", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Portfolioǵa silteme",
        id: "portfolio_link",
        type: "url",
        placeholder: "https://portfolio.com",
        value: formData.portfolio,
        onChange: (e) => handleInputChange("portfolio", e.target.value)
      }
    },
    {
      type: "input",
      props: {
        label: "Kútilip atırǵan aylıq dáramat",
        id: "salary",
        type: "string",
        placeholder: "500$ yáki 2 000 000 swm, h.t.b.",
        required: true,
        minLength: 0,
        maxLength: 100,
        value: formData.salary || "",
        onChange: (e) => handleInputChange("salary", e.target.value)
      }
    },
    {
      type: "textarea",
      props: {
        label: "Máqsetińiz",
        id: "goal",
        minLength: 3,
        maxLength: 500,
        required: true,
        placeholder: "Bilimlerimdi ele de tereńlestirejaqpan",
        value: formData.goal,
        onChange: (e) => handleInputChange("goal", e.target.value),
        rows: 3
      }
    },
    {
      type: "input",
      props: {
        label: "Baylanıs",
        id: "contacts",
        type: "text",
        placeholder: "Telefon nomeri, telegram, email",
        required: true,
        minLength: 5,
        maxLength: 100,
        value: formData.contacts,
        onChange: (e) => handleInputChange("contacts", e.target.value)
      }
    }
  ];

  return (
    <div className="text-white">
      {/* Header */}
      <div className="px-4 py-4">
        <h1 className="text-blue-800 dark:text-blue-400 text-lg font-medium mt-4">
          Rezyume forması
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
