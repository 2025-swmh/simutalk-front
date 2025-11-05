// /src/router.tsx
import { createBrowserRouter } from 'react-router-dom';

import Chat from './pages/Chat';
import Home from './pages/Home';
import Report from './pages/Report';
import ReportDetail from './pages/ReportDetail';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/report', element: <Report /> },
  { path: '/report/:id', element: <ReportDetail /> },
  { path: '/chat', element: <Chat /> },
]);
