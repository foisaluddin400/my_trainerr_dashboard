import dashboard from "../../assets/routerImg/dashboard.png";
import categorie from "../../assets/routerImg/categorie.png";
import create from "../../assets/routerImg/create.png";
import settings from "../../assets/routerImg/settings.png";
import subscription from "../../assets/routerImg/subscription.png";
import user from "../../assets/routerImg/user.png";
import logo from "../../assets/header/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { logout } from "../../page/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import {
  TbCalendarUser,
  TbCalendarX,
  TbCategory2,
  TbDeviceIpadExclamation,
  TbMessages,
  TbReceiptDollar,
} from "react-icons/tb";

import { VscDashboard } from "react-icons/vsc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiNoteLight } from "react-icons/pi";
import { LuUserCog } from "react-icons/lu";

const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <VscDashboard />,
    link: "/",
  },
  {
    key: "userManagement",
    label: "User Management",
    icon: <FiUser />,
    link: "/dashboard/UserManagement",
  },
  {
    key: "providers",
    label: "Providers",
    icon: <TbCalendarUser />,
    link: "/dashboard/providers",
  },
  {
    key: "booking",
    label: "Bookings",
    icon: <TbCalendarX />,
    link: "/dashboard/bookings",
  },
  {
    key: "Categories",
    label: "Session Category",
    icon: <MdOutlineDashboardCustomize />,
    link: "/dashboard/Categories",
  },
  {
    key: "earnings",
    label: "Earnings",
    icon: <TbReceiptDollar />,
    link: "/dashboard/earnings",
  },
  {
    key: "Support",
    label: "Support",
    icon: <TbMessages />,
    link: "/dashboard/Support",
  },
  {
    key: "profiles",
    label: "Profile",
     icon: <LuUserCog />,
    link: "/dashboard/profile",
  },
  {
    key: "AboutUs",
    label: "About Us",
    icon: <HiOutlineExclamationCircle />,
    link: "/dashboard/aboutUs",
  },

  {
    key: "Terms&Condition",
    label: "Terms & Condition",
    icon: <PiNoteLight />,
    link: "/dashboard/Terms&Condition",
  },
  
  {
    key: "PrivacyPolicy",
    label: "Privacy & Policy",
    icon: <TbDeviceIpadExclamation />,
    link: "/dashboard/PrivacyPolicy",
  },

  {
    key: "FAQ",
    label: "Manage FAQ",
    icon: <AiOutlineQuestionCircle />,
    link: "/dashboard/FAQ",
  },
];

const SidBar = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef({});
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPath = location.pathname;

    let activeParent = null;

    items.forEach((item) => {
      if (item.link === currentPath) {
        activeParent = item;
      } else if (
        item.children &&
        item.children.some((child) => child.link === currentPath)
      ) {
        activeParent = item;
      }
    });

    if (activeParent) {
      setSelectedKey(
        activeParent.children
          ? activeParent.children.find((child) => child.link === currentPath)
              ?.key || activeParent.key
          : activeParent.key
      );

      if (activeParent.children && !expandedKeys.includes(activeParent.key)) {
        setExpandedKeys([...expandedKeys, activeParent.key]);
      }
    }
  }, [location]);

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  // Logout Function
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="custom-sidebar h-[100vh] bg-white border-r text-black">
      <div className="custom-sidebar-logo flex justify-center">
        <img src={logo} alt="Logo" className="w-[160px]" />
      </div>
      <div className="menu-items">
        {items.map((item) => {
          const isSettingsActive =
            item.key === "settings" &&
            item.children.some((child) => child.link === location.pathname);

          const isCreatorActive =
            item.key === "creatorManagement" &&
            item.children.some((child) => child.link === location.pathname);

          const isCategoriesActive =
            item.key === "categoriesManagement" &&
            item.children.some((child) => child.link === location.pathname);
          return (
            <div key={item.key}>
              <Link
                to={item.link}
                className={`menu-item my-2  py-[10px] px-4 flex items-center cursor-pointer ${
                  selectedKey === item.key ||
                  isSettingsActive ||
                  isCreatorActive ||
                  isCategoriesActive
                    ? "bg-gradient-to-r from-[#097070] border-l-2 border-green-500 to-[#ffffff00] text-white  "
                    : "  hover:bg-gradient-to-r hover:from-[#aadbdb]"
                }`}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    onParentClick(item.key);
                  } else {
                    setSelectedKey(item.key);
                  }
                }}
              >
                <h1 className="w-4 mr-2">{item.icon}</h1>

                <span className="block w-full ">{item.label}</span>

                {/* Show dropdown arrow if children exist */}
                {item.children && (
                  <FaChevronRight
                    className={`ml-auto transform transition-all text-[10px] duration-300 ${
                      expandedKeys.includes(item.key) ? "rotate-90" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Show children menu if expanded */}
              {item.children && (
                <div
                  className={`children-menu  ml-6 mx-2  transition-all duration-300 ${
                    expandedKeys.includes(item.key) ? "expanded" : ""
                  }`}
                  style={{
                    maxHeight: expandedKeys.includes(item.key)
                      ? `${contentRef.current[item.key]?.scrollHeight}px`
                      : "0",
                  }}
                  ref={(el) => (contentRef.current[item.key] = el)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.key}
                      to={child.link}
                      className={`menu-item p-2 flex items-center cursor-pointer ${
                        selectedKey === child.key
                          ? " text-red-500"
                          : "hover:bg-gradient-to-r hover:from-[#470e0e]"
                      }`}
                      onClick={() => {
                        setSelectedKey(child.key); // শুধু selectedKey update হবে
                        // setExpandedKeys([]); // এটা আর লাগবে না
                      }}
                    >
                      <span className="block w-full ">{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="mx-4 ">
        <div className=" border-red-600 rounded w-full p-3 border mt-4">
          <button
            onClick={handleLogout}
            className=" flex items-center text-red-600 text-start rounded-md  "
          >
            <span className="text-2xl">
              <IoIosLogIn />
            </span>
            <span className="ml-3">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidBar;
