import { useState } from 'react';
import './App.css';
import Box from "./component/Box"


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위바위보 버튼 있당
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4번의 결과를 가지고 누가 이겼는지 결과를 보여준다
// 6. 승패 결과의 따라 테두리 색이 바뀐다. Win초록 Lose빨강 Vie검정

const choice ={
  rock:{
    name:"Rock",
    img:"https://dimg.donga.com/wps/NEWS/IMAGE/2021/03/12/105842341.1.jpg"
  },
  scissors:{
    name:"Scissor",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6a_s6F62zXqpuZlKRKn8H4YEEHscATBLrg&usqp=CAU"
  },
  paper:{
    name:"Paper",
    img:"https://www.ikea.com/kr/en/images/products/mala-drawing-paper-roll__0710263_pe727430_s5.jpg"
  },
}
function App() {

const [userSelect,setUserSelect] = useState(null)
const [computerSelcet,setComputerSelcet] = useState(null)
const [ result,setResult] = useState("")
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelcet(computerChoice);

    setResult(judgement(choice[userChoice],computerChoice));

  };

const judgement = (user,computer)=>{
  console.log("user",user,"computer", computer)

  //1. 주먹은 가위를 이기고 보한테 진다
  //2. 가위는 보를 이기고 주먹한테 진다
  //3. 보는 주먹을 이기고 가위한테 진다
  //4. 같이내는 경우는 비기는 경우이다

  // user == computer tie
  // user == rock, computer == "scissors" user win
  // user == "rock" computer == "paper" user lose
  // user == scissors computer == paper user win
  // user == scissors computer rock user lose
  // user == paper computer rick user win
  //user paper computer scissors user lose

  if(user.name == computer.name){
    return "tie"
  }else if (user.name == "Rock") 
  return computer.name =="Scissor"?"win":"lose"
  else if (user.name=="Scissor")
  return computer.name =="Paper"?"win":"lose"
  else if (user.name=="Paper")
  return computer.name=="Rock"?"win":"lose"

// "Scissor"?"win":"lose" // Scissor가 참이면 win 거짓이면 lose를 출력
}

const randomChoice=()=>{
  let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 어레이로 만들어주는 함수이다
  console.log(itemArray)
  let randomItem = Math.floor(Math.random()*itemArray.length); 
  //Math.floor 숫자를 반올림 해주는 함수
  //Math.random()*itemArray.length // itemArray의 길이만큼 랜덤을 돌린다.
  let final = itemArray[randomItem]
  return choice[final];
}

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelcet} result={result}/>
      </div>
        <div className='main'>
          <button onClick={()=>play("scissors")}>가위</button>
          <button onClick={()=>play("rock")}>바위</button>
          <button onClick={()=>play("paper")}>보</button>
        </div>
    </div>
    
  );
}

export default App;
