import Sidebar from "@/components/fragments/Sidebar";
import {
  IconDashboard,
  IconProducts,
  IconUsers,
} from "@/components/ui/Icons/IconSidebar";

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
  {
    title: "Users",
    url: "/admin/users",
    icon: <IconUsers />,
  },
];
const AdminLayout = (props: Proptypes) => {
  const { children } = props;
  return (
    <div className="flex">
      <Sidebar lists={listSidebarItem} />
      <div className="w-full py-10 px-16">{children}</div>
    </div>
  );
};

export default AdminLayout;
