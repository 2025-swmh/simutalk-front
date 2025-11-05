// /src/router.tsx
import { createBrowserRouter } from 'react-router-dom';

import { Chat, Home, Report, ReportDetail } from './pages';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/report', element: <Report /> },
  { path: '/report/:id', element: <ReportDetail /> },
  { path: '/chat', element: <Chat /> },
]);
