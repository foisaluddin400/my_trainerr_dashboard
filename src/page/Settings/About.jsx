import React, { useState } from "react";
import { Modal, Form, Input, Spin } from "antd";
import { FiEdit3 } from "react-icons/fi";
import { Navigate } from "../../Navigate";

const { TextArea } = Input;

const About = () => {
  const [form] = Form.useForm();

  // Modal states
  const [openMission, setOpenMission] = useState(false);
  const [openVision, setOpenVision] = useState(false);
  const [openValues, setOpenValues] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log(values);
      setLoading(false);

      setOpenMission(false);
      setOpenVision(false);
      setOpenValues(false);

      form.resetFields();
    }, 1000);
  };

  return (
    <div className=" bg-white p-3 h-[87vh] overflow-auto space-y-6">
<Navigate title={"About Us"} />
      {/* -------- Mission ---------- */}
      <div className="border rounded-xl p-5 hover:shadow-sm transition bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-1">Our Mission</h2>
            <p className="text-gray-600">
              To connect individuals with world-class personal trainers, 
              making personalized fitness accessible, effective, and motivational 
              for everyone, anytime, anywhere.
            </p>
          </div>

          <FiEdit3
            size={22}
            className="cursor-pointer text-gray-500 hover:text-[#0C8A8A]"
            onClick={() => setOpenMission(true)}
          />
        </div>
      </div>

      {/* -------- Vision ---------- */}
      <div className="border rounded-xl p-5 hover:shadow-sm transition bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-1">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading platform shaping the future of fitness where 
              technology and human expertise create a healthier, stronger, and more connected world.
            </p>
          </div>

          <FiEdit3
            size={22}
            className="cursor-pointer text-gray-500 hover:text-[#0C8A8A]"
            onClick={() => setOpenVision(true)}
          />
        </div>
      </div>

      {/* -------- Values ---------- */}
      <div className="border rounded-xl p-5 hover:shadow-sm transition bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="p-2 rounded-full bg-[#e8fafa] border border-[#0C8A8A] text-[#0C8A8A] text-lg">
                💡
              </span>
              Our Values
            </h2>

            <ul className="text-gray-600 space-y-3">
              <li>
                <strong>Empowerment –</strong> We help you take control of your fitness journey  
                with tools, support, and expert guidance.
              </li>

              <li>
                <strong>Excellence –</strong> We aim for the highest standards, connecting users  
                with elite trainers and a seamless app experience.
              </li>

              <li>
                <strong>Community –</strong> We foster an inclusive environment that motivates  
                and celebrates every step of your progress.
              </li>
            </ul>
          </div>

          <FiEdit3
            size={22}
            className="cursor-pointer text-gray-500 hover:text-[#0C8A8A]"
            onClick={() => setOpenValues(true)}
          />
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* MISSION MODAL */}
      <Modal
        open={openMission}
        centered
        footer={null}
        width={600}
        onCancel={() => setOpenMission(false)}
      >
        <h2 className="text-2xl font-semibold text-center mb-3">Update Mission</h2>
        <p className="text-center text-gray-500 mb-6">
          Update the mission description below.
        </p>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Mission Description"
            name="mission"
            rules={[{ required: true, message: "Field is required!" }]}
          >
            <TextArea rows={5} placeholder="Enter mission text..." />
          </Form.Item>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0C8A8A] text-white rounded-md"
          >
            {loading ? <Spin size="small" /> : "Save"}
          </button>
        </Form>
      </Modal>

      {/* --------------------------------------------------------------- */}
      {/* VISION MODAL */}
      <Modal
        open={openVision}
        centered
        footer={null}
        width={600}
        onCancel={() => setOpenVision(false)}
      >
        <h2 className="text-2xl font-semibold text-center mb-3">Update Vision</h2>
        <p className="text-center text-gray-500 mb-6">
          Update the vision description below.
        </p>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Vision Description"
            name="vision"
            rules={[{ required: true, message: "Field is required!" }]}
          >
            <TextArea rows={5} placeholder="Enter vision text..." />
          </Form.Item>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0C8A8A] text-white rounded-md"
          >
            {loading ? <Spin size="small" /> : "Save"}
          </button>
        </Form>
      </Modal>

      {/* --------------------------------------------------------------- */}
      {/* VALUES MODAL */}
      <Modal
        open={openValues}
        centered
        footer={null}
        width={600}
        onCancel={() => setOpenValues(false)}
      >
        <h2 className="text-2xl font-semibold text-center mb-3">Update Values</h2>
        <p className="text-center text-gray-500 mb-6">
          You can update all three values below.
        </p>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Empowerment"
            name="empowerment"
            rules={[{ required: true, message: "Field is required!" }]}
          >
            <TextArea rows={3} placeholder="Enter Empowerment..." />
          </Form.Item>

          <Form.Item
            label="Excellence"
            name="excellence"
            rules={[{ required: true, message: "Field is required!" }]}
          >
            <TextArea rows={3} placeholder="Enter Excellence..." />
          </Form.Item>

          <Form.Item
            label="Community"
            name="community"
            rules={[{ required: true, message: "Field is required!" }]}
          >
            <TextArea rows={3} placeholder="Enter Community..." />
          </Form.Item>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0C8A8A] text-white rounded-md"
          >
            {loading ? <Spin size="small" /> : "Save"}
          </button>
        </Form>
      </Modal>
    </div>
  );
};

export default About;
