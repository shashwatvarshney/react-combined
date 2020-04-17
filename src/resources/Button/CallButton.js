import React from 'react'
import { TouchableOpacity,Text,View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


class CallButton extends React.Component{
    constructor(props){
        super(props)
    }
    handlePressed(){
        this.props.navigation.navigate("detalis")
    }
    render(){
        return(
            <TouchableOpacity onPress={this.handlePressed}>
                <View style={{backgroundColor:"blue"}}>
                    <Icon
                        name={this.props.icon_name}
                        color={ this.props.color }
                        size={ 35 }
                        backgroundColor="transparent" />
                </View>
                {/* <Text>Submit</Text> */}
            </TouchableOpacity>
        )
    }
}

export default CallButton;