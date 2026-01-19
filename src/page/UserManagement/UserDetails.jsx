import React from "react";
import { Navigate } from "../../Navigate";

const UserDetails = () => {
  return (
   <div className="bg-white p-3">
    <Navigate title={"User Details"} />
     <div className="w-full flex flex-col items-center py-10">
      
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src="/avatar.png" 
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Name */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Name</p>
          <p className="font-semibold">Mojahid Islam</p>
        </div>

        {/* Email */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Email</p>
          <p className="font-semibold">Mojahid@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Telephone Number</p>
          <p className="font-semibold">+880 1737705577</p>
        </div>

        {/* Joined Date */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Joined Date</p>
          <p className="font-semibold">12 March 2024</p>
        </div>

        {/* Address */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Address</p>
          <p className="font-semibold">34 Sonnenallee, Berlin, Germany</p>
        </div>

        {/* DOB */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Date of Birth</p>
          <p className="font-semibold">22 July 1995</p>
        </div>

        {/* Gender */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Gender</p>
          <p className="font-semibold">Male</p>
        </div>

        {/* Session Credit */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-600">Sessions Credit</p>
          <p className="font-semibold">00</p>
        </div>

      </div>

      {/* Status */}
      <div className="w-full max-w-4xl mt-6">
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-semibold text-green-600">Active</p>
          </div>
        </div>
      </div>

      {/* Block Button */}
      <div className="w-full max-w-4xl mt-6">
        <button className="flex items-center gap-2 border border-red-400 text-red-500 px-5 py-2 rounded-lg hover:bg-red-50 transition">
          <span>🚫</span> Block this User
        </button>
      </div>
    </div>
   </div>
  );
};

export default UserDetails;
