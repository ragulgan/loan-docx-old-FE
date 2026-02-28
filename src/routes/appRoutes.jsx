import { Routes, Route } from "react-router";
import DashboardPage from '../components/pages/dashborad/dashboardPage';
import DashboardLayout from "../layouts/dashboardlayout";
import LoanApplication from "../components/pages/loanApplication/applictionPage";
import ApplicationViewPage from "../components/pages/loanApplication/applicationViewPage";
import PageNotFound from "../components/common/pagenotfound"
import LoginPage from "../components/pages/auth/login";
import ForgotPasswordPage from "../components/pages/auth/forgotPassword";
import PayableList from "../components/pages/payable/payableList";
import Agents from "../components/pages/user/userpage"
import AgentspageViewPage from "../components/pages/user/userViewPage";
import PayableView from "../components/pages/payable/payableView";
import AddAgent from "../components/pages/user/adduser";
import Jobrecived from "../components/pages/jobRecieved/jobrecived";
import Earnings from "../components/pages/earnings/earnings";

const AppRoutes = () => (
    <Routes>
        <Route path="/login/admin" element={<LoginPage />} />
        <Route path="/login/legal-head" element={<LoginPage />} />
        <Route path="/login/legal-member" element={<LoginPage />} />
        <Route path="/login/civil-team" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/loanapp" element={<LoanApplication />} />
            <Route path="/loanapp/:id" element={<ApplicationViewPage />} />
            <Route path="/payable" element={<PayableList />} />
            <Route path="/payable/:id" element={<PayableView />} />
            <Route path="/user" element={<Agents />} />
            <Route path="/user/:id" element={<AgentspageViewPage />} />
            <Route path="/useradd" element={<AddAgent />} />
            <Route path="/job-received" element={<Jobrecived />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
);

export default AppRoutes;