import React from "react";
import { createAppContainer} from "react-navigation";
import RootStack from './navigation/RootStack';

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
