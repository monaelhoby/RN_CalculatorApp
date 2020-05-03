import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

const numButton = props => {

const {numberBtn, operatorBtn, equalBtn,style,children} = props;

const btnStye = [
    styles.numBtn,
    numberBtn && styles.numberBtn,
    operatorBtn && styles.operatorBtn,
    equalBtn && styles.equalBtn,
    style
]

    return (
        <TouchableOpacity activeOpacity={.8} style={btnStye} {...props}>
            {children}
        </TouchableOpacity>
    )
}

export default numButton

const styles = StyleSheet.create({
    numBtn : {
        paddingVertical : 15,
        paddingHorizontal : 15,
        marginVertical : 7,
        color:"white",
        fontWeight:'bold',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
        elevation: 5,
        alignItems : "center"
   },
   numberBtn:{
        backgroundColor : Colors.secondColor,
   },
   operatorBtn : {
        backgroundColor : Colors.accentColor,
   },
   equalBtn : {
        backgroundColor : Colors.defaultColor,
   }
})
