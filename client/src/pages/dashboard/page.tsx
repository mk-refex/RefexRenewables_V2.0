import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import OverviewSection from './components/OverviewSection';
import UsersSection from './components/UsersSection';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('pages');
  const [activePage, setActivePage] = useState('overview');
  const [activeTab, setActiveTab] = useState('hero');
  const [showPreview, setShowPreview] = useState(false);

  // Snackbar State
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState<'success' | 'error' | 'info'>('success');

  // CMS Content State - Investors Page Hero
  const [investorsHeroTitle, setInvestorsHeroTitle] = useState('Investor Relations');
  const [investorsHeroImage, setInvestorsHeroImage] = useState('https://readdy.ai/api/search-image?query=modern%20corporate%20finance%20building%20glass%20architecture%20professional%20business%20investment%20wealth%20management%20skyline%20sophisticated%20elegant%20minimalist%20background&width=1920&height=600&seq=investors-hero-001&orientation=landscape');
  const [imagePreview, setImagePreview] = useState('');

  // Related Links CMS State
  const [relatedLinksCategories, setRelatedLinksCategories] = useState([
    {
      id: 1,
      name: 'Shareholding Pattern',
      order: 1,
      sections: [
        {
          id: 1,
          name: '2025 - 2026',
          order: 1,
          items: [
            {
              id: 1,
              name: 'June - 2025',
              publishDate: '2025-06-30',
              pdfUrl: '/reports/RRIL-Shareholding_Pattern_30.06.2025.pdf',
              imageUrl: '',
              isStatic: false,
              order: 1
            }
          ]
        }
      ]
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Snackbar function
  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    // Set default tab for each page
    const defaultTabs: { [key: string]: string } = {
      home: 'hero',
      about: 'hero',
      solar: 'hero',
      cbg: 'hero',
      ess: 'hero',
      biodhanic: 'hero',
      spectrum: 'hero',
      vyzag: 'hero',
      esg: 'hero',
      investors: 'hero',
      contact: 'hero',
      header: 'navigation',
      footer: 'about-links',
    };
    setActiveTab(defaultTabs[page] || '');
  };

  // Define tabs for each page
  const pageTabs: { [key: string]: { id: string; label: string }[] } = {
    home: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'business', label: 'Our Business' },
      { id: 'strengths', label: 'Our Strengths' },
      { id: 'presence', label: 'Presence' },
      { id: 'awards', label: 'Awards' },
    ],
    about: [
      { id: 'hero', label: 'Hero' },
      { id: 'overview', label: 'Overview' },
      { id: 'vision', label: 'Vision & Mission' },
      { id: 'values', label: 'Core Values' },
      { id: 'journey', label: 'Journey' },
      { id: 'board', label: 'Board' },
      { id: 'management', label: 'Senior Management' },
      { id: 'committees', label: 'Committees' },
    ],
    solar: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'offerings', label: 'Offerings' },
    ],
    cbg: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'offerings', label: 'Offerings' },
      { id: 'initiatives', label: 'Initiatives' },
      { id: 'projects', label: 'Projects' },
    ],
    ess: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'storage', label: 'Storage' },
      { id: 'microgrid', label: 'Micro Grid' },
      { id: 'capabilities', label: 'Capabilities' },
      { id: 'projects', label: 'Projects' },
    ],
    biodhanic: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'benefits', label: 'Benefits' },
      { id: 'why', label: 'Why Use' },
      { id: 'launch', label: 'Launch' },
      { id: 'cta', label: 'CTA' },
    ],
    spectrum: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'facility', label: 'Facility' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'contact', label: 'Contact' },
    ],
    vyzag: [
      { id: 'hero', label: 'Hero' },
      { id: 'about', label: 'About' },
      { id: 'highlights', label: 'Highlights' },
      { id: 'lfom', label: 'LFOM' },
      { id: 'outputs', label: 'Outputs' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'contact', label: 'Contact' },
    ],
    esg: [
      { id: 'hero', label: 'Hero' },
      { id: 'intro', label: 'Introduction' },
      { id: 'values', label: 'Values' },
      { id: 'sdg', label: 'SDG' },
      { id: 'accordion', label: 'Accordion' },
      { id: 'policies', label: 'Policies' },
      { id: 'reports', label: 'Reports' },
    ],
    investors: [
      { id: 'hero', label: 'Hero' },
      // { id: 'quote', label: 'Stock Quote' },
      // { id: 'chart', label: 'Stock Chart' },
      // { id: 'historical', label: 'Historical Stock' },
      { id: 'links', label: 'Related Links' },
    ],
    contact: [
      { id: 'hero', label: 'Hero' },
      { id: 'info', label: 'Contact Info' },
      { id: 'form', label: 'Contact Form' },
      { id: 'map', label: 'Map' },
    ],
    header: [
      { id: 'navigation', label: 'Navigation' },
      { id: 'logo', label: 'Logo' },
      { id: 'menu', label: 'Menu Items' },
    ],
    footer: [
      { id: 'about-links', label: 'About Links' },
      { id: 'business-links', label: 'Business Links' },
      { id: 'sustainability-links', label: 'Sustainability Links' },
      { id: 'investor-links', label: 'Investor Links' },
      { id: 'copyright', label: 'Copyright' },
    ],
  };

  const currentTabs = pageTabs[activePage] || [];

  // Get the preview URL based on active page
  const getPreviewUrl = () => {
    const pageRoutes: { [key: string]: string } = {
      home: '/',
      about: '/about-us',
      solar: '/solar-energy',
      cbg: '/compressed-bio-gas',
      ess: '/energy-storage-solutions',
      biodhanic: '/biodhanic',
      spectrum: '/spectrum-renewable',
      vyzag: '/vyzag-bio-energy',
      esg: '/esg',
      investors: '/investors',
      contact: '/contact',
    };
    return pageRoutes[activePage] || '/';
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all changes? This action cannot be undone.')) {
      // Reset logic based on page and tab
      console.log('Reset changes for:', activePage, activeTab);
      
      // Reset Investors Hero
      if (activePage === 'investors' && activeTab === 'hero') {
        setInvestorsHeroTitle('Investor Relations');
        setInvestorsHeroImage('https://readdy.ai/api/search-image?query=modern%20corporate%20finance%20building%20glass%20architecture%20professional%20business%20investment%20wealth%20management%20skyline%20sophisticated%20elegant%20minimalist%20background&width=1920&height=600&seq=investors-hero-001&orientation=landscape');
        setImagePreview('');
        showNotification('Changes have been reset successfully!', 'info');
      }

      // Reset Related Links
      if (activePage === 'investors' && activeTab === 'links') {
        setRelatedLinksCategories([
          {
            id: 1,
            name: 'Shareholding Pattern',
            order: 1,
            sections: [
              {
                id: 1,
                name: '2025 - 2026',
                order: 1,
                items: [
                  {
                    id: 1,
                    name: 'June - 2025',
                    publishDate: '2025-06-30',
                    pdfUrl: '/reports/RRIL-Shareholding_Pattern_30.06.2025.pdf',
                    imageUrl: '',
                    isStatic: false,
                    order: 1
                  }
                ]
              }
            ]
          }
        ]);
        setSelectedCategory(null);
      }

      showNotification('Changes have been reset successfully!', 'info');
    }
  };

  const handleSave = () => {
    // Save logic based on page and tab
    console.log('Save changes for:', activePage, activeTab);
    
    // Save Investors Hero
    if (activePage === 'investors' && activeTab === 'hero') {
      localStorage.setItem('investors_hero_title', investorsHeroTitle);
      localStorage.setItem('investors_hero_image', investorsHeroImage);
    }

    // Save Related Links
    if (activePage === 'investors' && activeTab === 'links') {
      localStorage.setItem('investors_related_links', JSON.stringify(relatedLinksCategories));
    }
    
    showNotification('Changes saved successfully!', 'success');
  };

  const handleImageUrlChange = (url: string) => {
    if (activePage === 'investors' && activeTab === 'hero') {
      setInvestorsHeroImage(url);
      setImagePreview(url);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (activePage === 'investors' && activeTab === 'hero') {
          setInvestorsHeroImage(result);
          setImagePreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePDFUpload = (categoryId: number, sectionId: number, itemId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload to a server here
      const fakeUrl = `/uploads/${file.name}`;
      updateItem(categoryId, sectionId, itemId, { pdfUrl: fakeUrl });
      showNotification('PDF uploaded successfully!', 'success');
    }
  };

  const handleItemImageUpload = (categoryId: number, sectionId: number, itemId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        updateItem(categoryId, sectionId, itemId, { imageUrl: result });
        showNotification('Image uploaded successfully!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  // Category Management Functions
  const addCategory = () => {
    const newId = Math.max(...relatedLinksCategories.map(c => c.id), 0) + 1;
    const newCategory = {
      id: newId,
      name: 'New Category',
      order: relatedLinksCategories.length + 1,
      sections: []
    };
    setRelatedLinksCategories([...relatedLinksCategories, newCategory]);
    setSelectedCategory(newId);
    showNotification('Category added successfully!', 'success');
  };

  const updateCategoryName = (categoryId: number, newName: string) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat =>
        cat.id === categoryId ? { ...cat, name: newName } : cat
      )
    );
  };

  const deleteCategory = (categoryId: number) => {
    if (window.confirm('Are you sure you want to delete this category? All sections and items will be removed.')) {
      setRelatedLinksCategories(categories => categories.filter(cat => cat.id !== categoryId));
      if (selectedCategory === categoryId) {
        setSelectedCategory(null);
      }
      showNotification('Category deleted successfully!', 'success');
    }
  };

  const moveCategoryUp = (categoryId: number) => {
    const index = relatedLinksCategories.findIndex(cat => cat.id === categoryId);
    if (index > 0) {
      const newCategories = [...relatedLinksCategories];
      [newCategories[index - 1], newCategories[index]] = [newCategories[index], newCategories[index - 1]];
      setRelatedLinksCategories(newCategories);
    }
  };

  const moveCategoryDown = (categoryId: number) => {
    const index = relatedLinksCategories.findIndex(cat => cat.id === categoryId);
    if (index < relatedLinksCategories.length - 1) {
      const newCategories = [...relatedLinksCategories];
      [newCategories[index], newCategories[index + 1]] = [newCategories[index + 1], newCategories[index]];
      setRelatedLinksCategories(newCategories);
    }
  };

  // Section Management Functions
  const addSection = (categoryId: number) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          const newSectionId = Math.max(...cat.sections.map(s => s.id), 0) + 1;
          const newSection = {
            id: newSectionId,
            name: 'New Section',
            order: cat.sections.length + 1,
            items: []
          };
          return { ...cat, sections: [...cat.sections, newSection] };
        }
        return cat;
      })
    );
    showNotification('Section added successfully!', 'success');
  };

  const updateSectionName = (categoryId: number, sectionId: number, newName: string) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            sections: cat.sections.map(sec =>
              sec.id === sectionId ? { ...sec, name: newName } : sec
            )
          };
        }
        return cat;
      })
    );
  };

  const deleteSection = (categoryId: number, sectionId: number) => {
    if (window.confirm('Are you sure you want to delete this section? All items will be removed.')) {
      setRelatedLinksCategories(categories =>
        categories.map(cat => {
          if (cat.id === categoryId) {
            return {
              ...cat,
              sections: cat.sections.filter(sec => sec.id !== sectionId)
            };
          }
          return cat;
        })
      );
      setExpandedSections(sections => sections.filter(id => id !== sectionId));
      showNotification('Section deleted successfully!', 'success');
    }
  };

  const moveSectionUp = (categoryId: number, sectionId: number) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          const index = cat.sections.findIndex(sec => sec.id === sectionId);
          if (index > 0) {
            const newSections = [...cat.sections];
            [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
            return { ...cat, sections: newSections };
          }
        }
        return cat;
      })
    );
  };

  const moveSectionDown = (categoryId: number, sectionId: number) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          const index = cat.sections.findIndex(sec => sec.id === sectionId);
          if (index < cat.sections.length - 1) {
            const newSections = [...cat.sections];
            [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
            return { ...cat, sections: newSections };
          }
        }
        return cat;
      })
    );
  };

  const toggleSection = (sectionId: number) => {
    setExpandedSections(sections =>
      sections.includes(sectionId)
        ? sections.filter(id => id !== sectionId)
        : [...sections, sectionId]
    );
  };

  // Item Management Functions
  const addItem = (categoryId: number, sectionId: number) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            sections: cat.sections.map(sec => {
              if (sec.id === sectionId) {
                const newItemId = Math.max(...sec.items.map(i => i.id), 0) + 1;
                const newItem = {
                  id: newItemId,
                  name: 'New Document',
                  publishDate: '',
                  pdfUrl: '',
                  imageUrl: '',
                  isStatic: false,
                  order: sec.items.length + 1
                };
                return { ...sec, items: [...sec.items, newItem] };
              }
              return sec;
            })
          };
        }
        return cat;
      })
    );
    showNotification('Item added successfully!', 'success');
  };

  const updateItem = (categoryId: number, sectionId: number, itemId: number, updates: Partial<{
    name: string;
    publishDate: string;
    pdfUrl: string;
    imageUrl: string;
    isStatic: boolean;
  }>) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            sections: cat.sections.map(sec => {
              if (sec.id === sectionId) {
                return {
                  ...sec,
                  items: sec.items.map(item =>
                    item.id === itemId ? { ...item, ...updates } : item
                  )
                };
              }
              return sec;
            })
          };
        }
        return cat;
      })
    );
  };

  const deleteItem = (categoryId: number, sectionId: number, itemId: number) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      setRelatedLinksCategories(categories =>
        categories.map(cat => {
          if (cat.id === categoryId) {
            return {
              ...cat,
              sections: cat.sections.map(sec => {
                if (sec.id === sectionId) {
                  return {
                    ...sec,
                    items: sec.items.filter(item => item.id !== itemId)
                  };
                }
                return sec;
              })
            };
          }
          return cat;
        })
      );
      showNotification('Item deleted successfully!', 'success');
    }
  };

  const moveItemUp = (categoryId: number, sectionId: number, itemId: number) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            sections: cat.sections.map(sec => {
              if (sec.id === sectionId) {
                const index = sec.items.findIndex(item => item.id === itemId);
                if (index > 0) {
                  const newItems = [...sec.items];
                  [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
                  return { ...sec, items: newItems };
                }
              }
              return sec;
            })
          };
        }
        return cat;
      })
    );
  };

  const moveItemDown = (categoryId: number, sectionId: number, itemId: number) => {
    setRelatedLinksCategories(categories =>
      categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            sections: cat.sections.map(sec => {
              if (sec.id === sectionId) {
                const index = sec.items.findIndex(item => item.id === itemId);
                if (index < sec.items.length - 1) {
                  const newItems = [...sec.items];
                  [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
                  return { ...sec, items: newItems };
                }
              }
              return sec;
            })
          };
        }
        return cat;
      })
    );
  };

  // Render CMS Fields based on active page and tab
  const renderCMSFields = () => {
    // Investors Page - Hero Tab
    if (activePage === 'investors' && activeTab === 'hero') {
      return (
        <div className="space-y-6">
          {/* Hero Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Title
            </label>
            <input
              type="text"
              value={investorsHeroTitle}
              onChange={(e) => setInvestorsHeroTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="Enter hero title..."
            />
          </div>

          {/* Hero Image Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hero Image
            </label>
            
            {/* Image URL Input */}
            <div className="mb-3">
              <input
                type="text"
                value={investorsHeroImage}
                onChange={(e) => handleImageUrlChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="Enter image URL..."
              />
            </div>

            {/* Upload Button */}
            <div className="mb-4">
              <label className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer border border-gray-300">
                <i className="ri-upload-cloud-line text-lg"></i>
                <span className="text-sm font-medium">Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Image Preview */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-xs font-medium text-gray-600 mb-3">Preview</p>
              {(imagePreview || investorsHeroImage) ? (
                <div className="relative w-full h-[300px] overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={imagePreview || investorsHeroImage}
                    alt="Hero preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-[600px] flex items-center justify-center bg-gray-200 rounded-lg">
                  <div className="text-center">
                    <i className="ri-image-line text-4xl text-gray-400 mb-2"></i>
                    <p className="text-sm text-gray-500">No image selected</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Investors Page - Related Links Tab
    if (activePage === 'investors' && activeTab === 'links') {
      const selectedCategoryData = relatedLinksCategories.find(cat => cat.id === selectedCategory);

      return (
        <div className="flex gap-6">
          {/* Left Sidebar - Categories */}
          <div className="w-96 bg-white rounded-lg border border-gray-200 flex flex-col">
            {/* Categories Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#7dc244] to-[#6fb038] text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-folder-line text-lg"></i>
                </div>
                <h3 className="font-semibold text-sm">Categories</h3>
              </div>
              <button
                onClick={addCategory}
                className="w-8 h-8 flex items-center justify-center bg-white text-[#7dc244] rounded hover:bg-green-50 transition-colors cursor-pointer"
              >
                <i className="ri-add-line text-lg"></i>
              </button>
            </div>

            {/* Categories List */}
            <div className="p-2">
              {relatedLinksCategories.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-full mb-3">
                    <i className="ri-folder-line text-2xl text-[#7dc244]"></i>
                  </div>
                  <p className="text-sm text-gray-500 text-center">No categories yet. Click + to add one.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {relatedLinksCategories.map((category, index) => (
                    <div
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-green-50 border-2 border-[#7dc244]'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 flex items-center justify-center rounded ${
                        selectedCategory === category.id ? 'bg-[#7dc244] text-white' : 'bg-green-100 text-[#7dc244]'
                      }`}>
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          selectedCategory === category.id ? 'text-[#7dc244]' : 'text-gray-900'
                        }`}>
                          {category.name}
                        </p>
                        <p className="text-xs text-gray-500">{category.sections.length} sections</p>
                      </div>
                      <i className="ri-arrow-right-s-line text-gray-400"></i>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Sections */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200">
            {selectedCategoryData ? (
              <>
                {/* Category Header */}
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-[#7dc244] to-[#6fb038] text-white rounded-t-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <label className="block text-xs font-medium mb-1 opacity-90">CATEGORY NAME</label>
                      <input
                        type="text"
                        value={selectedCategoryData.name}
                        onChange={(e) => updateCategoryName(selectedCategoryData.id, e.target.value)}
                        className="w-full px-4 py-2 bg-white text-gray-900 border-0 rounded-lg text-sm font-medium focus:ring-2 focus:ring-green-300 outline-none"
                        placeholder="Enter category name..."
                      />
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                      <button
                        onClick={() => moveCategoryUp(selectedCategoryData.id)}
                        disabled={relatedLinksCategories[0].id === selectedCategoryData.id}
                        className="w-8 h-8 flex items-center justify-center bg-white text-[#7dc244] rounded hover:bg-green-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <i className="ri-arrow-up-s-line text-lg"></i>
                      </button>
                      <button
                        onClick={() => moveCategoryDown(selectedCategoryData.id)}
                        disabled={relatedLinksCategories[relatedLinksCategories.length - 1].id === selectedCategoryData.id}
                        className="w-8 h-8 flex items-center justify-center bg-white text-[#7dc244] rounded hover:bg-green-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <i className="ri-arrow-down-s-line text-lg"></i>
                      </button>
                      <button
                        onClick={() => deleteCategory(selectedCategoryData.id)}
                        className="w-8 h-8 flex items-center justify-center bg-white text-red-600 rounded hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sections Header */}
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-[#2879b6] to-[#206ba3]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center bg-white text-[#2879b6] rounded">
                          <i className="ri-file-list-line text-sm"></i>
                        </div>
                        Sections
                      </h4>
                      <p className="text-xs text-white/90 mt-1 ml-8">Organize documents by time periods or sub-categories</p>
                    </div>
                    <button
                      onClick={() => addSection(selectedCategoryData.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-[#2879b6] rounded-lg hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-add-line"></i>
                      <span className="text-sm font-medium">Add Section</span>
                    </button>
                  </div>
                </div>

                {/* Sections List */}
                <div className="p-4">
                  {selectedCategoryData.sections.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-3">
                        <i className="ri-file-list-line text-2xl text-[#2879b6]"></i>
                      </div>
                      <p className="text-sm text-gray-500">No sections yet. Click "Add Section" to create one.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedCategoryData.sections.map((section, sectionIndex) => (
                        <div key={section.id} className="border-2 border-[#2879b6] rounded-lg overflow-hidden shadow-sm">
                          {/* Section Header */}
                          <div className="bg-gradient-to-r from-[#2879b6] to-[#206ba3] border-b border-[#206ba3]">
                            <div className="flex items-center gap-3 p-4">
                              <button
                                onClick={() => toggleSection(section.id)}
                                className="w-6 h-6 flex items-center justify-center text-white hover:bg-[#206ba3] rounded transition-colors cursor-pointer"
                              >
                                <i className={`ri-arrow-${expandedSections.includes(section.id) ? 'down' : 'right'}-s-line text-lg`}></i>
                              </button>
                              
                              <div className="w-8 h-8 flex items-center justify-center bg-white text-[#2879b6] rounded font-bold shadow-sm">
                                <span className="text-sm">{sectionIndex + 1}</span>
                              </div>

                              <input
                                type="text"
                                value={section.name}
                                onChange={(e) => updateSectionName(selectedCategoryData.id, section.id, e.target.value)}
                                className="flex-1 px-3 py-2 bg-white border border-blue-300 rounded text-sm font-medium focus:ring-2 focus:ring-[#2879b6] focus:border-transparent outline-none"
                                placeholder="Section name..."
                              />

                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => moveSectionUp(selectedCategoryData.id, section.id)}
                                  disabled={sectionIndex === 0}
                                  className="w-8 h-8 flex items-center justify-center text-white hover:bg-[#206ba3] rounded transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                  <i className="ri-arrow-up-s-line"></i>
                                </button>
                                <button
                                  onClick={() => moveSectionDown(selectedCategoryData.id, section.id)}
                                  disabled={sectionIndex === selectedCategoryData.sections.length - 1}
                                  className="w-8 h-8 flex items-center justify-center text-white hover:bg-[#206ba3] rounded transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                  <i className="ri-arrow-down-s-line"></i>
                                </button>
                                <button
                                  onClick={() => deleteSection(selectedCategoryData.id, section.id)}
                                  className="w-8 h-8 flex items-center justify-center bg-white text-red-600 rounded hover:bg-red-50 transition-colors cursor-pointer"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Section Content */}
                          {expandedSections.includes(section.id) && (
                            <div className="p-4 bg-white">
                              <div className="mb-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h5 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                                    <div className="w-6 h-6 flex items-center justify-center bg-[#ee6a31] text-white rounded">
                                      <i className="ri-file-pdf-line text-xs"></i>
                                    </div>
                                    Items
                                  </h5>
                                  <button
                                    onClick={() => addItem(selectedCategoryData.id, section.id)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-[#ee6a31] text-white rounded hover:bg-[#d95f2c] transition-colors cursor-pointer whitespace-nowrap text-sm"
                                  >
                                    <i className="ri-add-line"></i>
                                    <span>Add Item</span>
                                  </button>
                                </div>

                                {section.items.length === 0 ? (
                                  <div className="flex flex-col items-center justify-center py-8 bg-orange-50 rounded-lg border-2 border-dashed border-[#ee6a31]/30">
                                    <i className="ri-file-pdf-line text-3xl text-[#ee6a31] mb-2"></i>
                                    <p className="text-sm text-gray-500">No items yet. Click "Add Item" to add one.</p>
                                  </div>
                                ) : (
                                  <div className="space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                      <div key={item.id} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-[#ee6a31]/30 shadow-sm">
                                        <div className="flex items-start gap-3 mb-3">
                                          <div className="w-8 h-8 flex items-center justify-center bg-[#ee6a31] text-white rounded flex-shrink-0 font-bold shadow-sm">
                                            <span className="text-xs">{itemIndex + 1}</span>
                                          </div>
                                          
                                          {/* Fields and Image Side by Side */}
                                          <div className="flex-1 flex gap-4">
                                            {/* Left Side - Form Fields */}
                                            <div className="flex-1 space-y-3">
                                              {/* Static Content Checkbox */}
                                              <label className="flex items-center gap-2 cursor-pointer bg-white rounded-lg px-3 py-2 border border-[#ee6a31]/30">
                                                <input
                                                  type="checkbox"
                                                  checked={item.isStatic}
                                                  onChange={(e) => updateItem(selectedCategoryData.id, section.id, item.id, { isStatic: e.target.checked })}
                                                  className="w-4 h-4 text-[#ee6a31] rounded cursor-pointer"
                                                />
                                                <span className="text-sm text-gray-700 font-medium">Static Content (instead of PDF)</span>
                                              </label>

                                              {/* Item Name */}
                                              <input
                                                type="text"
                                                value={item.name}
                                                onChange={(e) => updateItem(selectedCategoryData.id, section.id, item.id, { name: e.target.value })}
                                                className="w-full px-3 py-2 bg-white border-2 border-[#ee6a31]/30 rounded text-sm focus:ring-2 focus:ring-[#ee6a31] focus:border-[#ee6a31] outline-none"
                                                placeholder="Item name..."
                                              />

                                              {/* Publish Date */}
                                              <div>
                                                <div className="flex items-center justify-between mb-1">
                                                  <label className="block text-xs font-medium text-gray-700">
                                                    Published Date <span className="text-gray-400 font-normal">(optional)</span>
                                                  </label>
                                                  {item.publishDate && (
                                                    <button
                                                      onClick={() => updateItem(selectedCategoryData.id, section.id, item.id, { publishDate: '' })}
                                                      className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                                                    >
                                                      <i className="ri-close-line text-sm"></i>
                                                      <span className="text-xs">Clear</span>
                                                    </button>
                                                  )}
                                                </div>
                                                <input
                                                  type="date"
                                                  value={item.publishDate || ''}
                                                  onChange={(e) => updateItem(selectedCategoryData.id, section.id, item.id, { publishDate: e.target.value })}
                                                  className="w-full px-3 py-2 bg-white border-2 border-[#ee6a31]/30 rounded text-sm focus:ring-2 focus:ring-[#ee6a31] focus:border-[#ee6a31] outline-none cursor-pointer"
                                                />
                                              </div>

                                              {/* Preview Image Label and Actions */}
                                              <div>
                                                <div className="flex items-center justify-between mb-2">
                                                  <label className="block text-xs font-medium text-gray-700">
                                                    Preview Image <span className="text-gray-400 font-normal">(optional)</span>
                                                  </label>
                                                  {item.imageUrl && (
                                                    <button
                                                      onClick={() => updateItem(selectedCategoryData.id, section.id, item.id, { imageUrl: '' })}
                                                      className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                                                    >
                                                      <i className="ri-close-line text-sm"></i>
                                                      <span className="text-xs">Remove</span>
                                                    </button>
                                                  )}
                                                </div>

                                                {!item.imageUrl && (
                                                  <div className="w-full">
                                                    <input
                                                      type="text"
                                                      value={item.imageUrl || ''}
                                                      onChange={(e) => updateItem(selectedCategoryData.id, section.id, item.id, { imageUrl: e.target.value })}
                                                      className="w-full px-3 py-2 bg-white border-2 border-[#ee6a31]/30 rounded text-sm focus:ring-2 focus:ring-[#ee6a31] focus:border-[#ee6a31] outline-none mb-2"
                                                      placeholder="Image URL..."
                                                    />
                                                    <label className="flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-[#ee6a31]/30 text-[#ee6a31] rounded hover:bg-orange-50 transition-colors cursor-pointer whitespace-nowrap">
                                                      <i className="ri-image-add-line"></i>
                                                      <span className="text-sm font-medium">Upload Image</span>
                                                      <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleItemImageUpload(selectedCategoryData.id, section.id, item.id, e)}
                                                        className="hidden"
                                                      />
                                                    </label>
                                                  </div>
                                                )}
                                              </div>

                                              {/* PDF URL */}
                                              <input
                                                type="text"
                                                value={item.pdfUrl}
                                                onChange={(e) => updateItem(selectedCategoryData.id, section.id, item.id, { pdfUrl: e.target.value })}
                                                className="w-full px-3 py-2 bg-white border-2 border-[#ee6a31]/30 rounded text-sm focus:ring-2 focus:ring-[#ee6a31] focus:border-[#ee6a31] outline-none"
                                                placeholder="PDF URL or path..."
                                              />

                                              {/* Upload Button */}
                                              <label className="flex items-center justify-center gap-2 px-4 py-2 bg-[#ee6a31] text-white rounded hover:bg-[#d95f2c] transition-colors cursor-pointer whitespace-nowrap shadow-sm">
                                                <i className="ri-upload-cloud-line"></i>
                                                <span className="text-sm font-medium">Upload PDF</span>
                                                <input
                                                  type="file"
                                                  accept=".pdf"
                                                  onChange={(e) => handlePDFUpload(selectedCategoryData.id, section.id, item.id, e)}
                                                  className="hidden"
                                                />
                                              </label>
                                            </div>

                                            {/* Right Side - Image Preview */}
                                            {item.imageUrl && (
                                              <div className="w-48 flex-shrink-0">
                                                <div className="relative w-full h-full rounded border-2 border-[#ee6a31]/30 overflow-hidden bg-white">
                                                  <img
                                                    src={item.imageUrl}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                              </div>
                                            )}
                                          </div>

                                          {/* Item Actions */}
                                          <div className="flex flex-col gap-1">
                                            <button
                                              onClick={() => moveItemUp(selectedCategoryData.id, section.id, item.id)}
                                              disabled={itemIndex === 0}
                                              className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:bg-orange-100 hover:text-[#ee6a31] rounded transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed border border-[#ee6a31]/30"
                                            >
                                              <i className="ri-arrow-up-s-line text-sm"></i>
                                            </button>
                                            <button
                                              onClick={() => moveItemDown(selectedCategoryData.id, section.id, item.id)}
                                              disabled={itemIndex === section.items.length - 1}
                                              className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:bg-orange-100 hover:text-[#ee6a31] rounded transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed border border-[#ee6a31]/30"
                                            >
                                              <i className="ri-arrow-down-s-line text-sm"></i>
                                            </button>
                                            <button
                                              onClick={() => deleteItem(selectedCategoryData.id, section.id, item.id)}
                                              className="w-7 h-7 flex items-center justify-center bg-white text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer border border-red-200"
                                            >
                                              <i className="ri-delete-bin-line text-sm"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mx-auto mb-4">
                    <i className="ri-folder-open-line text-3xl text-[#7dc244]"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Category Selected</h3>
                  <p className="text-sm text-gray-500">Select a category from the left to manage its sections and documents.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Default message for sections without CMS fields yet
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
          <i className="ri-file-list-3-line text-2xl text-gray-400"></i>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Content Fields Available</h3>
        <p className="text-sm text-gray-500 text-center max-w-md">
          Content management fields for this section will be added soon.
        </p>
      </div>
    );
  };

  const renderContent = () => {
    if (activePage === 'overview') {
      return <OverviewSection />;
    }

    if (activePage === 'media') {
      return (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Library</h2>
          <p className="text-gray-600">Media library management coming soon...</p>
        </div>
      );
    }

    if (activePage === 'users') {
      return <UsersSection showNotification={showNotification} />;
    }

    // For pages with tabs
    return (
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tabs */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-2 overflow-x-auto">
            {currentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 capitalize">
              {activePage.replace('-', ' ')} - {currentTabs.find(t => t.id === activeTab)?.label}
            </h2>
            
            {/* Action Buttons - Only show when CMS fields are available */}
            {((activePage === 'investors' && activeTab === 'hero') || (activePage === 'investors' && activeTab === 'links')) && (
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePreview}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-eye-line"></i>
                  <span className="text-sm font-medium">Preview</span>
                </button>
                
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-refresh-line"></i>
                  <span className="text-sm font-medium">Reset</span>
                </button>
                
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-save-line"></i>
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            )}
          </div>
          
          {/* CMS Fields - Dynamic based on page and tab */}
          {renderCMSFields()}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activePage={activePage}
        onPageChange={handlePageChange}
      />
      
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <DashboardHeader onMenuClick={toggleSidebar} />
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Snackbar Notification */}
      <div
        className={`fixed top-6 right-6 z-50 transform transition-all duration-300 ease-in-out ${
          showSnackbar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div
          className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg min-w-[320px] ${
            snackbarType === 'success'
              ? 'bg-green-600 text-white'
              : snackbarType === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-blue-600 text-white'
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {snackbarType === 'success' && (
              <i className="ri-checkbox-circle-line text-2xl"></i>
            )}
            {snackbarType === 'error' && (
              <i className="ri-error-warning-line text-2xl"></i>
            )}
            {snackbarType === 'info' && (
              <i className="ri-information-line text-2xl"></i>
            )}
          </div>
          <p className="font-medium text-sm flex-1">{snackbarMessage}</p>
          <button
            onClick={() => setShowSnackbar(false)}
            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <i className="ri-eye-line text-xl text-green-600"></i>
                <h3 className="text-lg font-bold text-gray-900">Live Preview</h3>
                <span className="text-sm text-gray-500">
                  {activePage.replace('-', ' ')} - {currentTabs.find(t => t.id === activeTab)?.label}
                </span>
              </div>
              
              <button
                onClick={() => setShowPreview(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-700"></i>
              </button>
            </div>
            
            {/* Iframe Content */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={getPreviewUrl()}
                className="w-full h-full border-0"
                title="Live Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}