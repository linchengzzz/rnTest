/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Student from './src/components/Studnet';

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }

    // 获取数据
    getData(): void {
        fetch('http://break.hqq.vip/hqqbreak/message/findNewspaperByType', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Basic YmFzaWNpczVpOmxFVUdkNEx0Rg=='
            },
            body: JSON.stringify({
                params: {
                    page: 1,
                    size: 5,
                    type: 'hqq'
                }
            })
        }).then(response => response.json()).then(data => {
            this.setState({
                data: data.data.content
            });
        });
    }

    componentDidMount(): void {
        this.getData();
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <Student {...item}/>}
                    keyExtractor={(item) => item.id.toString()}/>
            </View>
        );
    }
}
