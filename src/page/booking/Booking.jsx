import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";

const Booking = () => {
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
    title: "User Name",
    key: "userName",
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
    title: "Provider Name",
    key: "providerName",
    render: () => <span>Provider ABC</span>, // Dummy text
  },
  {
    title: "Session Type",
    key: "sessionType",
    render: () => (
       <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full border text-red-500 border-red-400">
          CrossFit 💪
        </span>
     
      </div>
    ),
  },
 
  {
    title: "Session Date",
    key: "sessionDate",
    render: (_, record) => <span>{record.createdAt}</span>,
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <span className={record.blockId ? "text-green-500" : "text-red-500"}>
        {record.blockId ? "Active" : "Pending"}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-2 items-center">
        <button className="text-2xl" onClick={() => showModal2(record)}>
          <LuEye />
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
        <Navigate title={"Manage Bookings"} />
      
      </div>

      <Table
        dataSource={paginatedUsers}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

      <div className=" bg-[#E0FFFF] py-3 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={dummyUsers.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>

  
    {/* Modal */}
<Modal open={isModalOpen2} centered onCancel={handleCancel2} footer={null}>
  {selectedUser && (
    <div className="w-full max-w-xl mx-auto p-5">

      {/* USER INFO */}
      <h2 className="text-lg font-semibold mb-3 border-b pb-1">User Information</h2>

      <div className="flex items-center gap-4 mb-5">
        <img
          src={selectedUser.image}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <p className="text-lg font-bold">{selectedUser.name}</p>

          <div className="flex items-center text-gray-600 mt-1">
            <AiOutlinePhone size={16} />
            <span className="ml-2">{selectedUser.phone}</span>
          </div>

          <div className="flex items-center text-gray-600 mt-1">
            <AiOutlineMail size={16} />
            <span className="ml-2">{selectedUser.email}</span>
          </div>

          <div className="flex items-center text-gray-600 mt-1">
            <GoLocation size={16} />
            <span className="ml-2">Location unavailable</span>
          </div>
        </div>
      </div>

      {/* PROVIDER INFO */}
      <h2 className="text-lg font-semibold mb-3 border-b pb-1">Provider Information</h2>

      <div className="mb-5">
        <p className="text-gray-700">
          <span className="font-semibold">Provider Name:</span> Provider ABC
        </p>

        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Expertise:</span>{" "}
          <span className="px-3 py-1 rounded-full border text-red-500 border-red-400 inline-block ml-2">
            CrossFit 💪
          </span>
        </p>

        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Contact:</span> Not Available
        </p>
      </div>

      {/* BOOKING INFO */}
      <h2 className="text-lg font-semibold mb-3 border-b pb-1">Booking Information</h2>

      <div className="mb-3">
        <p className="text-gray-700">
          <span className="font-semibold">Session Date:</span> {selectedUser.createdAt}
        </p>

        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Session Type:</span>
          <span className="px-3 py-1 rounded-full border text-red-500 border-red-400 inline-block ml-2">
            CrossFit 💪
          </span>
        </p>

        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Booking Status:</span>{" "}
          <span
            className={`ml-2 font-semibold ${
              selectedUser.blockId ? "text-green-600" : "text-red-600"
            }`}
          >
            {selectedUser.blockId ? "Active" : "Pending"}
          </span>
        </p>
      </div>
    </div>
  )}
</Modal>

    </div>
  );
};

export default Booking;
