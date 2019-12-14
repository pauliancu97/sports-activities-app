import React from 'react';
import {StyleSheet ,View, Text, Image} from 'react-native';

class ProfileIconComponent extends React.Component{
    render(){
        return (
            <View style={style.container}>
                <Text style={style.text}>
                    <Image source={this.props.profilePicture} style={style.image}/>
                    {this.props.profileName}
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#4CC9F0',
        borderRadius:50,
        width:'37%'
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        textDecorationStyle:'solid',
        textDecorationLine:'underline',
        padding:'1%'
    },
    image:{
        width:20,
        height:20,
        padding:10
    }
});

export default ProfileIconComponent;