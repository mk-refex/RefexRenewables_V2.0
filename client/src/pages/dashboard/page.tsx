import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import OverviewSection from './components/OverviewSection';
import UsersSection from './components/UsersSection';
import SeniorManagementCMS from './components/SeniorManagementCMS';
import BoardDirectorsCMS from './components/BoardDirectorsCMS';
import KeyManagerialCMS from './components/KeyManagerialCMS';
import RelatedLinksCMS from './components/RelatedLinksCMS';
import { investorApi, resolveImageUrl, smtpApi } from '@/services/api';

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

  const [smtpForm, setSmtpForm] = useState({
    host: '',
    port: 587,
    secure: false,
    username: '',
    password: '',
    fromEmail: '',
    fromName: '',
    replyToEmail: '',
    isEnabled: true,
  });
  const [smtpHasPassword, setSmtpHasPassword] = useState(false);
  const [smtpLoading, setSmtpLoading] = useState(false);
  const [smtpTestEmail, setSmtpTestEmail] = useState('');
  const [smtpTestSending, setSmtpTestSending] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Load Investor Hero from API when on investors/hero tab
  useEffect(() => {
    if (activePage !== 'investors' || activeTab !== 'hero') return;
    investorApi.getHero().then((hero) => {
      const title = Array.isArray(hero.titleItems) && hero.titleItems.length
        ? hero.titleItems.map((t) => t.text).join(' ')
        : 'Investor Relations';
      setInvestorsHeroTitle(title);
      setInvestorsHeroImage(hero.imageUrl ?? '');
      setImagePreview(hero.imageUrl ?? '');
    }).catch(() => {});
  }, [activePage, activeTab]);

  // Load SMTP settings for admin settings page
  useEffect(() => {
    if (activePage !== 'settings' || activeTab !== 'smtp') return;
    setSmtpLoading(true);
    smtpApi
      .get()
      .then((cfg) => {
        setSmtpForm({
          host: cfg.host || '',
          port: cfg.port || 587,
          secure: !!cfg.secure,
          username: cfg.username || '',
          password: '',
          fromEmail: cfg.fromEmail || '',
          fromName: cfg.fromName || '',
          replyToEmail: cfg.replyToEmail || '',
          isEnabled: cfg.isEnabled ?? true,
        });
        setSmtpHasPassword(!!cfg.hasPassword);
      })
      .catch((error: any) => {
        showNotification(error?.message || 'Failed to load SMTP settings', 'error');
      })
      .finally(() => setSmtpLoading(false));
  }, [activePage, activeTab]);

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
      settings: 'smtp',
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
      { id: 'board', label: 'Board of Directors' },
      { id: 'key-managerial', label: 'Key Managerial Personnel' },
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
    settings: [
      { id: 'smtp', label: 'SMTP' },
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

      if (activePage === 'settings' && activeTab === 'smtp') {
        setSmtpLoading(true);
        smtpApi
          .get()
          .then((cfg) => {
            setSmtpForm({
              host: cfg.host || '',
              port: cfg.port || 587,
              secure: !!cfg.secure,
              username: cfg.username || '',
              password: '',
              fromEmail: cfg.fromEmail || '',
              fromName: cfg.fromName || '',
              replyToEmail: cfg.replyToEmail || '',
              isEnabled: cfg.isEnabled ?? true,
            });
            setSmtpHasPassword(!!cfg.hasPassword);
            showNotification('SMTP settings reloaded successfully!', 'info');
          })
          .catch((error: any) => {
            showNotification(error?.message || 'Failed to reload SMTP settings', 'error');
          })
          .finally(() => setSmtpLoading(false));
      }

      showNotification('Changes have been reset successfully!', 'info');
    }
  };

  const handleSave = async () => {
    if (activePage === 'investors' && activeTab === 'hero') {
      try {
        await investorApi.saveHero({
          titleItems: [{ text: investorsHeroTitle, size: 'normal', order: 0 }],
          imageUrl: investorsHeroImage || null,
        });
        showNotification('Investor hero saved successfully!', 'success');
      } catch {
        showNotification('Failed to save investor hero', 'error');
      }
      return;
    }
    if (activePage === 'settings' && activeTab === 'smtp') {
      try {
        await smtpApi.save({
          host: smtpForm.host,
          port: Number(smtpForm.port),
          secure: smtpForm.secure,
          username: smtpForm.username,
          password: smtpForm.password || undefined,
          fromEmail: smtpForm.fromEmail,
          fromName: smtpForm.fromName,
          replyToEmail: smtpForm.replyToEmail,
          isEnabled: smtpForm.isEnabled,
        });
        setSmtpForm((prev) => ({ ...prev, password: '' }));
        setSmtpHasPassword(true);
        showNotification('SMTP settings saved successfully!', 'success');
      } catch (error: any) {
        showNotification(error?.message || 'Failed to save SMTP settings', 'error');
      }
      return;
    }
    showNotification('Changes saved successfully!', 'success');
  };

  const handleSmtpTest = async () => {
    if (!smtpTestEmail) {
      showNotification('Please enter a test email address', 'error');
      return;
    }
    setSmtpTestSending(true);
    try {
      await smtpApi.sendTest(smtpTestEmail);
      showNotification('Test email sent successfully!', 'success');
    } catch (error: any) {
      showNotification(error?.message || 'Failed to send test email', 'error');
    } finally {
      setSmtpTestSending(false);
    }
  };

  const handleImageUrlChange = (url: string) => {
    if (activePage === 'investors' && activeTab === 'hero') {
      setInvestorsHeroImage(url);
      setImagePreview(url);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || (activePage !== 'investors' || activeTab !== 'hero')) return;
    try {
      const imageUrl = await investorApi.uploadHeroImage(file);
      setInvestorsHeroImage(imageUrl);
      setImagePreview(imageUrl);
      showNotification('Image uploaded. Save hero to apply.', 'success');
    } catch {
      showNotification('Image upload failed.', 'error');
    }
    e.target.value = '';
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
                    src={resolveImageUrl(imagePreview || investorsHeroImage)}
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
      return <RelatedLinksCMS showNotification={showNotification} />;
    }

    if (activePage === 'settings' && activeTab === 'smtp') {
      return (
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">SMTP Configuration</h3>
            <p className="text-xs text-gray-600">
              Configure mail server details used for contact-form email sending and test delivery.
            </p>
          </div>

          {smtpLoading ? (
            <div className="py-10 text-sm text-gray-500">Loading SMTP settings...</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                value={smtpForm.host}
                onChange={(e) => setSmtpForm((prev) => ({ ...prev, host: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="SMTP Host (e.g. smtp.gmail.com)"
              />
              <input
                type="number"
                value={smtpForm.port}
                onChange={(e) =>
                  setSmtpForm((prev) => ({ ...prev, port: Number(e.target.value || 0) }))
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="Port"
              />
              <label className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm">
                <input
                  type="checkbox"
                  checked={smtpForm.secure}
                  onChange={(e) => setSmtpForm((prev) => ({ ...prev, secure: e.target.checked }))}
                />
                <span>Use SSL/TLS (secure)</span>
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm">
                <input
                  type="checkbox"
                  checked={smtpForm.isEnabled}
                  onChange={(e) =>
                    setSmtpForm((prev) => ({ ...prev, isEnabled: e.target.checked }))
                  }
                />
                <span>Enable SMTP</span>
              </label>
              <input
                type="text"
                value={smtpForm.username}
                onChange={(e) => setSmtpForm((prev) => ({ ...prev, username: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="SMTP Username"
              />
              <input
                type="password"
                value={smtpForm.password}
                onChange={(e) => setSmtpForm((prev) => ({ ...prev, password: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder={
                  smtpHasPassword ? 'Leave blank to keep existing password' : 'SMTP Password'
                }
              />
              <input
                type="email"
                value={smtpForm.fromEmail}
                onChange={(e) => setSmtpForm((prev) => ({ ...prev, fromEmail: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="From Email"
              />
              <input
                type="text"
                value={smtpForm.fromName}
                onChange={(e) => setSmtpForm((prev) => ({ ...prev, fromName: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="From Name (optional)"
              />
              <input
                type="email"
                value={smtpForm.replyToEmail}
                onChange={(e) =>
                  setSmtpForm((prev) => ({ ...prev, replyToEmail: e.target.value }))
                }
                className="md:col-span-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="Reply-To Email (optional)"
              />
            </div>
          )}

          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Test SMTP</h4>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                value={smtpTestEmail}
                onChange={(e) => setSmtpTestEmail(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500"
                placeholder="Enter test email address"
              />
              <button
                type="button"
                onClick={handleSmtpTest}
                disabled={smtpTestSending}
                className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {smtpTestSending ? 'Sending...' : 'Test SMTP'}
              </button>
            </div>
          </div>
        </div>
      );
    }

    // About Us — Board of Directors CMS
    if (activePage === 'about' && activeTab === 'board') {
      return <BoardDirectorsCMS showNotification={showNotification} />;
    }

    // About Us — Key Managerial Personnel CMS
    if (activePage === 'about' && activeTab === 'key-managerial') {
      return <KeyManagerialCMS showNotification={showNotification} />;
    }

    // About Us — Senior Management CMS
    if (activePage === 'about' && activeTab === 'management') {
      return <SeniorManagementCMS showNotification={showNotification} />;
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
                    ? 'border-brand text-brand'
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
            {((activePage === 'investors' && activeTab === 'hero') ||
              (activePage === 'settings' && activeTab === 'smtp')) && (
              <div className="flex items-center gap-3">
                {!(activePage === 'settings' && activeTab === 'smtp') && (
                  <button
                    onClick={handlePreview}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-eye-line"></i>
                    <span className="text-sm font-medium">Preview</span>
                  </button>
                )}
                
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-refresh-line"></i>
                  <span className="text-sm font-medium">Reset</span>
                </button>
                
                <button
                  onClick={handleSave}
                  className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-hover"
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
              ? 'bg-brand text-white'
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