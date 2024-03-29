import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const [email, setEmail] = React.useState<string>();

  const styles = useStyleSheet(themedStyles); 
  
  const onResetPasswordButtonPress = (): void => {
    navigation && navigation.goBack();
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
          Mot de passe{' '}oublié...!
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
      </Layout>
      <Button
        style={styles.signInButton}
        size='giant' onPress={onResetPasswordButtonPress}>
        Réinitialiser mon{' '}mot{' '}de{' '}passe
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

