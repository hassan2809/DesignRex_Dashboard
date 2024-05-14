import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";
import Logo from "../images/logo.png";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-full bg-slate-400 text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-full text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {
                setActiveMenu(true);
              }}
              className=" flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              {/* <SiShopware /> */}
              <span>DesignRex</span>
            </Link>
            <button
              onClick={() => {
                setActiveMenu((prev) => !prev);
              }}
              className="text-xl rounded-full mt-4 mr-2 block"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            <p className="text-gray-400 dark:text-gray-400 m-3">DASHBOARD</p>
            <NavLink
              to="/Customers"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Users</span>
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => {}}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Products</span>
            </NavLink>

            <NavLink
              to="/Calander"
              onClick={() => {}}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Calendar</span>
            </NavLink>
            <NavLink
              to="/sales"
              onClick={() => {}}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Sales</span>
            </NavLink>
            <NavLink
              to="/reports"
              onClick={() => {}}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Reports</span>
            </NavLink>
            <NavLink
              to="/analytics"
              onClick={() => {}}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Analytics</span>
            </NavLink>
            <NavLink
              to="/settins"
              onClick={() => {}}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <RiContactsLine />
              <span>Settings</span>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
