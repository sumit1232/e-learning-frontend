import React, { Component, useEffect, useState } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Course from "./Courses";
import Goals from "./Goals";
import PlanandPrice from "./PlanandPrice";
import Footer from "./Footer";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  // Name<h1>{userData.fname}</h1>
  // Email <h1>{userData.email}</h1>
  // <br />
  // <button onClick={logOut} className="btn btn-primary">
  //   Log Out
  // </button>
  return (
   <>
   <h1>Welcome {userData.fname}</h1>
 <Header />
<Introduction />
<Course />
<Goals />
<PlanandPrice />
<Footer />
   </>
  );
}

