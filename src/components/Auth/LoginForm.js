import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React, {useState} from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';
import {user, userDetails} from '../../utils/userDB'
import useAuth from '../../Hooks/UseAuth'

export default function LoginForm() {
  const [error, setError] = useState('');
  const { login } = useAuth();

  const valSchema = yup.object().shape({
    username: yup.string().required('Username missing'),
    password: yup.string().required('Password missing'),
  })

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: valSchema,
    validateOnChange: false,
    onSubmit: (formValue) => {
      const {username, password} = formValue;

      if(username != user.username || password != user.password){
        setError('User or Password incorrect')
      } else {
        login(userDetails)
      }
    }
  })

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput 
      placeholder='User'
      style={styles.input}
      autoCapitalize='none'
      value={formik.values.username}
      onChangeText={(text) => formik.setFieldValue('username', text)}
      />

      <TextInput 
      placeholder='Password'
      style={styles.input}
      autoCapitalize='none'
      secureTextEntry={true}
      value={formik.values.password}
      onChangeText={(text) => formik.setFieldValue('password', text)}
      />

      <Button title='Login' onPress={formik.handleSubmit}/>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues () {
  return {
    username: '',
    password: ''
  };
};

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }
})