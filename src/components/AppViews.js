import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import UserDetails from "./user/UserDetails";
import ListUsers from "./user/ListUsers";
import EditUser from "./user/EditUser";
import Home from "./Home"
import GuitarHome from "./instruments/guitars/GuitarHome";
import AcousticGuitars from "./instruments/guitars/AcousticGuitars";
import ElectricGuitars from "./instruments/guitars/ElectricGuitars";
import InstrumentDetails from "./instruments/InstrumentDetails";
import BassHome from "./instruments/BassHome";
import KeyboardHome from "./instruments/KeyboardHome";
import PercussionHome from "./instruments/PercussionHome";

export default function AppViews({ isLoggedIn }) {
    return (
      <main>
        <Routes>
          <Route index element={ <Home /> }/>
          <Route path="home" element={ <Home /> }/>

          <Route path="guitar" element={< GuitarHome />} />
          <Route path="guitar/acoustic" element={ < AcousticGuitars /> }/>
          <Route path="guitar/electric" element={ < ElectricGuitars /> }/>

          <Route path="bass" element={< BassHome />} />
          <Route path="keyboard" element={< KeyboardHome />} />
          <Route path="percussion" element={< PercussionHome />} />
  
          <Route path=":id" element={< InstrumentDetails /> }/>

          <Route path="users" element={ <ListUsers />} />
          <Route path="users/:userId" element={< UserDetails />} />
          <Route path="users/edit/:id" element={< EditUser />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Routes>
      </main>
    );
  };