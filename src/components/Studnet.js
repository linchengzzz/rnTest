import {Image, StyleSheet, Text, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import React from "react";

const styles = StyleSheet.create({
    artItem: {
        width: '100%',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    header: {
        width: '100%',
        padding: 25,
        color: '#333',
        fontSize: 20
    },
    cover: {
        marginLeft: 25,
        marginRight: 25,
        height: 166,
        borderRadius: 15,
        overflow: 'hidden'
    },
    img: {
        width: '103%',
        height: '103%'
    },
    footer: {
        paddingLeft: 25,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row'
    }
});

export default class Student extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.artItem}>
                <Text style={styles.header}>{this.props.title}</Text>
                <View style={styles.cover}>
                    <Image style={styles.img} resizeMode={'cover'} source={{uri: this.props.cover}}/>
                </View>
                <View style={styles.footer}>
                    <Text>{this.props.author}</Text>
                    <FontAwesome name={'home'} size={30} color={'green'}/>
                    <Text>  阅读量: {this.props.reading}</Text>
                </View>
            </View>
        )
    }
}
