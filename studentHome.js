import * as React from 'react';
import {ScrollView, Text} from "react-native"

function studentHome() {
    return (
      <ScrollView  style={{ backgroundColor: '#EAE0D8'}} /*style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}*/>
            <Text>Our platform is made for students by students.</Text>
            <Text> We help you get in touch with tutors that make sure to provide you with the best support.</Text>
      </ScrollView>
      //add button leading to redirector to registering or logging in
    );
  }

export default studentHome;