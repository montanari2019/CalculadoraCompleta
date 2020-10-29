import React from 'react'
import{
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native'


export default function (props) {

    const estiloButton = [styles.btn]

    if(props.double){
        estiloButton.push(styles.buttonDouble)

    }else if(props.triple){
       estiloButton.push(styles.buttonTriple)

    }else if(props.operationButton){
        estiloButton.push(styles.operationButton)
    }

    return (
        <View>
            <TouchableOpacity>
                <Text style={estiloButton}>
                    {props.title}
               </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        fontSize:40,
        color: '#252525',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 0.5,
        borderColor: '#252525',
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
    },

    operationButton: {
        color: '#f2f2f2',
        backgroundColor: "#fa8231"
    },
    buttonDouble:{
        width: Dimensions.get('window').width / 4 * 2,
    },
    buttonTriple:{
        width: Dimensions.get('window').width / 4 * 3,
    }

})