import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Pencil,
  Waves,
  Dumbbell,
  Trees,
  Building2,
  ShieldCheck,
  Wifi,
  Snowflake,
  BatteryCharging,
  Camera,
  Sofa,
  BedDouble,
  Bath,
  Square,
  MapPin,
  Home,
  Building,
  IndianRupee,
  Car,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { getPropertyById } from "../../apiServices/propertyApi";

export default function ViewProperty() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const amenitiesList = [
    { key: "swimmingPool", label: "Swimming Pool", icon: Waves },
    { key: "gym", label: "Gym", icon: Dumbbell },
    { key: "garden", label: "Garden", icon: Trees },
    { key: "lift", label: "Lift", icon: Building2 },
    { key: "security", label: "24x7 Security", icon: ShieldCheck },
    { key: "wifi", label: "WiFi", icon: Wifi },
    { key: "ac", label: "Air Conditioner", icon: Snowflake },
    { key: "powerBackup", label: "Power Backup", icon: BatteryCharging },
    { key: "cctv", label: "CCTV", icon: Camera },
    { key: "furniture", label: "Furniture", icon: Sofa },
  ];

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const res = await getPropertyById(id);

      setProperty(res.property);

      if (res.property.images?.length) {
        setSelectedImage(res.property.images[0]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
   

        <div className="relative z-10 text-center">
          <div className="h-16 w-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>

          <h1 className="mt-8 text-4xl font-bold text-white">
            Loading Property...
          </h1>

          <p className="text-gray-300 mt-3">
            Please wait while we fetch the property details.
          </p>
        </div>
      
    );
  }

  return (
   

      <div className="relative z-10">

        {/* Header */}

        {/* <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">

          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-blue-300 transition font-semibold"
            >
              <ArrowLeft size={20} />
              Back
            </button>

            <Link
              to={`/admin/edit-property/${property._id}`}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-xl"
            >
              <Pencil size={18} />
              Edit Property
            </Link>

          </div>

        </div> */}

        <div className="max-w-7xl mx-auto px-6 py-14">

          {/* Heading */}

          <div className="text-center mb-12">

            {/* <span
              className={`inline-block px-5 py-2 rounded-full font-semibold mb-5 ${
                property.type === "Sale"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/40"
                  : "bg-green-500/20 text-green-300 border border-green-400/40"
              }`}
            >
              {property.type}
            </span> */}

            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              {property.title}
            </h1>

            {/* <p className="mt-5 flex justify-center items-center gap-2 text-gray-300 text-lg">
              <MapPin size={20} />

              {property.address}, {property.city}, {property.state}
            </p> */}

          </div>

          {/* Main Card */}

          <div className="rounded-[30px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">

            <div className="grid lg:grid-cols-5">

              {/* LEFT IMAGES */}

              <div className="lg:col-span-2 p-8 border-r border-white/10">

                {/* Main Image */}

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                  <img
                    src={
                      selectedImage
                        ? `http://localhost:8000/${selectedImage.replace(
                            /\\/g,
                            "/"
                          )}`
                        : "https://via.placeholder.com/800x600"
                    }
                    alt={property.title}
                    className="w-full h-[470px] object-cover hover:scale-105 transition duration-500"
                  />

                  <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full text-white font-medium">
                    {property.images?.length || 0} Photos
                  </div>

                </div>

                {/* Thumbnails */}

                <div className="mt-8">

                  <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={15}
                    slidesPerView={4}
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {property.images?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`http://localhost:8000/${img.replace(
                            /\\/g,
                            "/"
                          )}`}
                          onClick={() => setSelectedImage(img)}
                          className={`h-24 w-full rounded-2xl object-cover cursor-pointer border-4 transition-all duration-300 ${
                            selectedImage === img
                              ? "border-blue-500 scale-105"
                              : "border-transparent hover:border-white/50"
                          }`}
                          alt=""
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>
               
               



                        
                                      {/* Property Features */}

                <div className="mt-14">

                  <h2 className="text-3xl font-bold text-white mb-8">
                    Property Features
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Furnished
                      </h4>

                      <p className="text-2xl font-bold text-white mt-3">
                        {property.furnished ? "Yes" : "No"}
                      </p>

                    </div>

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Negotiable
                      </h4>

                      <p className="text-2xl font-bold text-white mt-3">
                        {property.negotiable ? "Yes" : "No"}
                      </p>

                    </div>

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Featured Property
                      </h4>

                      <p className="text-2xl font-bold text-white mt-3">
                        {property.featured ? "Yes" : "No"}
                      </p>

                    </div>

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Status
                      </h4>

                      <p
                        className={`text-2xl font-bold mt-3 ${
                          property.status === "Active"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {property.status}
                      </p>

                    </div>

                  </div>

                </div>









              </div>

              {/* RIGHT SIDE */}

              <div className="lg:col-span-3 p-10">
                                {/* Property Header */}

                <div className="flex justify-between items-center flex-wrap gap-5">

                  <div>

                    <h2 className="text-4xl font-bold text-white">
                      {property.title}
                    </h2>

                    <p className="flex items-center gap-2 mt-4 text-gray-300">
                      <MapPin size={18} />
                      {property.address}, {property.city}, {property.state},{" "}
                      {property.country}
                    </p>

                  </div>

                  <span
                    className={`px-5 py-2 rounded-full font-semibold ${
                      property.type === "Sale"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-400/40"
                        : "bg-green-500/20 text-green-300 border border-green-400/40"
                    }`}
                  >
                    {property.type}
                  </span>

                </div>

                {/* Price Card */}

                <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 shadow-2xl">

                  <div className="flex items-center gap-3 text-white">

                    <IndianRupee size={32} />

                    <h2 className="text-5xl font-bold">
                      {Number(property.price).toLocaleString("en-IN")}
                    </h2>

                  </div>

                  {property.discount > 0 && (
                    <p className="mt-3 text-blue-100 text-lg">
                      🎉 {property.discount}% Discount Available
                    </p>
                  )}

                </div>

                {/* Description */}

                <div className="mt-10">

                  <h3 className="text-3xl font-bold text-white mb-5">
                    Description
                  </h3>

                  <p className="leading-8 text-gray-300 text-lg">
                    {property.description}
                  </p>

                </div>

                {/* Quick Information */}

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                  <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:scale-105 transition">

                    <BedDouble className="text-blue-400 mb-4" size={32} />

                    <h3 className="text-3xl font-bold text-white">
                      {property.bedrooms}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      Bedrooms
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:scale-105 transition">

                    <Bath className="text-blue-400 mb-4" size={32} />

                    <h3 className="text-3xl font-bold text-white">
                      {property.bathrooms}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      Bathrooms
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:scale-105 transition">

                    <Square className="text-blue-400 mb-4" size={32} />

                    <h3 className="text-3xl font-bold text-white">
                      {property.area}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      Sq.ft Area
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:scale-105 transition">

                    <Building className="text-blue-400 mb-4" size={32} />

                    <h3 className="text-2xl font-bold text-white">
                      {property.category}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      Category
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:scale-105 transition">

                    <Home className="text-blue-400 mb-4" size={32} />

                    <h3 className="text-2xl font-bold text-white">
                      {property.floor}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      Floor
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:scale-105 transition">

                    <Car className="text-blue-400 mb-4" size={32} />

                    <h3 className="text-2xl font-bold text-white">
                      {property.parking ? "Available" : "Not Available"}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      Parking
                    </p>

                  </div>

                </div>

                {/* Amenities */}

                <div className="mt-14">

                  <h2 className="text-3xl font-bold text-white mb-8">
                    Amenities
                  </h2>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {amenitiesList
                      .filter((item) => property?.amenities?.[item.key])
                      .map((item, index) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-5 hover:bg-white/20 transition-all duration-300"
                          >
                            <Icon
                              className="text-blue-400"
                              size={28}
                            />

                            <span className="text-white font-semibold">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}

                  </div>

                </div>
                             

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="mt-14 rounded-[30px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">

            <div className="p-10">

              <h2 className="text-3xl font-bold text-white mb-8">
                Property Location
              </h2>

              <div className="overflow-hidden rounded-3xl border border-white/20 shadow-xl">

                <iframe
                  title="Property Location"
                  width="100%"
                  height="500"
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    
  );
}

