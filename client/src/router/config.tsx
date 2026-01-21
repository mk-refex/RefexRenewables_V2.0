import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const SolarEnergyPage = lazy(() => import('../pages/solar-energy/page'));
const CompressedBioGasPage = lazy(() => import('../pages/compressed-bio-gas/page'));
const EnergyStorageSolutionsPage = lazy(() => import('../pages/energy-storage-solutions/page'));
const BioDhanicPage = lazy(() => import('../pages/biodhanic/page'));
const SpectrumRenewablePage = lazy(() => import('../pages/spectrum-renewable/page'));
const VyzagBioEnergyPage = lazy(() => import('../pages/vyzag-bio-energy/page'));
const InvestorsPage = lazy(() => import('../pages/investors/page'));
const ESGPage = lazy(() => import('../pages/esg/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const AdminLoginPage = lazy(() => import('../pages/admin-login/page'));
const DashboardPage = lazy(() => import('../pages/dashboard/page'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
import LegalDisclaimerPage from '../pages/legal-disclaimer/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about-us',
    element: <AboutPage />,
  },
  {
    path: '/solar-energy',
    element: <SolarEnergyPage />,
  },
  {
    path: '/compressed-bio-gas',
    element: <CompressedBioGasPage />,
  },
  {
    path: '/energy-storage-solutions',
    element: <EnergyStorageSolutionsPage />,
  },
  {
    path: '/biodhanic',
    element: <BioDhanicPage />,
  },
  {
    path: '/spectrum-renewable',
    element: <SpectrumRenewablePage />,
  },
  {
    path: '/vyzag-bio-energy',
    element: <VyzagBioEnergyPage />,
  },
  {
    path: '/terms-conditions',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/investors',
    element: <InvestorsPage />,
  },
  {
    path: '/esg',
    element: <ESGPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/admin-login',
    element: <AdminLoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/legal-disclaimer',
    element: <LegalDisclaimerPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
