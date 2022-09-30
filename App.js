import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    if ((user == 'nabendu') && (password == '654321')) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }

  return (
    <View style={styles.container} accessibilityLabel="app-root">
      <Text style={styles.titleStyle}>RN Appium</Text>
      <View style={styles.inputContainer}>
        <TextInput name="username" accessibilityLabel="username" style={styles.input} onChangeText={text => setUser(text)} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput name="password" accessibilityLabel="password" secureTextEntry={true} style={styles.input} onChangeText={text => setPassword(text)} />
      </View>
      <Text accessibilityLabel="loginstatus">{isLoggedIn ? "Logged in Successfully" : "Incorrect username or password"}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.appButtonContainer} accessibilityLabel="login" onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40
  },
  inputContainer: {
    borderRadius: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    justifyContent: 'center',
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'darkmagenta',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold'
  }
});