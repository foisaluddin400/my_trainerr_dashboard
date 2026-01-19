import React, { useState } from "react";
import { Navigate } from "../../Navigate";

const ProviderDetails = () => {
  const [tab, setTab] = useState("info");

  return (
    <div className="bg-white p-3">
        <Navigate title={"Provider Details"} />
        <div className="w-full  flex flex-col items-center py-10">

      {/* Avatar */}
      <div className="flex flex-col items-center">
        <img
          src="/avatar.png" 
          alt="Avatar"
          className="w-32 h-32 rounded-full"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setTab("info")}
          className={`px-5 py-2 rounded-md text-white ${
            tab === "info" ? "bg-teal-500" : "bg-gray-200 text-black"
          }`}
        >
          Provider Info
        </button>

        <button
          onClick={() => setTab("documents")}
          className={`px-5 py-2 rounded-md text-white ${
            tab === "documents" ? "bg-teal-500" : "bg-gray-200 text-black"
          }`}
        >
          Documents
        </button>
      </div>

      {/* ====================== TAB 1 : PROVIDER INFO ====================== */}
      {tab === "info" && (
        <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

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

          {/* Session Count */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Sessions Count</p>
            <p className="font-semibold">15</p>
          </div>

          {/* Expertise */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Expertise</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Weight Loss 🏋️", "Strength training 🏋️‍♂️", "CrossFit 🏆", "CrossFit🔥"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-red-50 border border-red-300 text-red-500 rounded-full text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Experience */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Years of Experience</p>
            <p className="font-semibold">5</p>
          </div>

          {/* Status */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-semibold text-red-500">Blocked</p>
          </div>

          {/* Verification */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Verification</p>
            <p className="font-semibold text-yellow-500">Pending</p>
          </div>

          {/* Unblock Button */}
          <div className="col-span-2">
            <button className="mt-4 border border-green-500 text-green-600 px-5 py-2 rounded-md hover:bg-green-50">
              ◉ Unblock this Provider
            </button>
          </div>
        </div>
      )}

      {/* ====================== TAB 2 : DOCUMENTS ====================== */}
      {tab === "documents" && (
        <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Certificate 01 */}
          <div className="border rounded-lg p-4 flex items-center justify-between bg-red-50">
            <div>
              <p className="text-sm text-gray-600">Certification 01</p>
              <p className="font-medium text-red-500">NASM CPT certificate.pdf</p>
            </div>
            <span className="text-red-500 text-xl">📄</span>
          </div>

          {/* Certificate 02 */}
          <div className="border rounded-lg p-4 flex items-center justify-between bg-red-50">
            <div>
              <p className="text-sm text-gray-600">Certification 02</p>
              <p className="font-medium text-red-500">ISSA certificate.pdf</p>
            </div>
            <span className="text-red-500 text-xl">📄</span>
          </div>

          {/* Payment Method */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Payment Method</p>
            <p className="font-semibold">Stripe Connect</p>
          </div>

          {/* Account Number */}
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-600">Account Number</p>
            <p className="font-semibold">DE89 3704 0044 0532 0130 00</p>
          </div>

          {/* Verification Dropdown */}
          <div className="border rounded-lg p-4 col-span-2 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Verification</p>
              <p className="font-semibold text-yellow-500">Pending</p>
            </div>

            <button className="bg-teal-500 text-white px-5 py-2 rounded-md">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProviderDetails;
