import { Save, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SubmitSection({
  loading,
  submitText = "Add Property",
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 mt-8">

      <div className="flex flex-col md:flex-row justify-end items-center gap-4">

        {/* Cancel Button */}

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
        >
          <X size={20} />
          Cancel
        </button>

        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}
          className={`w-full md:w-auto flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-semibold text-white shadow-xl transition-all duration-300
          
          ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:scale-105"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Saving...
            </>
          ) : (
            <>
              <Save size={20} />
              {submitText}
            </>
          )}
        </button>

      </div>

    </div>
  );
}