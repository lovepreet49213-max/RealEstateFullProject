import { DollarSign, Tag, Home } from "lucide-react";

export default function PropertyPricing({
  formData,
  handleChange,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">

      <h2 className="text-2xl font-bold text-white mb-6">
        Pricing Information
      </h2>

      <div className="space-y-5">

        {/* Property Price */}

        <div>
          <label className="block text-white mb-2">
            Property Price
          </label>

          <div className="relative">

            <DollarSign
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="5000000"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

        {/* Discount */}

        <div>
          <label className="block text-white mb-2">
            Discount (%)
          </label>

          <div className="relative">

            <Tag
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              placeholder="10"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

        {/* Property Type */}

        <div>
          <label className="block text-white mb-2">
            Property Type
          </label>

          <div className="relative">

            <Home
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white"
            >
              <option className="text-black">
                Sale
              </option>

              <option className="text-black">
                Rent
              </option>

              <option className="text-black">
                Lease
              </option>

            </select>

          </div>
        </div>

        {/* Negotiable */}

        <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">

          <div>
            <h3 className="text-white font-medium">
              Negotiable Price
            </h3>

            <p className="text-gray-300 text-sm">
              Allow customers to negotiate
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              name="negotiable"
              checked={formData.negotiable}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "negotiable",
                    value: e.target.checked,
                  },
                })
              }
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:bg-green-500 transition-all"></div>

          </label>

        </div>

      </div>

    </div>
  );
}