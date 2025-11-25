import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";

import { RiUserForbidLine } from "react-icons/ri";
import EarningGrowth from "./EarningGrowth";

const AllEarningGrowth = () => {
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
      title: "SI",
      key: "si",
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
            <p className="font-semibold">{record.name}</p>
            <p className="text-sm text-gray-500">{record.email}</p>
          </div>
        </div>
      ),
    },

    {
      title: "Pay For",
      key: "payFor",
      render: () => <span>Subscription</span>, // Dummy text
    },

    {
      title: "Provider Info",
      key: "provider",
      render: () => (
        <span className="text-gray-600">Stripe / Bkash / Nagad</span>
      ),
    },

    {
      title: "Date / Time",
      key: "date",
      render: (_, record) => (
        <span className="text-gray-700">{record.createdAt} — 10:23 AM</span>
      ),
    },

    {
      title: "Pay On",
      key: "payOn",
      render: () => <span>Online</span>,
    },

    {
      title: "Transaction ID",
      key: "transactionId",
      render: (_, record) => (
        <span className="font-mono text-blue-600">TXN-{record.key}23A9</span>
      ),
    },

    {
      title: "Amount",
      key: "amount",
      render: () => <span className="font-semibold">$49.00</span>,
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
        <Navigate title={"Manage Earning"} />
        <div className="flex gap-2">
          <div>
            <Select
              defaultValue="all providers"
              style={{ width: 150, height: "40px" }}
              options={[
                { value: "all providers", label: "All providers" },
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
              defaultValue="all Sessions"
              style={{ width: 150, height: "40px" }}
              options={[
                { value: "all Sessions", label: "All Sessions" },
                { value: "1x Sessions", label: "1x Sessions" },
                { value: "5x Sessions", label: "5x Sessions" },
                {
                  value: "10x Sessions",
                  label: "10x Sessions",
                },
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

      <div className="mt-4 flex justify-center">
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

export default AllEarningGrowth;
