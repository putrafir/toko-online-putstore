import { useState } from "react";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

type PropTypes = {
  lists: Array<{
    title: string;
    url: string;
    icon: React.ReactNode;
  }>;
  isOpen: boolean;
};

const Sidebar = (props: PropTypes) => {
  const { lists, isOpen } = props;
  const { pathname } = useRouter();

  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed  left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static sm:w-64 bg-gray-50`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto">
          <div>
            <ul className="space-y-2 font-medium">
              {lists.map((list) => (
                <li key={list.title}>
                  <Link href={list.url}>
                    <div
                      className={`flex items-center p-2 text-gray-900 rounded-lg ${
                        pathname === list.url && "bg-gray-100"
                      } hover:bg-gray-100 group`}
                    >
                      {list.icon}
                      <span className="ml-3">{list.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <Button type="button" className="w-full" onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
