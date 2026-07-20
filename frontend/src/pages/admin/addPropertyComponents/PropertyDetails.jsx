import {
  BedDouble,
  Bath,
  Square,
  Building,
  Car,
  Sofa,
  Star,
} from "lucide-react";



export default function PropertyDetails({
  formData,
  handleChange,
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">

      <h2 className="text-2xl font-bold text-white mb-6">
        Property Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Bedrooms */}

        <div>
          <label className="block text-white mb-2">
            Bedrooms
          </label>

          <div className="relative">

            <BedDouble
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="3"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

        {/* Bathrooms */}

        <div>
          <label className="block text-white mb-2">
            Bathrooms
          </label>

          <div className="relative">

            <Bath
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="2"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

        {/* Area */}

        <div>
          <label className="block text-white mb-2">
            Area (sq.ft.)
          </label>

          <div className="relative">

            <Square
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="1800"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

        {/* Floor */}

        <div>
          <label className="block text-white mb-2">
            Floor
          </label>

          <div className="relative">

            <Building
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="number"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              placeholder="5"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>
        </div>

      </div>

     

     

    </div>
  );
}