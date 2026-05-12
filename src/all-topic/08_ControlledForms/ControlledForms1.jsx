const ControlledForms1 = () =>{

    return(
        <>
        <h1> Learn Controlled Fomrs</h1>

        <form>
            <label htmlFor="username">Username :</label>
            <input type="text" id='username' name='username' placeholder='Enter your username' />
             <br></br>
             <br></br>
            <label htmlFor="email">Email :</label>
            <input type="email" id='email' name='email' placeholder='Enter your email' />
             <br></br>
             <br></br>
            <label htmlFor="password">Password :</label>
            <input type="password" id='password' name='password' placeholder='Enter your password' />
             <br></br>
             <br></br>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default ControlledForms1;