import React from 'react'
import{

    View,
    StyleSheet,
    Dimensions,
    Text

} from 'react-native'


export default function (props) {

    return (
        <View style={styles.displayArea}>
            <Text style={styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>

            <Text style={styles.displayHistoricValue} numberOfLines={1}>
                {props.historic}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    displayArea: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    
    },
    displayValue: {
        paddingRight: 10,
        fontSize: 70,
        color: '#f2f2f2',
        backgroundColor: "#252525"
    },

    displayHistoricValue: {
        // paddingLeft: 20,
        fontSize: 30,
        color: '#f2f2f2',
        backgroundColor: "#252525"
    },
    displayHistoricoArea: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    
    },
})