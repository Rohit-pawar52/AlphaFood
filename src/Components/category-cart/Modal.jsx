import React from "react";

const Modal = ({ isOpen, onClose, paymentData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <center className="text-2xl text-blue-500">Success</center>
        <p className="text-lg font-bold mb-4">Payment Details</p>
        <div className="space-y-2">
          {paymentData ? (
            <div>
              <p>
                <span className="font-medium">Amount:</span> ${paymentData.amount}
              </p>
              <p>
                <span className="font-medium">Payment Method:</span> {paymentData.method}
              </p>
              <p>
                <span className="font-medium">Status:</span> {paymentData.status}
              </p>
            </div>
          ) : (
            <p>No payment data available.</p>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
