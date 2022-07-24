import React from "react";
import SideNav from "./SideNav";
import styles from "../styles/DashboardLayout.module.css"

const DashboardLayout = ({ children }) => (  
  <div className={styles.dashboard__container}>
    <SideNav/>
    {children}
 </div>
);

export default DashboardLayout;
