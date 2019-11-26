import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import CommonStyle from '../commonStyles'
import AuthInput from '../components/AuthInput'
import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {
    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert("Success", "Create new Account!")
        }else{
            Alert.alert("Success", "Login!")
        }
    }

    render() {
        return(
            <ImageBackground source={backgroundImage}style={styles.background}>
                <Text style={styles.title}>TASK</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? "Create New Account" : "Sign In"}
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Name' style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}/>}
                    <AuthInput icon='at' placeholder='Email' style={styles.input}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}/>
                    <AuthInput icon='lock' secureTextEntry={true} placeholder='Password' style={styles.input}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}/>
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk' secureTextEntry={true} placeholder='Confirm Password' style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}/>}
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? "Register": "Login"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10}}
                    onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                        <Text style={styles.buttonText}>
                                {this.state.stageNew ? "Sign In" : "Sign Up"}
                        </Text>
                </TouchableOpacity>

            </ImageBackground>
        )
    }
}

 const styles = StyleSheet.create({
     background: {
         flex: 1,
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
     },

     title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
     },
     subtitle: {
         fontFamily: commonStyles.fontFamily,
         color: '#FFF',
         fontSize: 20,
     },
     formContainer: {
         backgroundColor: 'rgba(0,0,0,0.8)',
         padding: 20,
         width: '90%'
     },
     input: {
         marginTop: 10,
         backgroundColor: '#FFF',
     },
     button: {
         backgroundColor: '#080',
         marginTop: 10,
         padding: 10,
         alignItems: 'center',
     },
     buttonText: {
         fontFamily: commonStyles.fontFamily,
         color: '#FFF',
         fontSize: 20,
     }
 })