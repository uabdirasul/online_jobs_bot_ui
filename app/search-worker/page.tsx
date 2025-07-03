"use client";
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
          Jumısshı izlew forması
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="px-4 space-y-6">
        {/* Company Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Kompaniya atı</legend>
          <input
            type="text"
            placeholder="Bizler Group"
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-zА-Яа-яЁё\s]+"
            title="Tek háripler hám bos orınlar bolıwı múmkin"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Position Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Lawazım</legend>
          <input
            type="text"
            placeholder="Senior Frontend Developer, Web Designer, h.b.b."
            required
            minLength={3}
            maxLength={100}
            value={formData.position}
            onChange={(e) => handleInputChange("position", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Requirements Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Talaplar</legend>
          <textarea
            placeholder="Komanda menen jaqsı islese alıwı kerek, 3 jıllıq tájiriybesi bolıwı kerek, h.t.b."
            required
            minLength={3}
            maxLength={500}
            value={formData.requirements}
            onChange={(e) => handleInputChange("requirements", e.target.value)}
            rows={4}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0 resize-none"
          />
        </fieldset>

        {/* Salary Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Aylıq</legend>
          <input
            type="text"
            placeholder="1000$, 5 000 000 swm, h.t.b."
            required
            minLength={5}
            maxLength={200}
            value={formData.salary}
            onChange={(e) => handleInputChange("salary", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
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
