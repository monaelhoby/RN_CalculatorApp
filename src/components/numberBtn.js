import React from 'react';
import { StyleSheet, View} from 'react-native'
import Button from '../shared/Button'
import Text from '../shared/Text'
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions'


const Buttons = () => {
    
    const dispatch = useDispatch();
    let nums=[1,2,3,4,5,6,7,8,9];
   return (
       <View style={styles.container}>
            {
                nums.map(num => {
                 return (
                 <View style={styles.btn}>
                    <Button numberBtn
                    onPress={() => dispatch(Actions.buttonPressed(num))}>
                    <Text title={num}/>
                    </Button>
                  </View>
                 )

                })
            }
            <View style={styles.equalbtn}>
                <Button equalBtn
                    onPress={() => dispatch(Actions.buttonPressed("="))}>
                    <Text title="=" bold/>
                </Button>
            </View>
       </View>
   )
}

export default Buttons

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        color : "white",
        width: "75%"
    },
    btn:{
        width : "25%",
        marginHorizontal : "3%"
    },
    equalbtn : {
        width : "88%",
        marginHorizontal : "3%"
    }
})
