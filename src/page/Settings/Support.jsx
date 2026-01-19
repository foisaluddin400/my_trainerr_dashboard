import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { Link } from "react-router-dom";

const Support = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy data
  const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    no: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `+8801${Math.floor(100000000 + Math.random() * 900000000)}`,
    block: index + 1,
    blockId: index % 2 === 0, // even users are blocked
    image: `https://avatar.iran.liara.run/public/${index + 1}`,
    createdAt: new Date().toLocaleDateString(),
  }));

  // Modal states
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showModal2 = (record) => {
    setSelectedUser(record);
    setIsModalOpen2(true);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setSelectedUser(null);
  };

  // Dummy Block/Unblock
  const handleBlockUnblock = (id) => {
    message.success(`User with ID ${id} blocked/unblocked successfully`);
  };

const columns = [
  {
    title: "SL",
    dataIndex: "no",
    key: "no",
    render: (_, record, index) => index + 1,
  },
  {
    title: "User Info",
    key: "userInfo",
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <img
          src={record.image}
          className="w-10 h-10 object-cover rounded-full"
          alt="User Avatar"
        />
        <div>
          <p className="font-medium">{record.name}</p>
          <p className="text-sm text-gray-500">{record.email}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Contact Reason",
    key: "contactReason",
    render: () => <span>Account Issue</span>, // Dummy reason
  },
  {
    title: "Message / Details",
    key: "message",
    render: () => (
      <span className="text-gray-700">
        I need help regarding my account settings.
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-3 items-center text-xl">
        <Link to={`/dashboard/Support/support-details/${record?.key}`}><button >
          <LuEye />
        </button></Link>

        {/* Link Icon → Navigate to specific page */}
        <button
          onClick={() => window.open("https://example.com/support-ticket", "_blank")}
          className="text-blue-600"
        >
          🔗
        </button>
      </div>
    ),
  },
];

  // Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Paginated data
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = dummyUsers.slice(start, end);

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto ">
      <div className="flex justify-between ">
        <Navigate title={"Support"} />
        <div className="flex gap-2">
           <div>
            <Select
              defaultValue="all"
              style={{ width: 150, height: "40px" }}
              options={[
                { value: "all", label: "All" },
                { value: "Last 24 Hours", label: "Last 24 Hours" },
                { value: "Last Week", label: "Last Week" },
                { value: "Last Fortnight", label: "Last Fortnight" },
                { value: "Last Month", label: "Last Month" },
                { value: "Last Year", label: "Last Year" },
              ]}
            />
          </div>
          <div>
            <Select
              defaultValue="all"
              style={{ width: 150, height: "40px" }}
              options={[
                { value: "all", label: "All User" },
                { value: "blocked", label: "Blocked User" },
              ]}
            />
          </div>
          <Input
            placeholder="Search by name..."
            prefix={<SearchOutlined />}
            style={{ marginBottom: "16px", maxWidth: "300px", height: "40px" }}
          />
        </div>
      </div>

      <Table
        dataSource={paginatedUsers}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

      <div className="bg-[#E0FFFF] py-3 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={dummyUsers.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>

  
    </div>
  );
};

export default Support;
