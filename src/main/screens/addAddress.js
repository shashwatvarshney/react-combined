import React, { Component } from 'react'
import {Image,View,Text,TextInput,StyleSheet,TouchbleOpacity,KeyboardAvoidingView,ScrollView } from 'react-native'
import styles from './../../resources/styles/Styles'
import CountryPicker from 'react-native-country-picker-modal'

// import { CountryDropdown} from 'react-country-region-selector'
export default class addAddress extends Component{
    render(){
        return(
            <ScrollView>
            <KeyboardAvoidingView style={styles.container}>
                <View style={{padding:20,paddingTop:0}}>
                    <View style={{alignItems:'center'}}>
                    <Image source={require('../../resources/images/home.png')}/>
                    </View>
                    <Text style={styles.text}>Building/ House NO</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput style={[styles.textInput,{width:'100%'}]}/>
                    <Text style={{color:'red',paddingTop:15}}>*</Text>
                    </View>
                    <Text style={styles.text}>Flat No</Text>
                    <TextInput style={styles.textInput}/>
                    <Text style={styles.text}>Road/Street Name</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput style={[styles.textInput,{width:'100%'}]}/>
                    <Text style={{color:'red',paddingTop:15}}>*</Text>
                    </View>
                    {/* <Text> </Text> */}
                    <View style={{flexDirection:'row',justifyContent:'center',paddingRight:10,}}>
                        <TextInput style={[styles.textInput,{width:"45%",marginHorizontal:10}]} placeholder="Area"/>
                        <Text style={{color:'red',paddingTop:15}}>*</Text>
                        <TextInput style={[styles.textInput,{width:'47%',marginHorizontal:6}]} placeholder="Block"/> 
                        <Text style={{color:'red',paddingTop:15}}>*</Text>
                    </View>
                    
                    <Text style={styles.text}>Country</Text>
                    <CountryPicker  visible={false} withFlag={false} withFilter={true} />
                    {/* <TextInput onAccessibilityAction={CountryPicker} style={styles.textInput}> */}
                    
                    {/* </TextInput> */}

                </View>
            </KeyboardAvoidingView>
            </ScrollView>
            
        )
    }
}
// const styles=StyleSheet.create({
    
// })
//bahrain, kuwait oman,qatar, saudi arabia, united arab  emirates