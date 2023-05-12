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

export default function AppViews({ isLoggedIn }) {
    return (
      <main>
        <Routes>
          <Route index element={ <Home /> }/>
          <Route path="home" element={ <Home /> }/>
            <Route path="guitars" element={< GuitarHome />} >
              <Route path=":id" element={< InstrumentDetails /> }/>
              <Route path="acoustic" element={ < AcousticGuitars /> }/>
              <Route path="electric" element={ < ElectricGuitars /> }/>
            </Route>
            
  
            { /* <Route path="category">
              <Route index
                element={ isLoggedIn ? <CategoryList /> : <Navigate to="/login" /> }
              />
            </Route>
            <Route path="category/:id" element={ isLoggedIn ? < CategoryDetails /> : <Navigate to="/login" /> } />
            <Route path="templates/:id" element={ isLoggedIn ? < TemplateForm userProfile={userProfile}/> : <Navigate to="/login" /> } />
            <Route path="templates/create" element={ isLoggedIn ? < CreateTemplate /> : <Navigate to="/login" /> } />
            <Route path="templates/edit/:existingTemplateId" element={ isLoggedIn ? < EditTemplate userProfile={userProfile}/> : <Navigate to="/login" /> } /> */}
  
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