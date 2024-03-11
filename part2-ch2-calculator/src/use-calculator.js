import { useState } from "react";

export const useCalculator = () => {
    const [input, setInput] = useState(0);
    const [currentOperator, setCurrentOperator] = useState(null);
    const [result, setResult] = useState(null);
    const [tempInput, setTempInput] = useState(null);
    const [tempOperator, setTempOperator] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedEqual, setIsClickedEqual] = useState(false);

//boolean 값 변환
    const hasInput = !!input;

    const onPressNum = (num) =>{
        if(currentOperator && isClicked ){
            setResult(input);
            setInput(num);
            setIsClicked(false);
        }else{
            const newInput = Number(`${input}${num}`);
            setInput(newInput);
            
        }
    }
    
    const onPressOperator = (operator) => { 
        if(operator !== "="){
            setCurrentOperator(operator);
            setIsClicked(true);
            setIsClickedEqual(false);
        }else{
            let finalResult = result;
            const finalInput = isClickedEqual ? tempInput : input;
            const finalOperator =isClickedEqual ? tempOperator : currentOperator;
            switch(finalOperator){
                case '+':
                    finalResult = result + finalInput;
                    break;
                case '-':
                    finalResult = result - finalInput;
                    break;
                case '/':
                    finalResult = result / finalInput;
                    break;
                case '*':
                    finalResult = result * finalInput;
                    break;
            
                default:
                    break;
            }
            setResult(finalResult);
            setInput(finalResult);
            setTempInput(finalInput);
            setCurrentOperator(null);
            setTempOperator(finalOperator);
            setIsClickedEqual(true);
        }
    }

    const onPressReset = ()=>{
        if(hasInput()){
            setInput(0);    
        }else{
            setInput(0);
            setCurrentOperator(null);
            setResult(null);
            setTempInput(null);
            setTempOperator(null);  
        }
        
    }

    return {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset,
    
    };
}