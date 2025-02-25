import Sidebar from "@/components/fragments/Sidebar";
import { IconDashboard, IconProducts } from "@/components/ui/Icons/IconSidebar";

type Proptypes = {
  children: React.ReactNode;
};
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
const AdminLayout = (props: Proptypes) => {
  const { children } = props;
  return (
    <div>
      <Sidebar lists={listSidebarItem} />
      {children}
    </div>
  );
};

export default AdminLayout;
