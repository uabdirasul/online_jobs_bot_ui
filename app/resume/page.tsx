"use client";
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
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Atiniz</legend>
          <input
            type="text"
            placeholder="Ajiniyaz"
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-zА-Яа-яЁё\s]+"
            title="Tek háripler hám bos orınlar bolıwı múmkin"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Profession Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Kasibiniz</legend>
          <input
            type="text"
            placeholder="Programmist, dizayner, rejissyor t.b"
            required
            minLength={3}
            maxLength={100}
            value={formData.profession}
            onChange={(e) => handleInputChange("profession", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Age Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Jasiniz</legend>
          <input
            type="number"
            placeholder="25"
            required
            min={16}
            max={100}
            value={formData.age || ""}
            onChange={(e) =>
              handleInputChange("age", parseInt(e.target.value) || 0)
            }
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Location Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Manziliniź</legend>
          <input
            type="text"
            placeholder="Nokis qalasi, A. Dosnazarov 89"
            required
            minLength={5}
            maxLength={200}
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Skills Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">
            Qanday uqıplarǧa iyesiz?
          </legend>
          <textarea
            placeholder="HTML5, CSS3, python, javascript, typescript yaki Photoshop, Premiere pro, After effects"
            required
            minLength={3}
            maxLength={500}
            value={formData.skills}
            onChange={(e) => handleInputChange("skills", e.target.value)}
            rows={4}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0 resize-none"
          />
        </fieldset>

        {/* Experience Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">
            Jumıs tájiriybeńiz
          </legend>
          <input
            type="text"
            placeholder="2 jil, 5 jil, yamasa 4 ay"
            required
            minLength={2}
            maxLength={50}
            value={formData.experience}
            onChange={(e) => handleInputChange("experience", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Portfolio Link Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">
            Portfolioǵa silteme
          </legend>
          <input
            type="url"
            placeholder="https://portfolio.com"
            value={formData.portfolio_link}
            onChange={(e) =>
              handleInputChange("portfolio_link", e.target.value)
            }
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Expected Salary Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">
            Kútilip atırǵan aylıq dáramat
          </legend>
          <input
            type="string"
            placeholder="500"
            required
            min={0}
            value={formData.expected_salary || ""}
            onChange={(e) =>
              handleInputChange(
                "expected_salary",
                parseInt(e.target.value) || 0
              )
            }
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Dream Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Máqsetińiz</legend>
          <textarea
            placeholder="Bilimlerimdi ele de tereńlestirejaqpan"
            value={formData.dream}
            onChange={(e) => handleInputChange("dream", e.target.value)}
            rows={3}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0 resize-none"
          />
        </fieldset>

        {/* Contact Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Baylanıs</legend>
          <input
            type="text"
            placeholder="Telefon nomeri, telegram, email"
            required
            minLength={5}
            maxLength={100}
            value={formData.contact}
            onChange={(e) => handleInputChange("contact", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

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
