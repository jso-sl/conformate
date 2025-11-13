import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import SignupPage from './pages/public/SignupPage';
import AboutPage from './pages/public/AboutPage';
import PrivacyPage from './pages/public/PrivacyPage';
import TermsPage from './pages/public/TermsPage';
import PublicHelpPage from './pages/public/PublicHelpPage';
import DashboardPage from './pages/app/DashboardPage';
import ImportDocumentsPage from './pages/app/ImportDocumentsPage';
import SelectChecklistPage from './pages/app/SelectChecklistPage';
import LaunchAnalysisPage from './pages/app/LaunchAnalysisPage';
import AnalysisResultsPage from './pages/app/AnalysisResultsPage';
import GenerateReportPage from './pages/app/GenerateReportPage';
import AnalysesHistoryPage from './pages/app/AnalysesHistoryPage';
import GlobalStatsPage from './pages/app/GlobalStatsPage';
import UserManagementPage from './pages/app/UserManagementPage';
import ChecklistManagementPage from './pages/app/ChecklistManagementPage';
import SettingsPage from './pages/app/SettingsPage';
import ProfilePage from './pages/app/ProfilePage';
import HelpCenterPage from './pages/app/HelpCenterPage';

const router = createBrowserRouter([
  {
    element: <PublicLayout><Outlet /></PublicLayout>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '/help', element: <PublicHelpPage /> },
    ],
  },
  {
    element: <AppLayout><Outlet /></AppLayout>,
    children: [
      { path: '/app/dashboard', element: <DashboardPage /> },
      { path: '/app/import', element: <ImportDocumentsPage /> },
      { path: '/app/select-checklist', element: <SelectChecklistPage /> },
      { path: '/app/launch-analysis', element: <LaunchAnalysisPage /> },
      { path: '/app/results', element: <AnalysisResultsPage /> },
      { path: '/app/report', element: <GenerateReportPage /> },
      { path: '/app/history', element: <AnalysesHistoryPage /> },
      { path: '/app/stats', element: <GlobalStatsPage /> },
      { path: '/app/users', element: <UserManagementPage /> },
      { path: '/app/checklists', element: <ChecklistManagementPage /> },
      { path: '/app/settings', element: <SettingsPage /> },
      { path: '/app/profile', element: <ProfilePage /> },
      { path: '/app/help', element: <HelpCenterPage /> },
    ],
  },
]);

export default router;
export { RouterProvider };