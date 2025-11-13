import React from "react";
import { Outlet } from "react-router-dom";
import HeaderApp from "../components/layout/HeaderApp";
import SidebarApp from "../components/layout/SidebarApp";

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-layout min-h-screen bg-gray-50">
      <HeaderApp />
      <div className="flex">
        <SidebarApp />
        <main className="flex-1 p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
