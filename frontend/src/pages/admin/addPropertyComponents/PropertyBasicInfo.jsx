import { Building2, Home, FileText } from "lucide-react";

export default function PropertyBasicInfo({
  formData,
  handleChange,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">

      <h2 className="text-2xl font-bold text-white mb-6">
        Property Information
      </h2>

      <div className="space-y-5">

        <div>
          <label className="text-white mb-2 block">
            Property Title
          </label>

          <div className="relative">

            <Home
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Luxury Villa"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

        <div>

          <label className="text-white mb-2 block">
            Category
          </label>

          <div className="relative">

            <Building2
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white"
            >
              <option className="text-black">
                House
              </option>

              <option className="text-black">
                Apartment
              </option>

              <option className="text-black">
                Villa
              </option>

              <option className="text-black">
                Commercial
              </option>

              <option className="text-black">
                Office
              </option>

              <option className="text-black">
                Land
              </option>

            </select>

          </div>

        </div>

        <div>

          <label className="text-white mb-2 block">
            Description
          </label>

          <div className="relative">

            <FileText
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your property..."
              className="w-full pl-10 pt-3 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 resize-none"
            />

          </div>

        </div>

      </div>

    </div>
  );
}