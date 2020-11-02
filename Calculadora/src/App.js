import React, { useState }  from 'react'
import{
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native'

import Display from './components/display'
import Button from './components/buttons'

export default function App(){

  const [displayValue, setDisplayValue] = useState(0)
  const [displayHistoricValue, setDisplayHistoricValue] = useState(0)
  const [pointerValue, setPointerValue] = useState(true)
  const [memory, setMemory] = useState('')
  const [operations, setOperations] = useState('')

  function clearMemory(){
    setDisplayValue(0)
    console.log('Função de limpar calculadora')
    setPointerValue(true)
  }
  function addNumber(e){

    if(e == '0' && displayValue == '0'){
      console.log('Adicionando o Numero primeiro IF: ' + e)
      setDisplayValue(e)
      setMemory(e)
      console.log('Display value: ' + displayValue)

    }else if(e != '0' && displayValue == 0){
        if(e == '.' && displayValue == 0 && pointerValue == true){
          setDisplayValue(displayValue + e)
          // Add na memória
          setMemory(displayValue)
          setPointerValue(false)
          console.log('Adicionando o Ponto aqui: ' + e)
          console.log('Display value: ' + displayValue)
        }
        else if(e != '.' && pointerValue == false) {
          setDisplayValue(displayValue + e)
          setMemory(displayValue)
        }else{
          setDisplayValue(e)
          setMemory(displayValue)
        }
    }
    else if(displayValue != 0 && pointerValue == false ) {
      if(e == '.') {
        setDisplayValue(displayValue)
        setMemory(displayValue)
      }else{
        console.log('Adicionando o Numero PENULTIMA CONDIÇÃO: ' + e)
        setDisplayValue(displayValue + e)
        setMemory(displayValue)
        console.log('Display value: ' + displayValue)
      }
    }
    else if(e == '.' && pointerValue == true){
      setDisplayValue(displayValue + e)
      setMemory(displayValue)
      setPointerValue(false)
      
    }
    else{
      setDisplayValue(displayValue + e)
      setMemory(displayValue)
      console.log('memoria: ' + memory)
    }

    
  }

  function operation(operation){
    if(operation == '+'){
      setMemory(displayValue)
      setDisplayValue(0)
      setOperations('+')
      console.log('Memoria' + memory)
    }
  }

  function calcular(){
    if(operations == '+'){
      setDisplayValue(parseFloat(memory) + parseFloat(displayValue))
      console.log('MEMÓRIA: ' + memory)
      console.log('RESULTADO: ' + displayValue)
    }
  }

  return(    
    <SafeAreaView style={styles.container}>  
    {/* // Area do display */}
      <View style={styles.displayArea}>
            <Display 
              value = {displayValue}
              // value='0'
            />              
      </View>
    
      {/* // Area dos botões */}
      <View style={styles.displayBtnArea}>
            <Button title='AC' triple onClick={clearMemory}/>
            <Button title='/' operationButton/>
            <Button title='7' onClick={ () => addNumber('7')}/> 
            <Button title='8' onClick={ () => addNumber('8')}/> 
            <Button title='9' onClick={ () => addNumber('9')}/> 
            <Button title='*' operationButton/>
            <Button title='4' onClick={ () => addNumber('4')}/>
            <Button title='5' onClick={ () => addNumber('5')}/>
            <Button title='6' onClick={ () => addNumber('6')}/>
            <Button title='-' operationButton/>
            <Button title='1' onClick={ () => addNumber('1')}/>
            <Button title='2' onClick={ () => addNumber('2')}/>
            <Button title='3' onClick={ () => addNumber('3')}/>
            <Button title='+' operationButton onClick={ () => operation('+')}/>
            <Button title='0' double onClick={ () => addNumber('0')}/>
            <Button title='.' onClick={ () => addNumber('.')}/>
            <Button title='=' operationButton onClick={calcular}/>
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',

  },

  displayArea: {
    backgroundColor: "#252525",
    height: Dimensions.get('window').width * 0.35,

    
  },
  displayBtnArea: {
    height: Dimensions.get('window').width * 0.7,
    flexWrap: "wrap",
    flexDirection: "row",
  }
})

