
import { useState } from "react";
import { Save, Edit, Plus, Trash2, Image, FileText } from "lucide-react";
import { bannerContent, galleryContent, facultyContent } from "@/data/content";
import { useToast } from "@/hooks/use-toast";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("banner");
  const [editingBanner, setEditingBanner] = useState(bannerContent);
  const [editingGallery, setEditingGallery] = useState(galleryContent);
  const [editingFaculty, setEditingFaculty] = useState(facultyContent);
  const { toast } = useToast();

  const tabs = [
    { id: "banner", label: "Banner Content", icon: Image },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "faculty", label: "Faculty", icon: FileText },
    { id: "pages", label: "Page Content", icon: FileText }
  ];

  const handleSave = () => {
    toast({
      title: "Changes Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const addGalleryPhoto = () => {
    const newPhoto = {
      id: Date.now(),
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      title: "New Photo",
      description: "Photo description"
    };
    setEditingGallery({
      ...editingGallery,
      photos: [...editingGallery.photos, newPhoto]
    });
  };

  const deleteGalleryPhoto = (id: number) => {
    setEditingGallery({
      ...editingGallery,
      photos: editingGallery.photos.filter(photo => photo.id !== id)
    });
  };

  const addFacultyMember = () => {
    const newMember = {
      id: Date.now(),
      name: "New Faculty Member",
      position: "Teacher",
      qualification: "M.A, B.Ed",
      experience: "5 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e5f0b3?w=300&h=300&fit=crop"
    };
    setEditingFaculty([...editingFaculty, newMember]);
  };

  const deleteFacultyMember = (id: number) => {
    setEditingFaculty(editingFaculty.filter(member => member.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                className="btn-primary inline-flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
              <a
                href="/"
                className="btn-secondary inline-flex items-center"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-colors duration-200 ${
                        activeTab === tab.id
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-beige"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {/* Banner Content Tab */}
              {activeTab === "banner" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Banner Content</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heading
                      </label>
                      <input
                        type="text"
                        value={editingBanner.heading}
                        onChange={(e) => setEditingBanner({...editingBanner, heading: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subheading
                      </label>
                      <input
                        type="text"
                        value={editingBanner.subheading}
                        onChange={(e) => setEditingBanner({...editingBanner, subheading: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Background Image URL
                      </label>
                      <input
                        type="url"
                        value={editingBanner.imageUrl}
                        onChange={(e) => setEditingBanner({...editingBanner, imageUrl: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <h3 className="font-medium mb-2">Preview</h3>
                      <div className="text-sm text-gray-600">
                        <p><strong>Heading:</strong> {editingBanner.heading}</p>
                        <p><strong>Subheading:</strong> {editingBanner.subheading}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Tab */}
              {activeTab === "gallery" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Gallery Management</h2>
                    <button
                      onClick={addGalleryPhoto}
                      className="btn-primary inline-flex items-center"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Photo
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {editingGallery.photos.map((photo) => (
                      <div key={photo.id} className="border rounded-lg p-4">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={photo.title}
                            onChange={(e) => {
                              const updated = editingGallery.photos.map(p => 
                                p.id === photo.id ? {...p, title: e.target.value} : p
                              );
                              setEditingGallery({...editingGallery, photos: updated});
                            }}
                            className="w-full px-2 py-1 text-sm border rounded"
                            placeholder="Photo title"
                          />
                          <input
                            type="url"
                            value={photo.url}
                            onChange={(e) => {
                              const updated = editingGallery.photos.map(p => 
                                p.id === photo.id ? {...p, url: e.target.value} : p
                              );
                              setEditingGallery({...editingGallery, photos: updated});
                            }}
                            className="w-full px-2 py-1 text-sm border rounded"
                            placeholder="Image URL"
                          />
                          <button
                            onClick={() => deleteGalleryPhoto(photo.id)}
                            className="w-full px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4 inline mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Tab */}
              {activeTab === "faculty" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Faculty Management</h2>
                    <button
                      onClick={addFacultyMember}
                      className="btn-primary inline-flex items-center"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Faculty
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {editingFaculty.map((member) => (
                      <div key={member.id} className="border rounded-lg p-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                        />
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => {
                              const updated = editingFaculty.map(m => 
                                m.id === member.id ? {...m, name: e.target.value} : m
                              );
                              setEditingFaculty(updated);
                            }}
                            className="w-full px-2 py-1 text-sm border rounded"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            value={member.position}
                            onChange={(e) => {
                              const updated = editingFaculty.map(m => 
                                m.id === member.id ? {...m, position: e.target.value} : m
                              );
                              setEditingFaculty(updated);
                            }}
                            className="w-full px-2 py-1 text-sm border rounded"
                            placeholder="Position"
                          />
                          <input
                            type="text"
                            value={member.qualification}
                            onChange={(e) => {
                              const updated = editingFaculty.map(m => 
                                m.id === member.id ? {...m, qualification: e.target.value} : m
                              );
                              setEditingFaculty(updated);
                            }}
                            className="w-full px-2 py-1 text-sm border rounded"
                            placeholder="Qualification"
                          />
                          <input
                            type="text"
                            value={member.experience}
                            onChange={(e) => {
                              const updated = editingFaculty.map(m => 
                                m.id === member.id ? {...m, experience: e.target.value} : m
                              );
                              setEditingFaculty(updated);
                            }}
                            className="w-full px-2 py-1 text-sm border rounded"
                            placeholder="Experience"
                          />
                          <button
                            onClick={() => deleteFacultyMember(member.id)}
                            className="w-full px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4 inline mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pages Tab */}
              {activeTab === "pages" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Page Content Editor</h2>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">About Page</h3>
                      <textarea
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter about page content..."
                        defaultValue="Lotus High School has been a beacon of educational excellence for over 25 years..."
                      />
                    </div>
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Admissions Page</h3>
                      <textarea
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter admissions content..."
                        defaultValue="Join our community of learners and leaders..."
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
