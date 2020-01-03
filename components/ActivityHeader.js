import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import ProfileIconComponent from './ProfileIconComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps'

class ActivityHeader extends React.Component{
    render(){
        return (
            <View>
                <View style={style.div}>
                    <Image source={this.props.activityPicture} style={style.image}/>
                    <Text style={style.text}>{this.props.activityTitle}</Text>
                </View>
                <View style={{flex:2}}>
                    <View style={style.organiserContainer}> 
                        <Text style={style.organiserText}>
                            Organiser:
                        </Text>
                        <ProfileIconComponent profilePicture={this.props.profilePicture} profileName={this.props.profileName}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#FFBE0B', borderRadius:5, width:'30%', marginLeft:'1%'}}>
                        <Text style={{fontSize:18, fontWeight:'bold', paddingRight:'2%'}}>
                            Description
                        </Text>
                        <Icon name="chevron-right"/>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', width:'55%', marginLeft:'1%', marginTop:'1%'}}>
                        <Text style={{fontSize:18, backgroundColor:'#FFBE0B', borderRadius:5, fontWeight:'bold', paddingRight:'3%'}}>Meet up at:</Text>
                        <Text style={{marginLeft:'5%', backgroundColor:'#4CC9F0', borderRadius: 50, fontWeight:'bold', fontSize:18}}>{this.props.activityDate}</Text>
                    </View>
                    <View style={{borderRadius:5, marginLeft:'1%', marginTop:'1%'}}>
                        <Text style={{backgroundColor:'#FFBE0B', fontSize:18, fontWeight:'bold', borderRadius: 5, width:'25%'}}>Location:</Text>
                        <MapView region={{latitude: 46.735349, longitude: 23.565160, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} style={{width:'95%', height:'100%',
                            marginLeft:'1%', marginRight:'1%', marginTop:'2%'}}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', width:'26%', marginLeft:'1%', marginTop:'10%'}}>
                        <Text style={{fontSize:18, fontWeight:'bold', paddingRight:'3%', backgroundColor:'#FFBE0B', borderRadius:5}}>Level:</Text>
                        <Text style={{marginLeft:'5%', backgroundColor:'#4CC9F0', borderRadius: 50, fontWeight:'bold', fontSize:14}}>{this.props.activityLevel}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', width:'35%', marginLeft:'1%', marginTop:'5%'}}>
                        <Text style={{fontSize:18, fontWeight:'bold', paddingRight:'2%', backgroundColor:'#FFBE0B', borderRadius:5}}>
                            {`Attendees(${this.props.numOfAttendees}) `}
                            <Icon name="chevron-right"/>
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', width:'35%', marginLeft:'1%', marginTop:'3%'}}>
                        <Text style={{fontSize:18, fontWeight:'bold', paddingRight:'2%', backgroundColor:'#FFBE0B', borderRadius:5}}>
                            {`Equipment(${this.props.numOfEquipment}) `}
                            <Icon name="chevron-right"/>
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:'25%', justifyContent:'space-between', marginLeft:'1%', marginRight:'1%'}}>
                        <Text style={{backgroundColor:'#7209B7', borderRadius:50, height:'30%', padding:'0.5%'}}>Going!</Text>
                        <Text style={{backgroundColor:'#7209B7', borderRadius:50, height:'30%', padding:'0.5%'}}>Interested</Text>
                        <Text style={{backgroundColor:'#7209B7', borderRadius:50, height:'30%', padding:'0.5%'}}>Invite</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    div:{
        width:'100%',
        height:'40%'
    },
    text:{
        position: 'absolute',
        textAlign: 'right',
        color:'#FFFFFF',
        fontWeight: 'bold',
        right:0,
        bottom: 0,
        fontSize: 18
    },
    image:{
        flex:1
    },
    organiserContainer:{
        padding:'1%',
        flexDirection:'row',
        alignItems:'center'
    },
    organiserText:{
        fontWeight:'bold',
        fontSize:18,
        marginRight:'2%',
        backgroundColor:'#FFBE0B',
        borderRadius:5
    }
});

export default ActivityHeader;