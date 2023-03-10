import { Text, View,StyleSheet,Image } from 'react-native';
import React, { Component } from 'react';
import LogIn from './log_in.js';

export class SplashScreen extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }

    HideScreen = () => {
        this.setState({
            isVisible: false,
        });
    }

    componentDidMount() {
        var temp = this;
        setTimeout(function () {
            temp.HideScreen();
        }, 5000);
    }

    render() {
        let splashScreen = (
            <View style={styles.rootView}>
                <View style={styles.childView}>
                    <Image source={{uri: 'https://i.pinimg.com/originals/1c/13/f3/1c13f3fe7a6bba370007aea254e195e3.gif'}}
                    style={{width:'80%',height:'80%',resizeMode:'contain'}}/> 
                    <Text style={styles.loadingText}>
                    Loading...
                </Text>                  
                </View>
                
            </View>
        )

        return (
            <View style={styles.mainContainer}>
                <LogIn/>
                {
                    this.state.isVisible === true? splashScreen:null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        rootView: {
            width: '100 %',
            height: '100 %',
            margin: 10, flex: 1, justifyContent: 'center',
            position: 'absolute',
        },
        childView:{
        //    flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        mainContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            paddingTop: 0
        },
        loadingText: {
            textShadowColor: 'rgba(0, 0, 0, 0.4)',
            textShadowOffset: { width: -1, height: 2 }, 
            textAlign: 'center', 
            color: 'black', 
            fontSize: 20, 
            fontWeight: 'bold',
            textShadowRadius: 3,
            fontFamily:'monospace'
        }
    }
);

export default SplashScreen