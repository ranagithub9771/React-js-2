import React, { useRef } from 'react'

export default function UncontrolledFormPra() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
  return (<>  
    <h1>UncontrolledFormPra</h1>
    <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" ref={emailRef} />
        <br />
        <input type="password" name="password"  ref={passwordRef}/>
        <br />
        <button>Submit</button>
    </form>
</>

  )
}
