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
      default: "pending"
    },
    type: {
      type: String,
      default: "normal"
    },
    bills: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Bills"
    },
    favorites: {
      type: Array,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Carts"
    }
  }, { timestamps: false }
);

module.exports = mongoose.model("User", userSchema);
