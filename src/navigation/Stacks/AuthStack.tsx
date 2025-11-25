import {createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import ScreenNames from "../../screens/ScreenNames";
import SignUpScreen from "../../screens/SignUpScreen/SignUpScreen";

const Stack=createNativeStackNavigator();
const AuthStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
            <Stack.Screen name={ScreenNames.SignUpScreen} component={SignUpScreen} />
        </Stack.Navigator>
    );

};
export default AuthStack;