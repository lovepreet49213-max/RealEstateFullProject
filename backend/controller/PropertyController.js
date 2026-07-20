import Property from "../models/Property.js";

 export async function addProperty(req, res) {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const images = req.files
      ? req.files.map(file => file.path)
      : [];

    const amenities = req.body.amenities
      ? JSON.parse(req.body.amenities)
      : {};

    const property = await Property.create({
      // Basic Info
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,

      // Pricing
      price: Number(req.body.price),
      discount: Number(req.body.discount || 0),
      type: req.body.type,
      negotiable: req.body.negotiable === "true",

      // Details
      bedrooms: Number(req.body.bedrooms || 0),
      bathrooms: Number(req.body.bathrooms || 0),
      area: Number(req.body.area || 0),
      floor: Number(req.body.floor || 0),

      parking: req.body.parking === "true",
      furnished: req.body.furnished === "true",
      featured: req.body.featured === "true",

      // Location
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      pincode: req.body.pincode,

      latitude: Number(req.body.latitude),
      longitude: Number(req.body.longitude),

      // Amenities
      amenities,

      // Images
      images,
      coverImage: images.length ? images[0] : "",

      // Owner
      createdBy: null
    });

    return res.status(201).json({
      success: true,
      message: "Property added successfully",
      property,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error adding property",
      error: error.message,
    });
  }
}

export async function getAllProperties(req, res) {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Properties fetched successfully",
      count: properties.length,
      properties,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching properties",
      error: error.message,
    });
  }
}

export async function getPropertyById(req, res) {
  try {
    const { id } = req.params;

    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      property,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching property",
      error: error.message,
    });
  }
}

export async function updateProperty(req, res) {
  try {
    const { id } = req.params;

    // New uploaded images
    const images = req.files
      ? req.files.map((file) => file.path)
      : [];

    // Amenities
    const amenities = req.body.amenities
      ? JSON.parse(req.body.amenities)
      : {};

    const updatedData = {
      // Basic Info
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,

      // Pricing
      price: Number(req.body.price),
      discount: Number(req.body.discount || 0),
      type: req.body.type,
      negotiable: req.body.negotiable === "true",

      // Property Details
      bedrooms: Number(req.body.bedrooms || 0),
      bathrooms: Number(req.body.bathrooms || 0),
      area: Number(req.body.area || 0),
      floor: Number(req.body.floor || 0),

      parking: req.body.parking === "true",
      furnished: req.body.furnished === "true",
      featured: req.body.featured === "true",

      // Location
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      pincode: req.body.pincode,
      latitude: Number(req.body.latitude),
      longitude: Number(req.body.longitude),

      // Amenities
      amenities,
    };

    // Update images only if new images are uploaded
    if (images.length > 0) {
      updatedData.images = images;
      updatedData.coverImage = images[0];
    }

    const property = await Property.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Property updated successfully",
      property,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error updating property",
      error: error.message,
    });
  }
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

export async function getPaginatedProperties(req, res) {
  try {
    const { page, limit } = req.params;
    
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 10;

    const totalProperties = await Property.countDocuments();
    const totalPages = Math.ceil(totalProperties / limitNumber);

    const properties = await Property.find()
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Paginated properties fetched successfully",
      currentPage: pageNumber,
      totalPages,
      totalProperties,
      properties,
    });
    } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching paginated properties",
      error: error.message,
    });
  } 
}
export async function getSimilarProperties(req, res) {
  try {
    const { id } = req.params;

    const current = await Property.findById(id);

    if (!current) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    const properties = await Property.find({
      _id: { $ne: id },
      category: current.category,
    }).limit(4);

    res.status(200).json({
      success: true,
      properties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getRecentProperties(req, res) {
  try {
    const properties = await Property.find()
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json({
      success: true,
      message: "Recent properties fetched successfully",
      properties,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching recent properties",
      error: error.message,
    });
  }
}
export async function getPropertyDetails(req, res) {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Property details fetched successfully",
      property,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error fetching property details",
      error: error.message,
    });
  }
}