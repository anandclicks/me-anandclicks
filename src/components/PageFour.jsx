import React from 'react'
import { useState } from 'react'

function PageFour() {
 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [Query, setQuery] = useState("")
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }
  
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  }
  
  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  }
  
  const hadleQueryChange = (evt)=> {
    setQuery(evt.target.value)
  }
  return (
    <>
     <div class="container-flued text-white bgMain pageFour h70">
        <div class="contianer h-full">
            <div class="container d-flex h-100 justify-content-center align-items-center">
                  <div class="col-md-4 col-12">
                    <div class="form-container">  
                      <form action="/createdUser" method="post" enctype="multipart/form-data">
                        <div class="form-group">
                          <label class="mb-2" for="Yout full name">Yout full name</label>
                          <input onChange={handleNameChange} type="text" class="form-control mb-3 bg-transparent text-white py-3" name="Yout full name" value={name}/>
                        </div>
                        <div class="form-group">
                          <label class="mb-2" for="email">Email address</label>
                          <input onChange={handleEmailChange} type="email" class="form-control mb-3 bg-transparent text-white py-3" name="email"  value={email}/>
                        </div>
                        <div class="form-group">
                          <label class="mb-2" for="Number">Number</label>
                          <input onChange={handleNumberChange} type="number" class="form-control mb-3 bg-transparent text-white py-3" name="Number" value={number} />
                        </div>
                        <div class="form-group">
                          <label class="mb-2" for="Number">Your quote</label>
                          <textarea onChange={hadleQueryChange} name="" className='form-control mb-3 bg-transparent text-white py-3' id="" value={Query}></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary flex justify-center w-100 py-3 mt-3 mb-3 grediant border-none text-white ">Submit</button>
                      </form>
                    </div>
        </div>
            </div>
        </div>
        
</div></>
  )
}

export default PageFour