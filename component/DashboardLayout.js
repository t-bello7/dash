import React from "react";
import SideNav from "./SideNav";

const DashboardLayout = ({ children }) => (  
  <div>
    <SideNav/>
    {children}
 </div>
);

export default DashboardLayout;
