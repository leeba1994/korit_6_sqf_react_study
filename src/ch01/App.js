/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  JSX
    1. 태그를 열었으면 닫아야한다. <a></a>, <a />
    2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
    3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다.
*/
import "./App.css";
import { Fragment } from "react";
import Hello from "./components/Hello"; 
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";

function App() {
  const name = "김준일";
  const num = 1;
  const fontColorRed = {
    color: "red"
  }
  // console.log();
const age = <h2>{31}</h2>

  
  return  <>
      <div>
          <Hello />
      </div>
     {/*<div>
          <Hello></Hello>
      </div>*/}
      <h1 style={{color: "red"}}>{name + num}</h1>   
      <h1 style={fontColorRed} className={"fs-20 itelic"}>{name + num}</h1>
        <CustomInput ph={"이름"} disable={true} value={"김준일"}/>
        <CustomInput ph={"나이"} disable={false} />
        <CustomInput ph={"연락처"} disable={true} />
        <Box name={"김준일"} isShow={false} >
           <h2>{31}</h2>
           <h2>{31}</h2>
           <h2>{31}</h2>
        </Box>
  </>

}

export default App;
