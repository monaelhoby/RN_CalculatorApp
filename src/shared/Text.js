import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomText = props => {

  const {bold, title} = props;

  const textStyle = [
      styles.text,
      bold && styles.bold
  ]

    return (
        <Text style={textStyle} {...props}>{title}</Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    text : {
        fontSize : 16,
        color : "#FFF"
    },
    bold : {
        fontWeight : 'bold',
        fontSize : 18
    }
})
