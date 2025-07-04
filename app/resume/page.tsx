"use client";
import FormInput from "@/components/FormInput";
import FormTextarea from "@/components/FormTextarea";
import { useState } from "react";

interface FormData {
  name: string;
  profession: string;
  age: number;
  location: string;
  skills: string;
  experience: string;
  portfolio_link: string;
  expected_salary: string;
  dream: string;
  contact: string;
}

export default function ResumeForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    profession: "",
    age: 0,
    location: "",
    skills: "",
    experience: "",
    portfolio_link: "",
    expected_salary: "",
    dream: "",
    contact: ""
  });

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="px-4 py-4">
        <h1 className="text-blue-400 text-lg font-medium mt-4">
          Rezyume forması
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="px-4 space-y-6">
        {/* Name Field */}
        <FormInput
          label="Atiniz"
          id="name"
          type="text"
          placeholder="Ajiniyaz"
          required
          minLength={2}
          maxLength={50}
          pattern="[A-Za-zА-Яа-яЁё\s]+"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />

        {/* Profession Field */}
        <FormInput
          label="Kasibiniz"
          id="profession"
          type="text"
          placeholder="Programmist, dizayner, rejissyor t.b"
          required
          minLength={3}
          maxLength={100}
          value={formData.profession}
          onChange={(e) => handleInputChange("profession", e.target.value)}
        />

        {/* Age Field */}
        <FormInput
          label="Jasıńız"
          id="age"
          type="number"
          placeholder="25"
          required
          minLength={16}
          maxLength={100}
          value={formData.age || ""}
          onChange={(e) =>
            handleInputChange("age", parseInt(e.target.value) || 0)
          }
        />

        {/* Location Field */}
        <FormInput
          label="Mánzilińiz"
          id="location"
          type="text"
          placeholder="Nokis qalasi, A. Dosnazarov 89"
          required
          minLength={5}
          maxLength={200}
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />

        {/* Skills Field */}
        <FormTextarea
          label="Qanday uqıplarǧa iyesiz?"
          id="skills"
          placeholder="HTML5, CSS3, python, javascript, typescript yaki Photoshop, Premiere pro, After effects"
          required
          minLength={3}
          maxLength={500}
          value={formData.skills}
          onChange={(e) => handleInputChange("skills", e.target.value)}
          rows={4}
        />

        {/* Experience Field */}
        <FormInput
          label="Jumıs tájiriybeńiz"
          id="experience"
          type="text"
          placeholder="2 jil, 5 jil, yamasa 4 ay"
          required
          minLength={2}
          maxLength={50}
          value={formData.experience}
          onChange={(e) => handleInputChange("experience", e.target.value)}
        />

        {/* Portfolio Link Field */}
        <FormInput
          label="Portfolioǵa silteme"
          id="portfolio_link"
          type="url"
          placeholder="https://portfolio.com"
          value={formData.portfolio_link}
          onChange={(e) => handleInputChange("portfolio_link", e.target.value)}
        />

        {/* Expected Salary Field */}
        <FormInput
          label="Kútilip atırǵan aylıq dáramat"
          id="expected_salary"
          type="string"
          placeholder="500$ yáki 2 000 000 swm, h.t.b."
          required
          minLength={0}
          value={formData.expected_salary || ""}
          onChange={(e) =>
            handleInputChange("expected_salary", parseInt(e.target.value) || 0)
          }
        />

        {/* Dream Field */}
        <FormTextarea
          label="Máqsetińiz"
          id="dream"
          minLength={3}
          maxLength={500}
          required
          placeholder="Bilimlerimdi ele de tereńlestirejaqpan"
          value={formData.dream}
          onChange={(e) => handleInputChange("dream", e.target.value)}
          rows={3}
        />

        {/* Contact Field */}
        <FormInput
          label="Baylanıs"
          id="contact"
          type="text"
          placeholder="Telefon nomeri, telegram, email"
          required
          minLength={5}
          maxLength={100}
          value={formData.contact}
          onChange={(e) => handleInputChange("contact", e.target.value)}
        />

        <div className="flex flex-col items-center mb-10">
          <p className="text-[#38bdf8] mb-3">
            Aǵza bolıw arqalı siz qupıyalıq siyasatı menen paydalanıw shártlerin
            qabıl etesiz
          </p>
          <button
            type="submit"
            className="w-fit bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors px-2"
          >
            Kanalǵa arza jiberiw
          </button>
        </div>
      </form>
    </div>
  );
}
