import { useRef } from "react";
import { UploadCloud, ImagePlus, Trash2, Star } from "lucide-react";

export default function PropertyImages({
  images,
  setImages,
  coverImage,
  setCoverImage,
}) {
  const inputRef = useRef();

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);

    if (!coverImage && newImages.length > 0) {
      setCoverImage(newImages[0].preview);
    }
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);

    setImages(updated);

    if (updated.length === 0) {
      setCoverImage("");
    } else if (coverImage === images[index].preview) {
      setCoverImage(updated[0].preview);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Property Images
      </h2>

      {/* Upload Area */}

      <div
        onClick={() => inputRef.current.click()}
        className="border-2 border-dashed border-white/30 rounded-2xl p-12 cursor-pointer hover:border-blue-500 transition text-center"
      >

        <UploadCloud
          className="mx-auto text-blue-400 mb-4"
          size={55}
        />

        <h3 className="text-xl text-white font-semibold">
          Upload Property Images
        </h3>

        <p className="text-gray-300 mt-2">
          Click to select one or more images
        </p>

      </div>

      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        accept="image/*"
        onChange={handleFiles}
      />

      {/* Preview */}

      {images.length > 0 && (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">

          {images.map((image, index) => (

            <div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-white/20 group"
            >

              <img
                src={image.preview}
                alt=""
                className="h-48 w-full object-cover"
              />

              {/* Cover */}

              <button
                type="button"
                onClick={() => setCoverImage(image.preview)}
                className={`absolute left-3 top-3 p-2 rounded-full ${
                  coverImage === image.preview
                    ? "bg-yellow-500"
                    : "bg-black/60"
                }`}
              >
                <Star size={18} className="text-white" />
              </button>

              {/* Delete */}

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-3 top-3 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <Trash2
                  size={18}
                  className="text-white"
                />
              </button>

            </div>

          ))}

        </div>

      )}

      {/* Cover Preview */}

      {coverImage && (

        <div className="mt-10">

          <h3 className="text-white font-semibold mb-4">
            Cover Image
          </h3>

          <div className="rounded-2xl overflow-hidden border border-white/20">

            <img
              src={coverImage}
              alt=""
              className="w-full h-80 object-cover"
            />

          </div>

        </div>

      )}

    </div>
  );
}