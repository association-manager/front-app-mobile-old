import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate('ForgotPassword');
  };  
  
  const appNavigatorButtonPress = (): void => {
    navigation && navigation.navigate('AppNavigator');
  };



  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar
          size='giant'
          source={require('../../../assets/images/image-app-icon.png')}
        />
        <Text
          category='h1'
          status='control'>
          Association{' '}Manager
        </Text>
        <Text
          style={styles.signInLabel}
          category='s1'
          status='control'>
          Connectez-vous à votre compte pour continuer...!
        </Text>
      </View>
      <Layout
        style={styles.formContainer}
        level='1'>
        <Input
          placeholder='Votre adresse email'
          icon={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder='Votre mot de passe'
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance='ghost'
            status='basic'
            onPress={onForgotPasswordButtonPress}>
            Mot de passe oublié?
          </Button>
        </View>
      </Layout>
      <Button
        style={styles.signInButton}
        size='giant' onPress={appNavigatorButtonPress}>
        Se connecter
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: '#01D0FB',
    padding: 10,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#01D0FB',
    borderColor: "#01D0FB",
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});

