import React from 'react'

export default function contact() {
  return (
    <div>
      <h1 className='contact text-center  fs-1'>conatct section</h1>
        <div className="star text-center text-dark mb-2 fs-5">
         <span>________________</span> <i class="fa-solid fa-star"></i> <span>_______________</span>
          <div className='d-flex justify-content-center'>

            <form className='mx-5 mt-3 row w-50  g-3 '>
              
          <input className='rounded-2 p-2' type="text" name="name" id="name" placeholder='your name'/>

          <input className='rounded-2 p-2' type="email" name="name" id="email" placeholder='your email'/>

          <input className='rounded-2 p-2' type="number" name="name" id="name" placeholder='your number'/>

          <input className='rounded-2 p-2' type="password" name="name" id="name" placeholder='your password'/>
          
          <button className='btn btn-success   text-center'>submit</button>

        </form>
       
       </div>
        </div>
      
       

    </div>
  )
}
