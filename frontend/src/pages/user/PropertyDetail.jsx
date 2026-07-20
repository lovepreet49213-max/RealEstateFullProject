import react from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

import BookingModal from "../user/Booking/BookingModal.jsx";
import { useState } from "react";
import { getPropertyDetails } from "../../apiServices/PropertyApi.jsx";

import { useEffect } from "react";
import { Waves, Dumbbell, Trees, Building2, ShieldCheck, Wifi, Snowflake, BatteryCharging, Camera, Sofa, Star, Car, Handshake } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
function PropertyDetail() {



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
    { key: "featured", label: "Featured", icon: Star },
    { key: "coveredParking", label: "Covered Parking", icon: Car },
    { key: "wave", label: "Wave", icon: Handshake }
  ];






    const navigate = useNavigate();
    const { id } = useParams();
    const [bookingOpen,setBookingOpen]=useState(false);
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      const fetchPropertyDetails = async () => {
        try {
          const response = await getPropertyDetails(id);
          console.log("Property Details:", response.property);
          setPropertyDetails(response.property);
           if (response.property.images?.length) {
        setSelectedImage(response.property.images[0]);
      }
        }
        catch (error) {
          console.error("Error fetching property details:", error);
        }
      };
      fetchPropertyDetails();
    }
, [id]);
   
    const item = propertyDetails;
   
            if (!item) {
          return (
            <>
              
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold text-red-600">
                  Property Not Found
                </h1>
              </div>
              
            </>
          );
        }
   
    
    
    
    return (
       <>
  

  <div className="min-h-screen bg-slate-100 py-16 px-6">

    <div className="max-w-6xl mx-auto">

      {/* Heading */}

      <div className="text-center mb-14">

        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
          Property Details
        </span>

        <h1 className="text-5xl font-bold text-slate-800">
          {item.title}
        </h1>

        <p className="mt-4 text-slate-500 text-lg">
          Explore every detail before making your decision.
        </p>

      </div>

      {/* Back Button */}

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-700 font-semibold hover:text-indigo-700 transition"
      >
        ← Back to Listings
      </button>

      {/* Main Card */}

      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        <div className="grid lg:grid-cols-5">

          {/* Images */}

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
                    alt={item?.title}
                    className="w-full h-[470px] object-cover hover:scale-105 transition duration-500"
                  />

                  <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full text-white font-medium">
                    {item?.images?.length || 0} Photos
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
                    {item?.images?.map((img, index) => (
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

                {/* <div className="mt-14">

                  <h2 className="text-3xl font-bold text-white mb-8">
                    Property Features
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Furnished
                      </h4>

                      <p className="text-2xl font-bold text-white mt-3">
                        {item?.furnished ? "Yes" : "No"}
                      </p>

                    </div>

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Negotiable
                      </h4>

                      <p className="text-2xl font-bold text-white mt-3">
                        {item?.negotiable ? "Yes" : "No"}
                      </p>

                    </div>

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Featured Property
                      </h4>

                      <p className="text-2xl font-bold text-white mt-3">
                        {item?.featured ? "Yes" : "No"}
                      </p>

                    </div>

                    <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 hover:bg-white/20 transition">

                      <h4 className="text-gray-300">
                        Status
                      </h4>

                      <p
                        className={`text-2xl font-bold mt-3 ${
                          item?.status === "Active"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {item?.status}
                      </p>

                    </div>

                  </div>

                </div> */}









              </div>

          {/* Details */}

          <div className="lg:col-span-3 p-10">

            <div className="flex items-center justify-between flex-wrap gap-4">

              <h2 className="text-4xl font-bold text-slate-800">
                {item?.title}
              </h2>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  item?.type === "Rent"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {item?.type}
              </span>

            </div>

            <p className="mt-4 text-slate-500">
              📍 {item?.address}
            </p>

            <p className="mt-2 text-slate-500">
              📍 {item?.distance} km away
            </p>

            <h3 className="mt-8 text-3xl font-bold text-blue-700">
              {item?.price}
            </h3>

            <p className="mt-8 leading-8 text-slate-600">
              {item?.description}
            </p>

            {/* Amenities */}

            <div className="mt-10">

              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Amenities
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {amenitiesList
  .filter((amenity) => item?.amenities?.[amenity.key])
  .map((amenity, i) => {
    const Icon = amenity.icon;

    return (
      <div
        key={i}
        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 hover:shadow-lg transition"
      >
        <Icon className="w-5 h-5 text-blue-600" />

        <span className="font-medium text-slate-700">
          {amenity.label}
        </span>
      </div>
    );
  })}

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

         <button
                onClick={()=>setBookingOpen(true)}
                 className="flex-1 border-2 border-blue-600 text-blue-700 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Book Property
                </button>
                  {
                  bookingOpen &&
                  <BookingModal
                  property={item}
                  onClose={()=>setBookingOpen(false)}
                  />
                  }
              <button
                onClick={() => navigate("/contact")}
                className="flex-1 border-2 border-blue-600 text-blue-700 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
              >
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Map */}

      <div className="mt-14 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        <div className="p-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Property Location
          </h2>

          <div className="overflow-hidden rounded-2xl">

            <iframe
              title="Property Location"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${item?.latitude},${item?.longitude}&z=15&output=embed`}
            ></iframe>

          </div>

        </div>

      </div>

    </div>

  </div>

  
</>

    );
}
    export default PropertyDetail;