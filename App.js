import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActivityHeader from './components/ActivityHeader';
import ProfileIconComponent from './components/ProfileIconComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityHeader activityTitle={'Afternoon ride in Faget'} activityPicture={require('./assets/forest.jpg')}
      profileName='Andrei David' profilePicture={require('./assets/circle-cropped.png')} activityDate='09/05/20 14:00 PM'
      activityLevel="Intermediate" numOfAttendees={5} numOfEquipment={4}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
