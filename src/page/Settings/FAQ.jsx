import React, { useState } from "react";
import { message, Modal } from "antd";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Navigate } from "../../Navigate";

const FAQ = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [faqs, setFaqs] = useState([
    {
      _id: "1",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all products. Items must be returned in their original condition with all tags attached."
    },
    {
      _id: "2",
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-7 business days within the continental US. Expedited options are available."
    }
  ]);

  const handleAddFaq = () => {
    if (!question || !answer) return message.warning("Please fill all fields");

    const newFaq = {
      _id: Date.now().toString(),
      question,
      answer
    };

    setFaqs((prev) => [...prev, newFaq]);
    message.success("FAQ added successfully");
    setAddModalOpen(false);
    setQuestion("");
    setAnswer("");
  };

  const handleUpdateFaq = () => {
    if (!question || !answer) return message.warning("Please fill all fields");

    setFaqs((prev) =>
      prev.map((faq) =>
        faq._id === selectedFaq._id ? { ...faq, question, answer } : faq
      )
    );

    message.success("FAQ updated successfully");
    setUpdateModalOpen(false);
    setSelectedFaq(null);
    setQuestion("");
    setAnswer("");
  };

  const handleDeleteFaq = () => {
    setFaqs((prev) => prev.filter((faq) => faq._id !== selectedFaq._id));
    message.success("FAQ deleted successfully");
    setDeleteModalOpen(false);
    setSelectedFaq(null);
  };

  return (
    <div className="relative bg-white p-3 h-[87vh] overflow-y-auto">
      <div className="flex justify-between items-center">
        <Navigate title={"Faq"} />
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-[#0C8A8A] text-white font-semibold px-5 py-2 rounded"
        >
          + Add FAQ
        </button>
      </div>

      {/* FAQ LIST WITHOUT COLLAPSE */}
      <div className="flex gap-2 flex-col w-full mt-5 p-5">
        {faqs.map((faq) => (
          <section
            key={faq._id}
            className="border-b border-[#e5eaf2] rounded py-3"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-base md:text-2xl font-bold flex gap-2 items-center">
                <FaRegQuestionCircle className="w-5 h-5 hidden md:flex" />
                {faq.question}
              </h2>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedFaq(faq);
                    setQuestion(faq.question);
                    setAnswer(faq.answer);
                    setUpdateModalOpen(true);
                  }}
                  className="border-2 px-2 py-1 rounded border-[#0C8A8A] bg-[#f0fcf4]"
                >
                  <CiEdit className="text-2xl text-[#0C8A8A]" />
                </button>

                <button
                  onClick={() => {
                    setSelectedFaq(faq);
                    setDeleteModalOpen(true);
                  }}
                  className="border-2 px-2 py-1 rounded border-[#0C8A8A] bg-[#f0fcf4]"
                >
                  <RiDeleteBin6Line className="text-2xl text-[#0C8A8A]" />
                </button>
              </div>
            </div>

            {/* ANSWER ALWAYS VISIBLE */}
            <p className="text-[#424242] text-[0.9rem] mt-3">
              {faq.answer}
            </p>
          </section>
        ))}
      </div>

      {/* Add FAQ Modal */}
      <Modal open={addModalOpen} centered onCancel={() => setAddModalOpen(false)} footer={null}>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-center mb-2">Add FAQ</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Question"
              className="w-full px-3 py-2 border rounded-lg"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <textarea
              rows={4}
              placeholder="Enter Answer"
              className="w-full px-3 py-2 border rounded-lg"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={() => setAddModalOpen(false)}
              className="py-2 border border-[#0C8A8A] bg-green-50 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleAddFaq}
              className="py-2 bg-[#0C8A8A] text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/* Update Modal */}
      <Modal open={updateModalOpen} centered onCancel={() => setUpdateModalOpen(false)} footer={null}>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-center mb-2">Update FAQ</h2>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <textarea
              rows={4}
              className="w-full px-3 py-2 border rounded-lg"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={() => setUpdateModalOpen(false)}
              className="py-2 border border-[#0C8A8A] bg-green-50 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateFaq}
              className="py-2 bg-[#0C8A8A] text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal open={deleteModalOpen} centered onCancel={() => setDeleteModalOpen(false)} footer={null}>
        <div className="p-5 text-center">
          <h2 className="text-2xl font-bold mb-6">Are you sure you want to delete?</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setDeleteModalOpen(false)}
              className="py-2 border border-[#0C8A8A] bg-green-50 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteFaq}
              className="py-2 bg-[#0C8A8A] text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FAQ;
