import { RiUserForbidLine } from "react-icons/ri";
import ActivityStatisticsChart from "./ActivityStatisticsChart";
import BookingGrowth from "./BookingGrowth";
import ShopRegistration from "./ShopRegister";
import UserGrowthChart from "./UserGrowthChart";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { VscNote } from "react-icons/vsc";
import { PiMoneyLight } from "react-icons/pi";
import ProviderJoinGrowth from "./ProviderJoinGrowth";
const Dashboard = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-4 gap-4">
        <div className=" gap-4  bg-[#DCFCE7] p-6 border border-[#479A43] rounded">
          <div className="bg-[#86EFAC] w-[55px] rounded-md h-[55px] flex justify-center items-center text-3xl">
            <HiOutlineUserGroup className="text-[#479A43]" />
          </div>
          <div>
            <h1 className=" py-3 text-3xl"> Total User</h1>
            <h1 className="font-semibold text-[#479A43] text-5xl">1,100</h1>
          </div>
        </div>

        <div className=" gap-4  bg-[#E0FFFF] p-6 border border-[#0C8A8A] rounded">
          <div className="bg-[#99F6E4] w-[55px] rounded-md h-[55px] flex justify-center items-center text-3xl">
            <RiUserForbidLine className="text-[#0C8A8A]" />
          </div>
          <div>
            <h1 className=" py-3 text-3xl"> Blocked Users</h1>
            <h1 className="font-semibold text-[#0C8A8A] text-5xl">1,100</h1>
          </div>
        </div>

        <div className=" gap-4  bg-[#DCFCE7] p-6 border border-[#479A43] rounded">
          <div className="bg-[#86EFAC] w-[55px] rounded-md h-[55px] flex justify-center items-center text-3xl">
            <HiOutlineUserGroup className="text-[#479A43]" />
          </div>
          <div>
            <h1 className=" py-3 text-3xl"> Total Providers</h1>
            <h1 className="font-semibold text-[#479A43] text-5xl">1,100</h1>
          </div>
        </div>
        <div className=" gap-4  bg-[#E0FFFF] p-6 border border-[#0C8A8A] rounded">
          <div className="bg-[#99F6E4] w-[55px] rounded-md h-[55px] flex justify-center items-center text-3xl">
            <RiUserForbidLine className="text-[#0C8A8A]" />
          </div>
          <div>
            <h1 className=" py-3 text-3xl"> Blocked Providers</h1>
            <h1 className="font-semibold text-[#0C8A8A] text-5xl">1,100</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 ">
        <div className="w-full h-full bg-white p-4 rounded shadow">
          <UserGrowthChart />
        </div>
        <div className=" bg-white p-4 rounded shadow ">
          {/* <ActivityStatisticsChart /> */}
          <ProviderJoinGrowth></ProviderJoinGrowth>
        </div>
      </div>

      <div className="w-full bg-white p-4 rounded shadow mt-4">
        <ShopRegistration></ShopRegistration>
      </div>
    </div>
  );
};

export default Dashboard;
