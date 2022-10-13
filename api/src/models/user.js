const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    firstName: {
      type: String,
      default: 'empty'
    },
    lastName: {
      type: String,
      default: 'empty'
    },
    email: {
      type: String,
    },
    dni: {
      type: Number,
      default: 0
    },
    phone: {
      type: Number,
      default: 0
    },
    address: {
      street: {
        type: String,
        default: 'empty'
      },
      number: {
        type: Number,
        default: 0
      },
      floor: {
        type: Number,
        default: 0
      }
    },
    birthdate: {
      type: String,
      default: 'empty'
    },
    loyaltyPoint: {
      type: Number,
      default: 0
    },
    state: {
      type: String,
      default: "Pending"
    },
    type: {
      type: String,
      default: "Normal"
    },
    bills: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bills",
      default: {}
    },
  }, { timestamps: false }
);

module.exports = mongoose.model("User", userSchema);
