import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenNames from '../../screens/ScreenNames';
import NotesScreen from '../../screens/NotesScreen/NotesScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import FavScreen from '../../screens/FavScreen/FavScreen';
// import StackNames from '../StackNames';
// import SharedStack from '../Stacks/SharedStack';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={ScreenNames.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={ScreenNames.FavScreen}
        component={FavScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={ScreenNames.NotesScreen}
        component={NotesScreen}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text" size={24} color={color} />
          ),
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={ScreenNames.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabs;
