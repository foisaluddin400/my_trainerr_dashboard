import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";

const Provider = () => {
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
    title: "Name",
    key: "name",
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <img
          src={record.image}
          className="w-10 h-10 object-cover rounded-full"
          alt="User Avatar"
        />
        <span>{record.name}</span>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Joined On",
    key: "createdAt",
    render: (_, record) => <span>{record.createdAt}</span>,
  },
  {
    title: "Verification",
    key: "verify",
    render: (_, record) => (
      <span
        className={
          record.blockId
            ? "text-green-500"
            : "text-red-500"
        }
      >
        {record.blockId ? "Verified" : "Unverified"}
      </span>
    ),
  },
  {
    title: "Expertise",
    key: "expertise",
    render: () => (
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full border text-red-500 border-red-400">
          CrossFit 💪
        </span>
        <span className="px-2 py-1 rounded-full border text-red-500 border-red-400">
          +2
        </span>
      </div>
    ),
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <span className={record.blockId ? "text-green-500" : "text-red-500"}>
        {record.blockId ? "Active" : "Blocked"}
      </span>
    ),
  },
  {
    title: "Actions",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-2 items-center">
        <button className="text-2xl" onClick={() => showModal2(record)}>
          <LuEye />
        </button>

        <button
          onClick={() => handleBlockUnblock(record?.block)}
          className={`w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md ${
            record.blockId ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          <MdBlockFlipped />
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
        <Navigate title={"Providers"} />
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
              defaultValue="all providers"
              style={{ width: 150, height: "40px" }}
              options={[
                { value: "all providers", label: "All providers" },
                { value: "Pending Providers", label: "Pending Providers" },
                { value: "Verified Providers", label: "Verified Providers" },
                { value: "Unverified Providers", label: "Unverified Providers" },
             
              ]}
            />
          </div>
          <div>
            <Select
              defaultValue="all"
              style={{ width: 150, height: "40px" }}
              options={[
                { value: "all", label: "All User" },
                { value: "blocked", label: "Blocked Provider" },
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

      {/* Modal */}
      <Modal
        open={isModalOpen2}
        centered
        onCancel={handleCancel2}
        footer={null}
      >
        {selectedUser && (
          <div className="w-full max-w-md p-5 mx-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-100 mb-3 overflow-hidden">
                <img
                  src={selectedUser.image}
                  alt="Profile avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold">{selectedUser.name}</h2>

              <div className="flex items-center text-gray-500 mt-1">
                <AiOutlinePhone size={16} className="text-gray-400" />
                <span className="ml-1 text-sm">{selectedUser.phone}</span>
              </div>

              <div className="flex items-center text-gray-500 mt-1">
                <GoLocation size={16} className="text-gray-400" />
                <span className="ml-1 text-sm">Location unavailable</span>
              </div>

              <div className="flex items-center text-gray-500 mt-1">
                <AiOutlineMail size={16} className="text-gray-400" />
                <span className="ml-1 text-sm">{selectedUser.email}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Provider;
