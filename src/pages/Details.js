import React from "react";
import {Button, Text, View} from "react-native";

export default class DetailsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen {name}</Text>
                <Button
                    title="Go to Details.t.. again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
