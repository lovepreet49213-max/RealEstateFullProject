  import React from "react";
import {
  ShieldCheck,
  Car,
  Clock,
  Warehouse,
  Zap,
  X,
  Lock,
  Wrench, Fan, MapPin,HomeIcon, Lightbulb
  
} from "lucide-react";

 
  export const Listitems = [
  {
    id: 1,
    name: "Downtown",
    type: "Rent",
    address: "123 Main St, City",
    distance: 1.2,
    images: ["/home-1.png", "/home-2.png"],
    description:
      "Secure garage with CCTV, 24/7 access, and covered parking.",
    price: "$150 / month",
    amenities: [
      { label: "CCTV Coverage", icon: ShieldCheck },
      { label: "Car Washing", icon: Car },
      { label: "24/7 Access", icon: Clock },
      { label: "Covered Parking", icon: Warehouse },
      { label: "EV Charging", icon: Zap },
      { label: "Secure Lock", icon: Lock },
      { label: "On-site Repair", icon: Wrench },
      { label: "Ventilated", icon: Fan },
     

    ],
    latitude: 30.824002009356846,
    longitude: 75.8384862016591,
  },
    {
    id: 2,
    name: "City Center",
    type: "Rent",
    address: "456 Oak Ave, City",
    distance: 0.8,
    images: ["/home-2.png", "/home-2.png"],
    description: "Convenient parking spot near downtown.",
    price: "$200 / month",    



    amenities: [
       { label: "CCTV Coverage", icon: ShieldCheck },

      { label: "Car Washing", icon: Car },
      { label: "24/7 Access", icon: Clock },
      { label: "Covered Parking", icon: Warehouse },
    
      { label: "On-site Repair", icon: Wrench },
      { label: "Ventilated", icon: Fan },
        { label: "EV Charging", icon: Zap },
      { label: "Secure Lock", icon: Lock },
    ],
    latitude: 30.825002009356846,
    longitude: 75.8394862016591,
    },
    {
    id: 3,
    name: "Suburban ",
    type: "Rent",
    address: "789 Pine Rd, City",
    distance: 2.5,
    images: ["/home-3.png", "/home-3.png"],
    description: "Spacious  in a quiet neighborhood.",
    price: "$120 / month",
    amenities: [
   
      { label: "Covered Parking", icon: Warehouse },
      { label: "EV Charging", icon: Zap },
      { label: "Secure Lock", icon: Lock },
      { label: "On-site Repair", icon: Wrench },
      { label: "Ventilated", icon: Fan },
       { label: "CCTV Coverage", icon: ShieldCheck },
      { label: "Car Washing", icon: Car },
      { label: "24/7 Access", icon: Clock },
    ],
    latitude: 30.826002009356846,
    longitude: 75.8404862016591,
    },
    {
      id: 4,
      name: "Luxury Villa",
      type: "Sell",
      address: "101 Luxury Ln, City",
      distance: 3.0,
      images: ["/home-1.png", "/home-1.png"],
      description: "Elegant villa with premium amenities.",
      price: "$500 / month",
      amenities: [
       
      { label: "24/7 Access", icon: Clock },
      { label: "Covered Parking", icon: Warehouse },
      { label: "EV Charging", icon: Zap },
      { label: "Secure Lock", icon: Lock },
      { label: "On-site Repair", icon: Wrench },
      { label: "Ventilated", icon: Fan },
      ],
        latitude: 30.827002009356846,
        longitude: 75.8414862016591,
    },
    {
      id: 5,
      name: "Downtown Loft",
      type: "Rent",
      address: "456 Oak Ave, City",
      distance: 0.8,
      images: ["/home-2.png", "/home-2.png"],
      description: "Modern loft in the heart of the city.",
      price: "$300 / month",
      amenities: [
        { label: "CCTV Coverage", icon: ShieldCheck },
      { label: "Car Washing", icon: Car },
      { label: "24/7 Access", icon: Clock },
      { label: "Covered Parking", icon: Warehouse },
      { label: "EV Charging", icon: Zap },
      
      { label: "Ventilated", icon: Fan },
      ],
        latitude: 30.828002009356846,
        longitude: 75.8424862016591,
    },
    {
      id: 6,
      name: "Cozy Cottage",
      type: "Rent",
      address: "321 Elm St, City",
      distance: 1.2,
      images: ["/home-3.png", "/home-3.png"],
      description: "Charming cottage with a rustic feel.",
      price: "$180 / month",  
      amenities: [
         { label: "CCTV Coverage", icon: ShieldCheck },
      { label: "Car Washing", icon: Car },
      { label: "24/7 Access", icon: Clock },
      { label: "Covered Parking", icon: Warehouse },
      
      { label: "On-site Repair", icon: Wrench },
      { label: "Ventilated", icon: Fan },
      ],
        latitude: 30.829002009356846,
        longitude: 75.8434862016591,
    },
  ];
    