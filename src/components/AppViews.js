import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import UserDetails from "./user/UserDetails";
import ListUsers from "./user/ListUsers";
import EditUser from "./user/EditUser";
import LandingPage from "./LandingPage"
import GuitarHome from "./instruments/guitars/GuitarHome";
import AcousticGuitars from "./instruments/guitars/AcousticGuitars";
import ElectricGuitars from "./instruments/guitars/ElectricGuitars";
import InstrumentCard from "./instruments/InstrumentCard";

export default function AppViews({ isLoggedIn, userProfile }) {
    return (
      <main>
        <Routes>
          <Route path="/">
            <Route
              index
              element={ <LandingPage /> }
            />
            <Route path="guitars" element={< GuitarHome />} />
            <Route path=":id" element={< InstrumentCard /> }/>
            <Route path="acoustic" element={ < AcousticGuitars /> }/>
            <Route path="electric" element={ < ElectricGuitars /> }/>
  
            { /* <Route path="category">
              <Route index
                element={ isLoggedIn ? <CategoryList /> : <Navigate to="/login" /> }
              />
            </Route>
            <Route path="category/:id" element={ isLoggedIn ? < CategoryDetails /> : <Navigate to="/login" /> } />
            <Route path="templates/:id" element={ isLoggedIn ? < TemplateForm userProfile={userProfile}/> : <Navigate to="/login" /> } />
            <Route path="templates/create" element={ isLoggedIn ? < CreateTemplate /> : <Navigate to="/login" /> } />
            <Route path="templates/edit/:existingTemplateId" element={ isLoggedIn ? < EditTemplate userProfile={userProfile}/> : <Navigate to="/login" /> } /> */}
  
            <Route path="users" element={ isLoggedIn &&
                userProfile?.userType?.name === "Admin" ? <ListUsers userProfile={userProfile} /> : <Navigate to="/login" /> } />
            <Route path="users/:userId" element={ isLoggedIn ? < UserDetails userProfile={userProfile} /> : <Navigate to="/login" /> } />
            <Route path="users/edit/:id" element={ isLoggedIn ? < EditUser userProfile={userProfile} /> : <Navigate to="/login" /> } />
  
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<p>Whoops, nothing here...</p>} />
          </Route>
        </Routes>
      </main>
    );
  };