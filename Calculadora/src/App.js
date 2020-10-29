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
            <Button title='AC' triple/>
            <Button title='/' operationButton/>
            <Button title='7'/> 
            <Button title='8'/> 
            <Button title='9'/> 
            <Button title='*' operationButton/>
            <Button title='4'/>
            <Button title='5'/>
            <Button title='6'/>
            <Button title='-' operationButton/>
            <Button title='1'/>
            <Button title='2'/>
            <Button title='3'/>
            <Button title='+' operationButton/>
            <Button title='0' double/>
            <Button title='.'/>
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

