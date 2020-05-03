import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../shared/Button'
import Text from '../shared/Text'
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions'


const operatorBtn = () => {
    let list=["+", "-", "*", "/"];
    const dispatch = useDispatch();
    return (
     <View style={styles.container}>
        {
            list.map(operator => {
                return (
                    <Button operatorBtn onPress={() => dispatch(Actions.operate(operator))}>
                        <Text title={operator}/>
                    </Button>
                )
            })
        }
     </View>
    )
}

export default operatorBtn

const styles = StyleSheet.create({
    container : {
        // flexDirection :'row'
        width:"25%",
        paddingHorizontal:10
    }
})

