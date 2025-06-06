
import { Routes, Route } from "react-router-dom";
import { galleryContent } from "@/data/content";

const GalleryHome = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <a href="/gallery/photos" className="group">
          <div className="bg-beige rounded-lg p-8 text-center hover:bg-accent transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-primary group-hover:text-navy mb-4">Photo Gallery</h2>
            <p className="text-gray-600 group-hover:text-navy">Explore our campus and activities through photos</p>
          </div>
        </a>
        <a href="/gallery/videos" className="group">
          <div className="bg-beige rounded-lg p-8 text-center hover:bg-accent transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-primary group-hover:text-navy mb-4">Video Gallery</h2>
            <p className="text-gray-600 group-hover:text-navy">Watch videos of our events and achievements</p>
          </div>
        </a>
      </div>
    </div>
  </div>
);

const Photos = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryContent.photos.map((photo) => (
          <div key={photo.id} className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-primary mb-2">{photo.title}</h3>
                <p className="text-sm text-gray-600">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Videos = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Video Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {galleryContent.videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={video.url}
                title={video.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-primary mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <Routes>
      <Route index element={<GalleryHome />} />
      <Route path="photos" element={<Photos />} />
      <Route path="videos" element={<Videos />} />
    </Routes>
  );
};

export default Gallery;
