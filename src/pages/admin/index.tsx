import Sidebar from "@/components/fragments/Sidebar";
import { IconDashboard, IconProducts } from "@/components/ui/Icons/IconSidebar";

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
    // <AdminLayout>
    //   <div>
    //     <h1>Admin Page</h1>
    //   </div>
    // </AdminLayout>
    <Sidebar lists={listSidebarItem}></Sidebar>
  );
};

export default AdminPage;
