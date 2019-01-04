import {createStackNavigator} from "react-navigation";
import AppNavigator from './AppNavigator';

export default createStackNavigator(
    {
        Main: {
            screen: AppNavigator,
        }
    },
    {
        mode: 'card',
        headerMode: 'none',
    }
);
