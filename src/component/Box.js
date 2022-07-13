import React from 'react'

const Box = (props) => {
  let result;
  if(
    props.title ==="Computer" &&    //===연산자는 값과 값의 종류(Data Type)가 모두 같은지를 비교해서, 같으면 true, 다르면 false라고 한다. 
    props.result !== "tie" &&
    props.result !==""
  ){
    result = props.result ==="win"?"lose":"win"
  }else{
    result = props.result;
  }
  if(props.title === "Computer"){
    console.log("computer",result);
  }

  //여기를 전혀 이해를 못하겠네..


  return (
    <div className='box ${result}'>
        <h1>{props.title}</h1>
        <h2 data-testid="item-name">{props.item && props.item.name}</h2>
        <img className="item-img" src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box