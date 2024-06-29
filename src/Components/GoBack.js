import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BackIcon from "../Utils/Images/Icons/BackIcon";
import { pureblack, white } from "../Utils/Colors/Colors";
import { useNavigation } from "@react-navigation/native";
const GoBack=()=>{
    const navigation=useNavigation()
    return(
        <TouchableOpacity style={styles.Button} onPress={()=>navigation.goBack()}>
            <BackIcon/>
        </TouchableOpacity>
    )
}
export default GoBack
const styles=StyleSheet.create({
    Button:{
    }
})