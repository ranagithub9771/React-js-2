

function Child1(props) {

  return (
    <div>
        <h2>Child Components</h2>
        <p>{props.str}</p>
        <p>{props.obj.fname}</p>
        <p>{props.arr}</p>

        <hr />
    </div>
  )
}

export default Child1