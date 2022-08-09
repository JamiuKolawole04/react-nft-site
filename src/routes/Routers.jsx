import { Routes, Route, Navigate } from "react-router-dom";

import {
    Home,
    Market,
    Create,
    Contact,
    SellerProfile,
    EditProfile,
    Wallet,
    NftDetails
} from "../pages";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/create" element={<Create />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/seller-profile" element={<SellerProfile />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/market/:id" element={<NftDetails />} />
        </Routes>
    );
}