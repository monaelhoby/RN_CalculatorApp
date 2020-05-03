import {BUTTON_PRESSED, OPERATOR} from '../actions/index'


const initState = {
  resultVal : '',
  calcVal : ''
}

const Reducer = ( state = initState , action) => {

// claculate result
 const CalculateResult = () => {
     let text = state.resultVal;
       return {
               calcVal : eval(text),
               resultVal: eval(text)
            }
     }

  //validate operators
   const Validate = () => {
     const text = state.resultVal;
     switch(text.slice(-1)){
       case '+' :
       case '-' :
       case '*' :
       case '/' :
        return false
     }
     return true
   }


  switch(action.type){
    case BUTTON_PRESSED :
      if( action.value == "="){
        return Validate() && CalculateResult()
      }
       return {resultVal: state.resultVal+action.value};
      
    case OPERATOR :
        // claculte result after pressed operator
    switch(action.value){
      case 'C' :
      let text = state.resultVal
      if(text === state.calcVal){
        return {resultVal: ''}
      }else{
      text = text.split('')
      text.pop()
        return {resultVal: text.join('')}
      }
         break
      case "+" :
      case "-" :
      case "*" :
      case "/" :
        return {resultVal: state.resultVal + action.value }
    }
  }
  return state
}


export default Reducer ;
