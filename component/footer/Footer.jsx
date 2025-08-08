import React from 'react'

export default function Footer() {
  return (
    <div >
      <div className=" nav text-white position-sticky  p-3 text-center mb-0 d-flex justify-content-evenly">
        <div className="first row  ">
          <h1>Location</h1>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="second p-3">
          <h1>AROUND THE WEB</h1>
          <i class="fa-brands fa-facebook px-4 fs-3"></i>
          <i class="fa-brands fa-instagram  px-4 fs-3"></i>
          <i class="fa-brands fa-twitter  px-4 fs-3"></i>
         <i class="fa-brands fa-github  px-4 fs-3"></i>
        </div>
         <div className="third ">
        <h1>ABOUT FREELANCER</h1>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
      <div className="end ">
          <p>Copyright © Your Website 2021</p>

        </div>
      </div>
     
    </div>
  )
}
