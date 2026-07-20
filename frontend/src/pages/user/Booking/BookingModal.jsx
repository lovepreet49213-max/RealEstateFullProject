import { X, CalendarCheck } from "lucide-react";

import BookingForm from "../Booking/Booking";


export default function BookingModal({

  property,

  onClose,

}) {


  return (

    <div

      className="
        fixed
        inset-0
        bg-black/50
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        px-4
        py-6
      "

    >




      <div

        className="
          bg-white
          rounded-3xl
          w-full
          max-w-2xl
          shadow-2xl
          border
          border-slate-200
          relative
          overflow-hidden
          animate-in
          fade-in
          zoom-in-95
          duration-200
        "

      >





        {/* Header */}


        <div

          className="
            bg-gradient-to-r
            from-blue-700
            to-indigo-800
            text-white
            px-8
            py-6
            flex
            items-center
            justify-between
          "

        >



          <div className="flex items-center gap-3">


            <div

              className="
                bg-white/20
                p-3
                rounded-xl
              "

            >

              <CalendarCheck size={24}/>

            </div>





            <div>


              <h2 className="text-2xl font-bold">

                Book Property Visit

              </h2>



              <p className="text-blue-100 text-sm">

                Schedule your property inspection

              </p>



            </div>


          </div>






          <button

            onClick={onClose}

            className="
              bg-white/20
              hover:bg-white/30
              p-2
              rounded-xl
              transition
              duration-300
            "

          >

            <X size={22}/>

          </button>




        </div>







        {/* Form Section */}


        <div

          className="
            p-8
            max-h-[80vh]
            overflow-y-auto
            lg:max-h-none
            lg:overflow-visible
          "

        >


          <BookingForm

            property={property}

            closeModal={onClose}

          />


        </div>





      </div>



    </div>

  );

}