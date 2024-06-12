import { View, Pressable, TextInput, StyleSheet } from 'react-native';
import Text from './Text'

import { useFormik } from 'formik';
import * as yup from 'yup';

import themes from '../utils/themes'
import config from '../utils/config'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 15,
    rowGap: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    fontSize: 18,
    height: 50,
    backgroundColor: themes.backgroundColor.input,
    width: config.deviceWidth * 0.93,
    paddingLeft: 10,
    borderWidth: 1.0,
    borderColor: themes.backgroundColor.appBar,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#0165D4',
    width: config.deviceWidth * 0.93,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btText: {
    color: themes.textColor.secondary,
    fontSize: 18,
    fontWeight: 'bold'
  },
  errorText: {
    alignSelf: 'flex-start',
    color: '#d73a4a',
    paddingLeft: 15,
    fontSize: 16,
    marginTop: -10
  }
})

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    username: '',
    password: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.inputBox, formik.touched.username && formik.errors.username ? { borderColor: '#d73a4a' } : {}]}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        )}
        <TextInput
          style={[styles.inputBox, formik.touched.password && formik.errors.password ? { borderColor: '#d73a4a' } : {}]}
          secureTextEntry
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
        <Pressable onPress={formik.handleSubmit} style={styles.submitButton}>
          <Text style={styles.btText}>Sign in</Text>
        </Pressable>
      </View>
    </>
  )
};

export default SignIn;