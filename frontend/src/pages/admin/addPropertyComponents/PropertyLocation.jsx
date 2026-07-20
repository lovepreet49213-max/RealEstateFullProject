import { MapPin, Globe, Navigation } from "lucide-react";

export default function PropertyLocation({
  formData,
  handleChange,
  setFormData,
}) {

  const getCurrentLocation = () => {

    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {

        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));

      },
      () => {
        alert("Unable to fetch location");
      }
    );
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Property Location
        </h2>

        <button
          type="button"
          onClick={getCurrentLocation}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white transition"
        >
          <Navigation size={18} />
          Use Current Location
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Address */}

        <div className="md:col-span-2">

          <label className="block text-white mb-2">
            Full Address
          </label>

          <div className="relative">

            <MapPin
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House No, Street..."
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>

        </div>

        {/* City */}

        <div>

          <label className="block text-white mb-2">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
          />

        </div>

        {/* State */}

        <div>

          <label className="block text-white mb-2">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
          />

        </div>

        {/* Country */}

        <div>

          <label className="block text-white mb-2">
            Country
          </label>

          <div className="relative">

            <Globe
              className="absolute left-3 top-3 text-gray-300"
              size={20}
            />

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full pl-10 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

          </div>

        </div>

        {/* Pincode */}

        <div>

          <label className="block text-white mb-2">
            Pincode
          </label>

          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="160001"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
          />

        </div>

        {/* Latitude */}

        <div>

          <label className="block text-white mb-2">
            Latitude
          </label>

          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
          />

        </div>

        {/* Longitude */}

        <div>

          <label className="block text-white mb-2">
            Longitude
          </label>

          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
          />

        </div>

      </div>

      {/* Google Map Preview */}

      {formData.latitude && formData.longitude && (

        <div className="mt-8">

          <h3 className="text-white font-semibold mb-3">
            Location Preview
          </h3>

          <div className="rounded-2xl overflow-hidden border border-white/20">

            <iframe
              title="Property Location"
              width="100%"
              height="350"
              loading="lazy"
              src={`https://www.google.com/maps?q=${formData.latitude},${formData.longitude}&z=15&output=embed`}
            />

          </div>

        </div>

      )}

    </div>
  );
}