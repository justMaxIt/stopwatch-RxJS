import '../index.css';

function DisplayComponent(props) {
  return (<div>
 <span>{(props.time.h) >= 10? props.time.h : "0"+ props.time.h}</span>:
 <span>{(props.time.m) >= 10? props.time.h : "0"+ props.time.m}</span>:
 <span>{(props.time.s) >= 10? props.time.h : "0"+ props.time.s}</span>
    </div>
  );
}

export default DisplayComponent;
