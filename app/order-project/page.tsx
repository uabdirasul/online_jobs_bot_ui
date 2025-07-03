"use client";

import { useState } from "react";

interface FormData {
  name: string;
  type: string;
  description: string;
  budget: string;
  contact: string;
}

const OrderProject = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    type: "",
    description: "",
    budget: "",
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
          Proyekt buyırtpa qılıw forması
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="px-4 space-y-6">
        {/* Name Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">
            Buyırtpashı atı
          </legend>
          <input
            type="text"
            placeholder="Bizler group yáki Ajiniyaz"
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

        {/* Type Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Proyekt-túri</legend>
          <input
            type="text"
            placeholder="Web sayt, mobil app, dizayn, h.t.b."
            required
            minLength={3}
            maxLength={100}
            value={formData.type}
            onChange={(e) => handleInputChange("type", e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
          />
        </fieldset>

        {/* Skills Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">
            Proyekt haqqında maǵlıwmat
          </legend>
          <textarea
            placeholder="HTML5, CSS3, python, javascript, typescript yaki Photoshop, Premiere pro, After effects"
            required
            minLength={3}
            maxLength={500}
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={4}
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0 resize-none"
          />
        </fieldset>

        {/* Budget Field */}
        <fieldset className="border border-white rounded-lg px-4 py-3">
          <legend className="text-gray-400 text-sm px-2">Budjet</legend>
          <input
            type="text"
            placeholder="Nokis qalasi, A. Dosnazarov 89"
            required
            minLength={5}
            maxLength={200}
            value={formData.budget}
            onChange={(e) => handleInputChange("budget", e.target.value)}
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
};

export default OrderProject;
