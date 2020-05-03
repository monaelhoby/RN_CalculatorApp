import React from 'react'
import { StyleSheet, View } from 'react-native'
import NumButtons from '../components/numberBtn'
import OperatorButtons from '../components/operatorBtn'
import Button from '../shared/Button'
import Text from '../shared/Text'
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions'
import Colors from '../constants/colors'

const index = () => {

    const dispatch = useDispatch();

    const Result = useSelector(state => state.resultVal)
    
    const CalculationValue = useSelector(state => state.calcVal)

    return (
        <View style={styles.container}>
            <View style={styles.resultScreen}>
                <Text title={Result} />
                <Text bold title={CalculationValue} style={styles.result}/>
            </View>
            <View style={styles.specialBtn}>
                <View  style={styles.btn1}>
                    <Button numberBtn
                        onPress={() => dispatch(Actions.buttonPressed(0))}>
                        <Text title="0"/>
                    </Button>
                </View>
                <View  style={styles.btn1}>
                    <Button numberBtn
                        onPress={() => dispatch(Actions.buttonPressed("."))}>
                        <Text title="."/>
                    </Button>
                </View>
                <View  style={styles.btn2}>
                    <Button operatorBtn
                        onPress={() => dispatch(Actions.operate("C"))}>
                        <Text title="C"/>
                    </Button>
                </View>
            </View>
            <View style={styles.numOperators}>
                <NumButtons />
                <OperatorButtons />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      backgroundColor : Colors.primaryColor,
      marginVertical : 40
    },
    specialBtn : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginRight : "10%"
    },
    btn1 : {
        marginHorizontal : "3%",
        width : "20%",
    },
    btn2 : {
        width : "55%",
    },
    numOperators :{
        flexDirection :'row',
        justifyContent : 'space-between'
    },
    resultScreen : {
        paddingHorizontal : 10,
        paddingVertical : 40,
        marginHorizontal : 10,
        backgroundColor:"#bccd95",
        borderWidth:1,
        borderColor : '#EEE',
        borderStyle : 'solid',
        marginVertical : 40
    },
    result : {
        marginVertical : 15,
    }
})
