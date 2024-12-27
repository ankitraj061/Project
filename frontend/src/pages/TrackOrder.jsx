import React from "react";

const orders = [
  {
    id: "ORD123456",
    status: "In Transit",
    estimatedDelivery: "2024-12-30",
    details: "Your package has been dispatched and is on its way to the destination.",
  },
  {
    id: "ORD654321",
    status: "Delivered",
    estimatedDelivery: "2024-12-25",
    details: "Your package has been successfully delivered. Thank you for shopping with us!",
  },
  {
    id: "ORD987654",
    status: "Pending",
    estimatedDelivery: "2024-12-31",
    details: "Your order has been placed and is awaiting shipment confirmation.",
  },
];

const TrackOrder = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Track Your Order
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Order ID: {order.id}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "In Transit"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {order.status}
              </span>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
            </p>
            <p className="mt-4 text-gray-700">{order.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
