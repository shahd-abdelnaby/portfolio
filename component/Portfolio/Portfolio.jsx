import React from "react";

export default function Portfolio() {
  return (
    <>
       <h1 className='contact  text-center mt-3 fs-1'>portfolio section</h1>
        <div className="star text-center text-dark mb-2 fs-5">
         <span>________________</span> <i class="fa-solid fa-star"></i> <span>_______________</span>
        </div>
      <div
        className="container mb-3 "
      >
        <div className="  ">
          <img
            className="rounded-2 image"
            src="../images/imgi_1_poert1.png"
            alt=""
          />
          <img
            className="rounded-2 image"
            src="../images/imgi_2_port2.png"
            alt=""
          />
          <img
            className="rounded-2 image"
            src="../images/imgi_3_port3.png"
            alt=""
          />
          <img
            className="rounded-2 image"
            src="../images/imgi_1_poert1.png"
            alt=""
          />
          <img
            className="rounded-2 image"
            src="../images/imgi_2_port2.png"
            alt=""
          />
          <img
            className="rounded-2 image"
            src="../images/imgi_3_port3.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
