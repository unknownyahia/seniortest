import { Upload, X } from "lucide-react";
import { useState } from "react";

export default function PhotoUpload() {
  const [photos, setPhotos] = useState<string[]>([]);
  const maxPhotos = 4;

  const addPhoto = (e: React.DragEvent | React.ChangeEvent) => {
    e.preventDefault();
    if (photos.length >= maxPhotos) return;

    // Simulate adding placeholder photos
    const newPhoto = `https://images.unsplash.com/photo-${Math.random()
      .toString()
      .slice(2)}?w=200&h=200&fit=crop`;
    setPhotos([...photos, newPhoto]);
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-coral font-bold text-lg">3.</span>
        <label className="text-sm font-semibold text-slate-900">
          Add a photo or video <span className="text-slate-500 font-normal">(optional)</span>
        </label>
      </div>

      {/* Upload area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={addPhoto}
        className="relative border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-coral hover:bg-coral-50/30 transition-colors cursor-pointer group"
      >
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={addPhoto}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center gap-3">
          <Upload size={32} className="text-slate-400 group-hover:text-coral transition-colors" />
          <div>
            <p className="text-sm font-medium text-slate-900">
              Drag and drop or click to upload
            </p>
            <p className="text-xs text-slate-500 mt-1">
              JPG, PNG, MP4, up to 15MB
            </p>
          </div>
        </div>
      </div>

      {/* Photo thumbnails */}
      {photos.length > 0 && (
        <div className="grid grid-cols-4 gap-3 pt-2">
          {Array.from({ length: maxPhotos }).map((_, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-lg border border-slate-200 overflow-hidden bg-slate-100 group"
            >
              {photos[index] ? (
                <>
                  <img
                    src={photos[index]}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 p-1 bg-slate-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={14} />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <span className="text-xs font-medium opacity-50">Empty</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tip */}
      <p className="text-xs text-slate-600 flex items-center gap-1">
        <span>💡</span>
        Color photos get more engagement
      </p>
    </div>
  );
}
