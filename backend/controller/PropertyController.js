import Property from "../models/Property.js";

 export async function addProperty(req, res) {
  
    const images = req.files ? req.files.map((file) => file.path) : [];
    const { title, description, price, type, bedrooms, bathrooms, area, city, address } = req.body;

    const property = await Property.create({
        title,
        description,
        price,
        type,
        bedrooms,
        bathrooms,
        area,
        city,
        address,
        images,
        createdBy: req.user.id

    }).then((property)=>{
        res.status(201).json({message:"Property added successfully",property});
    }).catch((error)=>{
        res.status(500).json({message:"Error adding property",error});
    });

}

export async function getAllProperties(req,res){
    await Property.find().then((properties)=>{

        res.status(200).json({message:"Properties fetched successfully",properties});
    })
    .catch((error)=>{
        res.status(500).json({message:"Error fetching properties",error});
    });


}


export async function updateProperty(req, res){
   
    const { id } = req.params;
    const { title, description, price, type, bedrooms, bathrooms, area, city, address } = req.body;

    await Property.findByIdAndUpdate(id, { title, description, price, type, bedrooms, bathrooms, area, city, address })
        .then((property) => {
            res.status(200).json({ message: "Property updated successfully", property });
        })
        .catch((error) => {
            res.status(500).json({ message: "Error updating property", error });
        });
}


export async function deleteProperty(req, res){
    const { id } = req.params;

    await Property.findByIdAndDelete(id)
        .then((property) => {
            res.status(200).json({ message: "Property deleted successfully", property });
        })
        .catch((error) => {
            res.status(500).json({ message: "Error deleting property", error });
        });

}