import Navbar from "@/components/fragments/Navbar";
import Sidebar from "@/components/fragments/Sidebar";
import {
  IconDashboard,
  IconProducts,
  IconUser,
  IconUsers,
} from "@/components/ui/Icons/IconSidebar";
import { useState } from "react";

type Proptypes = {
  children: React.ReactNode;
};
const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/member",
    icon: <IconDashboard />,
  },
  {
    title: "Orders",
    url: "/member/orders",
    icon: <IconProducts />,
  },
  {
    title: "Profile",
    url: "/member/profile",
    icon: <IconUser />,
  },
];
const MemberLayout = (props: Proptypes) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="sm:flex">
        <Sidebar lists={listSidebarItem} isOpen={isOpen} />
        <div className="flex-1 py-10 sm:px-6">{children}</div>
      </div>
    </>
  );
};

export default MemberLayout;
