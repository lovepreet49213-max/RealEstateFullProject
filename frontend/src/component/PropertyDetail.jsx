import react from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Listitems } from "../Dummydata/Properties.jsx";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';




function PropertyDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    
   
    const item = Listitems.find((x) => x.id === parseInt(id));
   
    
   
    
    
    
    return (
        <>

            <Navbar />
            
    <div className="min-h-screen bg-gray-50">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-indigo-600 hover:underline"
        >
          ← Back to Garages
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-7xl mx-auto px-6 py-8 bg-white rounded-xl shadow-lg">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Images */}
          <div className="grid gap-4">
            {item.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="mt-4 text-3xl font-bold text-indigo-600">{item.name}</h1>
              <p className="text-gray-600 mt-1">{item.address}</p>
              <p className="text-sm text-gray-500 mt-1">
                {item.distance} km away
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                  item.type === "Rent"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {item.type}
              </span>

              <p className="mt-4 text-gray-700">
                {item.description}
              </p>

              <p className="mt-4 text-2xl font-bold text-indigo-600">
                {item.price}
              </p>

              {/* Amenities */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {item.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 border rounded-lg px-4 py-3 hover:shadow-md transition"
                    >
                      <amenity.icon className="w-5 h-5 text-indigo-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setOpenBooking(true)}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                Book Garage
              </button>
              <button
               onClick={() => navigate("/contact")}
                className="flex-1 border border-indigo-600 text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Garage Location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${item.latitude},${item.longitude}&z=15&output=embed`}
          ></iframe>
        </div>
      </div>

    </div>
  
            <Footer />
        </>
    );
}
    export default PropertyDetail;