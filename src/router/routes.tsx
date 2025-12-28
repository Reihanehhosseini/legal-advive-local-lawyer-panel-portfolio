import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const MainLayout = lazy(() => import('../layouts/MainLayout'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const AnswersPage = lazy(() => import('../pages/faq/AnswersPage'));
const QuestionPage = lazy(() => import('../pages/faq/QuestionPage'));
const RequestConsultationPage = lazy(
  () => import('../pages/faq/RequestConsultationPage')
);

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      {
        path: 'faq',
        element: <FAQPage />,
        children: [
          { path: 'questions', element: <QuestionPage /> },
          { path: 'answers', element: <AnswersPage /> },
          {
            path: 'request-consultation',
            element: <RequestConsultationPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
