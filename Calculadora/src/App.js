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

  function clearMemory(){
    setDisplayValue(0)
    console.log('Função de limpar calculadora')
  }
  function addNumber(e){

    if(displayValue == '0'){
      setDisplayValue(e)
      console.log('CLiquei no ZERO 0')
    }else if(displayValue == '.'){
      setDisplayValue(0  + '.' )
      console.log('CLiquei no PONTO .')
    }else{
      setDisplayValue(displayValue + e)
      console.log('CLiquei EM NÚMEROS')
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
            <Button title='+' operationButton/>
            <Button title='0' double onClick={ () => addNumber('0')}/>
            <Button title='.' onClick={ () => addNumber('.')}/>
            <Button title='=' operationButton/>
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

