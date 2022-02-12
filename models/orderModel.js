const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    orderItems: [
      {
        name: { type: String, require },
        quantity: { type: Number, require },
        _id: { type: String, require },
        price: { type: Number, require },
      },
    ],
    shippingAddress: {
      address: { type: String, require },
      city: { type: String, require },
      postalCode: { type: String, require },
      country: { type: String, require },
    },
    orderAmount: {
      type: Number,
      require,
    },
    transactionId: { type: String, require },
    isDelivered: { type: Boolean, require },
  },
  { timestamps: true }
)
const UserData = mongoose.model("ordercollection", orderSchema);
module.exports = UserData;
