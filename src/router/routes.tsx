import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import EvaluationRequests from "../pages/legal-assessments/EvaluationRequests";

const SettlementRequest = lazy(
  () => import("../pages/finance/SettlementRequest"),
);
const Reviews = lazy(() => import("../pages/reviews/Reviews"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const AnswersPage = lazy(() => import("../pages/faq/AnswersPage"));
const QuestionPage = lazy(() => import("../pages/faq/QuestionPage"));
const RequestConsultationPage = lazy(
  () => import("../pages/faq/RequestConsultationPage"),
);
const WorkCalendarPage = lazy(() => import("../pages/WorkCalendarPage"));

const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const ServiceManagement = lazy(
  () => import("../pages/legal-assessments/ServiceManagement"),
);
const PersonalInformation = lazy(
  () => import("../pages/Profile/PersonalInformation"),
);
const IdentityInformation = lazy(
  () => import("../pages/Profile/IdentityInformation"),
);
const WorkPlaceLocation = lazy(
  () => import("../pages/Profile/WorkplaceLocation"),
);
const WorkSkills = lazy(() => import("../pages/Profile/WorkSkills"));
const EducationalBackground = lazy(
  () => import("../pages/Profile/EducationalBackground"),
);
const WorkHistory = lazy(() => import("../pages/Profile/WorkHistory"));
const EditWorkCalendarPage = lazy(
  () => import("../pages/work-calendar/EditWorkCalendarPage"),
);
const WalletPage = lazy(() => import("../pages/finance/WalletPage"));

const FinanceLayout = lazy(() => import("../pages/FinanceLayout"));

const OrdersPage = lazy(() => import("../pages/orders/OrdersPage"));

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      {
        path: "/work-calendar",
        element: <WorkCalendarPage />,
      },
      { path: "/work-calendar/edit", element: <EditWorkCalendarPage /> },
      {
        path: "/legal-assessments/service-management",
        element: <ServiceManagement />,
      },
      {
        path: "/legal-assessments/evaluation-requests",
        element: <EvaluationRequests />,
      },
      {
        element: <FinanceLayout />,
        children: [
          { path: "/financal/wallet", element: <WalletPage /> },
          {
            path: "/financal/SettlementRequest", element : <SettlementRequest/>
          },
        ],
      },
      {
        path: "faq",
        element: <FAQPage />,
        children: [
          { path: "questions", element: <QuestionPage /> },
          { path: "answers", element: <AnswersPage /> },
          {
            path: "request-consultation",
            element: <RequestConsultationPage />,
          },
        ],
      },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [
          { path: "personal-information", element: <PersonalInformation /> },
          { path: "personal-Identity", element: <IdentityInformation /> },
          { path: "WorkPlace-Location", element: <WorkPlaceLocation /> },
          { path: "Work-Skills", element: <WorkSkills /> },
          {
            path: "Educational-Background",
            element: <EducationalBackground />,
          },
          { path: "Work-History", element: <WorkHistory /> },
        ],
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
];

export default routes;
