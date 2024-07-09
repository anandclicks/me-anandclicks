import React from 'react'
import SkillsList from './Skills'
function PageOne() {
  const pfdFile = {
    fileName: "MyResume.pdf",
    fileUrl: "../public/MyResume.pdf"
  }
  return (
    // decorated balls 
    <div className='page1 h110 w-full flex justify-center items-center bgMain'>
      <div className='blurBox '></div>
      <div className="boxText z-40 relative flex flex-col items-center justify-center gap-3">
        <h1 className='fw-bold'>Full-Stack Devloper</h1>
        <p className='text-center fs-5'>I am <span className='spanU fw-bold'>Pusp   Anand</span> a Full-stack Developer leveraging my coding skills and design sense to build efficient, <br /> scalable websites and immersive digital experiences</p>
        <div className="list-none">
        <SkillsList/>
     </div>
        <div className='flex gap-3 flex-wrap'>
        <a download={pfdFile.fileName} href={pfdFile.fileUrl} className="btn grediant text-white px-5 border-none justify-center">Download CV<i class="fa-solid fa-download ms-2"></i></a>
        <div className="btn text-white px-5 border-white flex justify-center">View Projects <i class="fa-solid fa-diagram-project ms-2"></i></div>
        </div>
      </div>
    </div>
  )
}

export default PageOne