import NestedChild from "./Nested_Child";
const Child = (props)=>{
console.log(props);

    return <>
    <h1>Child</h1>
    <NestedChild props={props}/>
    </>
}

export default Child;