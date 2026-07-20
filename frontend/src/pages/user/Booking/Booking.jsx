import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  MessageSquare,
  Send,
  MapPin,
  IndianRupee,
} from "lucide-react";

import { createBooking } from "../../../apiServices/BookingApi";
export default function BookingForm({
  property,
  closeModal,
}) {


  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const submitBooking = async (e) => {

    e.preventDefault();


    setLoading(true);



    const bookingData = {

      propertyId: property.id,

      propertyName: property.name,

      propertyPrice: property.price,

      propertyAddress: property.address,

      ...formData,

    };


    console.log("Booking Data:", bookingData);



    // API CALL HERE
    // await axios.post("/api/bookings", bookingData)
    await createBooking(bookingData)
      .then((response) => {
        console.log("Booking Successful:", response);
        alert("Booking Successful!");
      })
      .catch((error) => {
        console.error("Booking Failed:", error);
        alert("Booking Failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
        closeModal();
      });


    setTimeout(() => {

      setLoading(false);

      closeModal();

    }, 1000);


  };





  return (

    <form

      onSubmit={submitBooking}

      className="space-y-5"

    >




      {/* Property Information */}


      <div

        className="
          bg-slate-50
          rounded-2xl
          p-5
          border
          border-slate-200
        "

      >


        <h3 className="text-xl font-bold text-slate-800">

          {property.name}

        </h3>



        <div className="flex items-start gap-3 mt-4">


          <div

            className="
              bg-blue-100
              text-blue-700
              p-2
              rounded-xl
            "

          >

            <MapPin size={18}/>

          </div>



          <p className="text-slate-600">

            {property.address}

          </p>


        </div>





        <div className="flex items-center gap-3 mt-4">


          <div

            className="
              bg-blue-100
              text-blue-700
              p-2
              rounded-xl
            "

          >

            <IndianRupee size={18}/>

          </div>



          <p className="font-semibold text-blue-700">

            {property.price}

          </p>


        </div>


      </div>







      {/* User Details */}


      <div className="grid md:grid-cols-2 gap-5">


        <InputField

          label="Full Name"

          icon={<User size={20}/>}

          name="name"

          value={formData.name}

          onChange={handleChange}

          placeholder="Enter your name"

          autoComplete="name"

        />




        <InputField

          label="Email Address"

          icon={<Mail size={20}/>}

          name="email"

          type="email"

          value={formData.email}

          onChange={handleChange}

          placeholder="Enter email address"

          autoComplete="email"

        />


      </div>







      <InputField

        label="Phone Number"

        icon={<Phone size={20}/>}

        name="phone"

        type="tel"

        value={formData.phone}

        onChange={handleChange}

        placeholder="Enter phone number"

        autoComplete="tel"

      />









      {/* Visit Schedule */}


      <div className="grid md:grid-cols-2 gap-5">


        <InputField

          label="Visit Date"

          icon={<Calendar size={20}/>}

          name="date"

          type="date"

          value={formData.date}

          onChange={handleChange}

        />




        <InputField

          label="Preferred Time"

          icon={<Clock size={20}/>}

          name="time"

          type="time"

          value={formData.time}

          onChange={handleChange}

        />


      </div>








      {/* Message */}


      <div>


        <label className="block mb-2 font-semibold text-slate-700">

          Message

        </label>



        <div className="relative">


          <MessageSquare

            size={20}

            className="
              absolute
              left-4
              top-4
              text-slate-400
            "

          />



          <textarea

            name="message"

            value={formData.message}

            onChange={handleChange}

            rows="3"

            placeholder="Any specific requirement?"

            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              pl-12
              px-5
              py-3
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
              outline-none
              transition
              resize-none
            "

          />


        </div>


      </div>







      {/* Submit Button */}


      <button

        disabled={loading}

        className="
          w-full
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          text-white
          py-4
          rounded-xl
          font-semibold
          flex
          items-center
          justify-center
          gap-3
          shadow-lg
          hover:scale-105
          transition
          duration-300
          disabled:opacity-50
        "

      >


        {

          loading

          ?

          "Submitting..."

          :

          <>

            <Send size={20}/>

            Confirm Booking

          </>

        }


      </button>



    </form>

  );

}







// Reusable Input Component

function InputField({

  label,

  icon,

  name,

  type = "text",

  value,

  onChange,

  placeholder,

  autoComplete,

}) {


  return (

    <div>


      <label className="block mb-2 font-semibold text-slate-700">

        {label}

      </label>




      <div className="relative">


        <div

          className="
            absolute
            left-4
            top-3.5
            text-slate-400
          "

        >

          {icon}

        </div>




        <input

          required

          type={type}

          name={name}

          value={value}

          onChange={onChange}

          placeholder={placeholder}

          autoComplete={autoComplete}

          className="
            w-full
            rounded-xl
            border
            border-slate-300
            bg-slate-50
            pl-12
            px-5
            py-3
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            outline-none
            transition
          "

        />



      </div>


    </div>

  );

}