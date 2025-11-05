// /src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { Chat, Main, Report, ReportDetail } from './pages';

export const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/report', element: <Report /> },
  { path: '/report/:id', element: <ReportDetail /> },
  { path: '/chat', element: <Chat /> },
]);
