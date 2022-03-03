import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import studentHome from "./home/studentHome";
import tutorLogin from "./home/tutorLogin";
import adminLogin from "./home/adminLogin";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Student" component={studentHome}  />
        <Tab.Screen name="Tutor" component={tutorLogin} />
        <Tab.Screen name="Admin" component={adminLogin} />
      </Tab.Navigator>
      </NavigationContainer>
    
  );
}
