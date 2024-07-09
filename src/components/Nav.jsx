import React from 'react'

function Nav() {
  return (
   <div className="container-flued fixed wFull z-50 py-3 bg-transparent">
     <div className='container w-full min-h-10 flex justify-between py-1 py-lg-3 navMain px-2 px-lg-5'>
      <div className="col-12 flex justify-center align-middle">
        <div className="div flex flex-col justify-center ">
        <h1 className='fs-3 m-0 logo'><img src="src\assets\logo\logo.png" alt="" /></h1>
    
        </div>
        </div>
      {/* <div className="col-6 flex justify-end gap-3 align-middle">
        <div className="btns flex justify-end gap-3 d-lg-flex d-none">
        <div className="btn text-white py-2 px-5 gradient-border border-white">Get more</div>
        <div className="btn text-white grediant border-none py-2 px-5">Contact me</div>
        </div>
        </div> */}
    </div>
   </div>
  )
}

export default Nav