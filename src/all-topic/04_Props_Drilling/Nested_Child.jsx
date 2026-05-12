const NestedChild =({props}) =>{
    // console.log(props);
    let {str,arr,obj,greet} = props;
    
    return <>
    <h1>NestedChild</h1>
    <button onClick={greet}>click</button>
    </>
}

export default NestedChild;