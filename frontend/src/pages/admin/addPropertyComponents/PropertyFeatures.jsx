import {
  Trees,
  Dumbbell,
  Wifi,
  ShieldCheck,
  Car,
  Waves,
  Building2,
  Snowflake,
  Zap,
  Camera,
} from "lucide-react";

const amenities = [
  {
    key: "swimmingPool",
    label: "Swimming Pool",
    icon: Waves,
  },
  {
    key: "gym",
    label: "Gym",
    icon: Dumbbell,
  },
  {
    key: "garden",
    label: "Garden",
    icon: Trees,
  },
  {
    key: "lift",
    label: "Lift",
    icon: Building2,
  },
  {
    key: "security",
    label: "24x7 Security",
    icon: ShieldCheck,
  },
  {
    key: "wifi",
    label: "Wi-Fi",
    icon: Wifi,
  },
  {
    key: "parking",
    label: "Covered Parking",
    icon: Car,
  },
  {
    key: "ac",
    label: "Air Conditioning",
    icon: Snowflake,
  },
  {
    key: "powerBackup",
    label: "Power Backup",
    icon: Zap,
  },
  {
    key: "cctv",
    label: "CCTV",
    icon: Camera,
  },
];

export default function PropertyAmenities({
  formData,
  setFormData,
}) {
  const toggleAmenity = (key) => {
    setFormData((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [key]: !prev.amenities[key],
      },
    }));
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Property Amenities
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

        {amenities.map((item) => {
          const Icon = item.icon;
          const active = formData.amenities[item.key];

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => toggleAmenity(item.key)}
              className={`rounded-2xl p-5 transition-all duration-300 border ${
                active
                  ? "bg-blue-600 border-blue-500 text-white shadow-xl scale-105"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:scale-105"
              }`}
            >
              <div className="flex flex-col items-center gap-3">

                <Icon size={32} />

                <span className="text-sm font-medium text-center">
                  {item.label}
                </span>

              </div>
            </button>
          );
        })}

      </div>

    </div>
  );
}