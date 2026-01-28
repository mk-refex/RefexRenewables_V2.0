import { useState } from 'react';

const ContentSection = () => {
  const [heroTitle, setHeroTitle] = useState('Investors Relations');
  const [heroImageUrl, setHeroImageUrl] = useState('https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20investors%20discussing%20financial%20reports%20and%20charts%20in%20modern%20corporate%20office%20setting%20with%20laptops%20and%20documents%20on%20conference%20table%20warm%20lighting&width=1920&height=600&seq=investors-hero-bg-001&orientation=landscape');
  const [previewImage, setPreviewImage] = useState(heroImageUrl);
  const [isSaved, setIsSaved] = useState(false);

  const handleImageUrlChange = (url: string) => {
    setHeroImageUrl(url);
    setPreviewImage(url);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setHeroImageUrl(result);
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // TODO: persist via DB later
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Investors Page - Hero Section</h1>
          <p className="text-gray-600 mt-1">Edit the hero section of the Investors page</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all whitespace-nowrap"
        >
          <i className="ri-save-line text-lg"></i>
          <span>{isSaved ? 'Saved!' : 'Save Changes'}</span>
        </button>
      </div>

      {isSaved && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <i className="ri-checkbox-circle-line text-green-600 text-xl"></i>
          <p className="text-green-800 font-medium">Changes saved successfully!</p>
        </div>
      )}

      {/* Hero Title Field */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Hero Title
        </label>
        <input
          type="text"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          placeholder="Enter hero title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Hero Image Field */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Hero Background Image
        </label>
        
        {/* Image URL Input */}
        <div>
          <label className="block text-xs text-gray-600 mb-2">Image URL</label>
          <input
            type="text"
            value={heroImageUrl}
            onChange={(e) => handleImageUrlChange(e.target.value)}
            placeholder="Paste image URL here"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Upload Button */}
        <div>
          <label className="block text-xs text-gray-600 mb-2">Or Upload Image</label>
          <label className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap">
            <i className="ri-upload-2-line text-lg"></i>
            <span>Upload Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Image Preview */}
        <div>
          <label className="block text-xs text-gray-600 mb-2">Preview</label>
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-300">
            <img
              src={previewImage}
              alt="Hero preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20investors%20discussing%20financial%20reports%20and%20charts%20in%20modern%20corporate%20office%20setting%20with%20laptops%20and%20documents%20on%20conference%20table%20warm%20lighting&width=1920&height=600&seq=investors-hero-bg-001&orientation=landscape';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  {heroTitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
