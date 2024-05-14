import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import dash from "../images/welcome-bg2-2x-svg-14e3163f.svg";

const Dashboard = () => {
  return (
    <div className="ml-4 mt-10">
      <div className="dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl bg-no-repeat bg-cover w-full flex justify-around">
        <div className="flex flex-col pt-12">
          <span className="font-extrabold">Earnings</span>
          <span className="flex items-center text-lg">
            <BsCurrencyDollar />
            120,000
          </span>
        </div>
        <div>
          <img src={dash} alt="" className="pl-11 h-56" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
