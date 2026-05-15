const InlineCss = ()=>{
const subHeadingStyle = {
    backgroundColor :"green",
    color:"blue"
}
    return (
        <>
        <h1 style={{backgroundColor : "red", color:"white"}}>Learn Inline CSS in React. </h1>
        
         <h2 style={subHeadingStyle}>I am SubHeading </h2>
        </>
    )
}

export default InlineCss;