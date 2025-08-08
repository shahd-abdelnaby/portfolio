import React, { useEffect, useState } from "react";
import Navbar from './../navbar/Navbar';
export default function Home() {

return<>

<div className="home">
  <div className="avatar text-center ">
    <img className="ava mt-5"
    src="../images/avatar.svg" alt="" />
    <h1 className="text-white">start Framework</h1>
    <div className="star text-center text-white mb-2">
         <span>-------</span> <i class="fa-solid fa-star"></i> <span>---------</span>
    </div>
    <p  className="text-white">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</div>


</>
}
