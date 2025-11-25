import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNames from '../StackNames';
import MainTabs from '../Tabs/mainTabs';
import SharedStack from './SharedStack';
import AuthStack from './AuthStack';

const stack = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name={StackNames.AuthStack} component={AuthStack} />
      <stack.Screen name={StackNames.MainTabs} component={MainTabs} />
      <stack.Screen name={StackNames.SharedStack} component={SharedStack} />
    </stack.Navigator>
  );
};
export default MainStack;

export type MainStackParamList = {
   [StackNames.AuthStack]: undefined;
  [StackNames.MainTabs]: undefined;
};
