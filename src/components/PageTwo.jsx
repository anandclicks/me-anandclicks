import React from 'react'

function PageTwo() {
  return (
    <>
    <div className='page2 h80 w-full bgMain relative py-3 overflow-hidden'>
      {/* blur box  */}
    <div className="blurBox2"></div>
    {/* content  */}
    <div className="container z-40 relative">
     <div className="row">
     <div className="col-lg-6 col-12 flex content-center justify-center">
      <div className="imgBox grediant flex justify-center items-center">
        <img src="src\assets\logo\me2.jpg" alt="" />
      </div>
     </div>
     <div className="col-lg-6 col-12">
      <h1 className='fs-1'>Anand - Passionate Full-Stack Web Developer from New Delhi</h1>
      <p className='mt-3 fs-5'>I'm <span className='spanU fw-bold'>Pusp Anand</span>, a passionate full-stack web developer based in New Delhi. With a robust skill set spanning HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript, I specialize in crafting elegant and responsive frontend interfaces. My journey in web development is driven by curiosity and a commitment to delivering seamless user experiences.</p>
      <p className='mt-3 fs-5'>On the backend, I excel in technologies like Node.js, Express.js, and MongoDB, ensuring scalable and efficient server-side applications. I stay updated with industry trends to implement cutting-edge solutions. Beyond coding, I enjoy exploring new technologies and methodologies to elevate my projects. Let's collaborate and build something remarkable together!</p>
     </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default PageTwo