import Sidebar from "@/components/fragments/Sidebar";
import { IconDashboard, IconProducts } from "@/components/ui/Icons/IconSidebar";
import DashboardAdminView from "@/components/views/admin/Dashboard";

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: <IconDashboard />,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: <IconProducts />,
  },
];
const AdminPage = () => {
  return (
    <>
      <DashboardAdminView></DashboardAdminView>
    </>
  );
};

export default AdminPage;
