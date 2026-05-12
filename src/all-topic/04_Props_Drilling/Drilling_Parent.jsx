import Child from "./Child";
const Drilling_Parent = () =>{
  
    let str = "hello world";
    let arr = [10, 20, 30, 40];
    let obj ={username:"Jonny"};
    let greet = () => console.log("Welcome ");
    

    return <>
    <h1>Drilling Parent </h1>

    <Child str={str} arr={arr} obj={obj} greet={greet}/>

    </>
}

export default Drilling_Parent;