import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className="flex justify-between mt-3 sm:mx-0 md:mx-2 relative">
      <TooltipComponent content="Menu" position="BottomCenter">
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          className={` ${activeMenu ? "hidden" : "block"} text-2xl ml-2`}
        >
          <AiOutlineMenu />
        </button>
      </TooltipComponent>

      <div className="flex cursor-pointer">
        <TooltipComponent content="Chat">
          <div className="px-4 text-xl">
            <BsChatLeft />
          </div>
        </TooltipComponent>
        <TooltipComponent content="Notifications">
          <div className="text-xl mr-4">
            <RiNotification3Line />
          </div>
        </TooltipComponent>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center cursor-pointer">
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold mx-2 text-14">Hassan</span>
            <FaRegUser className="text-lg" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;