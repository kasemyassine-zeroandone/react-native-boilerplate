import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch();
  const onLogin = (username: string, password: string) => dispatch(loginActions.requestLogin(username, password));
  const onForgot = () => NavigationService.navigate('ForgotPassword');


  const renderLoginFields = () => {
    return (
      <View style={styles.loginFieldsContainer}>
        <Text style={styles.loginFieldPlaceholder}>Username</Text>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={styles.loginField} />
        <Text style={styles.loginFieldPlaceholder}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.loginField} />
      </View>
    )
  }

  const renderLoginButtons = () => {
    return (
      <View style={styles.buttonsContainer}>
        <Button icon="login" mode="outlined" onPress={() => onLogin(username, password)}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <Text>Welcome guys</Text> */}
        <Text style={styles.login}>Login Status : {id}</Text>


        {renderLoginFields()}

        {renderLoginButtons()}
      </View>
    </View>
  );
};

export default Login;
