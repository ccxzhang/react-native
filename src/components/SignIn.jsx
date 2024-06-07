import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { ErrorMessage, Formik, useFormik } from "formik";
import * as yup from "yup";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#FFF",
    justifyContent: "center",
    fontWeight: theme.fontWeights.bold,
  },
  ErrorMessage: {
    color: "#d73a4a",
    fontSize: theme.fontSizes.placeholder,
    padding: 5,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required(),
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={values.username}
              onBlur={handleBlur("username")}
              onChangeText={handleChange("username")}
            />
            {errors.username && (
              <Text style={styles.ErrorMessage}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={values.password}
              secureTextEntry={true}
              onChangeText={handleChange("password")}
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
