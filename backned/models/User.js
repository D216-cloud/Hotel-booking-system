import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: Boolean, enum: ["user", "hotelOwner"], default: "user"},
    recentSearchedCities: {type: [String], required: []}
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;