import {createStackNavigator} from "react-navigation";
import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        mode: 'card'
    },
    Details: {
        screen: DetailsScreen,
        mode: 'card'
    }
});
