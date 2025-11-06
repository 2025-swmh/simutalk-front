import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { Chat, Main, Report, ReportDetail, Start } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/start" replace />,
  },
  {
    path: '/start',
    element: <Start />,
  },
  {
    element: <Layout />,
    children: [
      { path: '/main', element: <Main /> },
      { path: '/report', element: <Report /> },
      { path: '/report/:id', element: <ReportDetail /> },
      { path: '/chat', element: <Chat /> },
    ],
  },
]);
