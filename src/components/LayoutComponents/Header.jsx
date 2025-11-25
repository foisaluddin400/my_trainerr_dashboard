import { LuBell } from "react-icons/lu";
import profilee from "../../../src/assets/header/profileLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";
import { Drawer } from "antd";

import dashboard from "../../assets/routerImg/dashboard.png";
import categorie from "../../assets/routerImg/categorie.png";
import create from "../../assets/routerImg/create.png";
import settings from "../../assets/routerImg/settings.png";
import subscription from "../../assets/routerImg/subscription.png";
import user from "../../assets/routerImg/user.png";
import logo from "../../assets/header/logo.png";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { FaChevronRight, FaHome } from "react-icons/fa";
import items from "../item.json";
import { IoIosLogIn } from "react-icons/io";

const icons = {
  FaHome,
  FiUser,
  TbCategory2,
  IoSettingsOutline,
};

// Sample notifications (replace with real data later)
const sampleNotifications = [
  {
    id: 1,
    title: "New Creator Request",
    message: "submitted a new creator application",
    userName: "Alex Johnson",
    userAvatar: "https://via.placeholder.com/40?text=A",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Subscription Activated",
    message: "Premium plan renewed successfully",
    userName: "System",
    userAvatar: "https://via.placeholder.com/40?text=S",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 3,
    title: "New User Registered",
    message: "just signed up",
    userName: "John Doe",
    userAvatar: "https://via.placeholder.com/40?text=J",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 4,
    title: "Category Updated",
    message: "Fashion category has been updated",
    userName: "Sarah Lee",
    userAvatar: "https://via.placeholder.com/40?text=S",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    title: "New Comment",
    message: "left a comment on your post",
    userName: "Emma Wilson",
    userAvatar: "https://via.placeholder.com/40?text=E",
    time: "2 days ago",
    read: true,
  },
  {
    id: 6,
    title: "Payment Received",
    message: "received payment for premium plan",
    userName: "Michael Brown",
    userAvatar: "https://via.placeholder.com/40?text=M",
    time: "3 days ago",
    read: true,
  },
  {
    id: 7,
    title: "Profile Updated",
    message: "updated their profile information",
    userName: "David Kim",
    userAvatar: "https://via.placeholder.com/40?text=D",
    time: "1 week ago",
    read: true,
  },
];

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const navigate = useNavigate();

  const contentRef = useRef({});

  // Drawer states (your original)
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  // New: Notification dropdown state
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  // Close notification when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const onClick = (key) => {
    setSelectedKey(key);
  };

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onChange = (e) => setPlacement(e.target.value);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleNotification = () => {
    setNotificationOpen((prev) => !prev);
  };

  const unreadCount = sampleNotifications.filter((n) => !n.read).length;

  return (
    <div className="bg-white text-black pt-5">
      <div className="flex justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <div className="py-3 pl-4">
            <div onClick={showDrawer} className="text-3xl cursor-pointer">
              <FaBars />
            </div>
          </div>
        </div>

        <div></div>

        {/* Right Side: Bell + Profile */}
        <div className="flex gap-4 p-1 px-6 items-center">
          {/* Notification Bell */}
          <div className="relative" ref={notificationRef}>
            <div
              onClick={toggleNotification}
              className="w-[45px] h-[45px] flex items-center justify-center text-xl rounded-md border border-[#1ea7a7] text-[#1ea7a7] cursor-pointer hover:bg-[#1ea7a7] hover:text-white transition-all"
            >
              <LuBell />
              {/* Badge */}
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 -mr-2 -mt-1 w-5 h-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full animate-pulse">
                  {unreadCount}
                </span>
              )}
            </div>

            {/* Notification Dropdown */}
            {notificationOpen && (
              <div className="absolute right-0 mt-3 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
                {/* Header */}
                <div className="bg-[#1ea7a7] text-white p-4 flex items-center gap-3 rounded-t-lg">
                  <img
                    src={profilee}
                    alt="profile"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Mojahid</h3>
                    <p className="text-sm opacity-90">Administrator</p>
                  </div>
                </div>

                {/* Title */}
                <div className="px-5 py-3 font-semibold text-gray-800 border-b">
                  Notifications {unreadCount > 0 && <span className="text-[#1ea7a7]">({unreadCount} new)</span>}
                </div>

                {/* Notifications List */}
                <div className="max-h-96 overflow-y-auto">
                {sampleNotifications.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">No notifications yet</div>
                  ) : (
                    sampleNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b transition-all hover:bg-gray-50 cursor-pointer flex gap-3 ${
                          notif.read ? "bg-white" : "bg-gray-100"
                        }`}
                      >
                        {/* User Avatar */}
                        <div className="flex-shrink-0">
                          <img
                            src={profilee}
                            alt={notif.userName}
                            className="w-10 h-10 rounded-full border border-gray-300"
                          />
                        </div>

                        {/* Notification Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                <span className="font-semibold">{notif.userName}</span>
                                <span className="text-gray-600"> {notif.message}</span>
                              </p>
                              {notif.title && (
                                <p className="text-xs text-[#1ea7a7] font-medium mt-1">{notif.title}</p>
                              )}
                            </div>
                            {!notif.read && (
                              <div className="w-2.5 h-2.5 bg-[#1ea7a7] rounded-full ml-3 flex-shrink-0"></div>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{notif.time}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 text-center border-t bg-gray-50">
                  <button className="text-[#1ea7a7] font-medium text-sm hover:underline">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Link (unchanged) */}
          <Link to={"/dashboard/Settings/profile"}>
            <div className="flex gap-3 border border-[#1aafaf] p-2 rounded-md cursor-pointer hover:bg-gray-50 transition">
              <div>
                <img className="w-[30px] h-[30px]" src={profilee} alt="profile" />
              </div>
              <div className="text-end">
                <h3>Mojahid</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Your Original Drawer (completely unchanged) */}
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="bg-black h-screen -m-6">
          <div className="custom-sidebar-logo flex justify-center">
            <img src={logo} alt="Logo" className="w-[160px]" />
          </div>

          <div className="menu-items">
            {items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.key}>
                  <Link
                    to={item.link}
                    className={`menu-item my-4 mx-5 py-3 px-3 flex items-center cursor-pointer ${
                      selectedKey === item.key
                        ? "bg-[#EDC4C5] rounded-md"
                        : "bg-white rounded-md hover:bg-gray-200"
                    }`}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        onParentClick(item.key);
                      } else {
                        setSelectedKey(item.key);
                        onClose();
                      }
                    }}
                  >
                    <h1 className="w-5 mr-2">
                      <Icon />
                    </h1>
                    <span className="block w-full text-black">{item.label}</span>

                    {item.children && (
                      <FaChevronRight
                        className={`ml-auto transform transition-all duration-300 ${
                          expandedKeys.includes(item.key) ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`children-menu bg-white -my-2 mx-5 text-black transition-all duration-300 ${
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
                          className={`menu-item p-4 flex items-center cursor-pointer ${
                            selectedKey === child.key ? "bg-[#EDC4C5]" : "hover:bg-gray-200"
                          }`}
                          onClick={() => {
                            setSelectedKey(child.key);
                            setExpandedKeys([]);
                            onClose();
                          }}
                        >
                          <span className="block w-full text-black">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="custom-sidebar-footer absolute bottom-0 w-full p-4">
            <button
              onClick={handleLogout}
              className="w-full flex bg-white text-start rounded-md text-black p-3"
            >
              <span className="text-2xl">
                <IoIosLogIn />
              </span>
              <span className="ml-3">Log Out</span>
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;