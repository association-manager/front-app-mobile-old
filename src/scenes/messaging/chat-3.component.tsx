import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import ContentView from '../../layouts/messaging/chat-3';

export const Chat3Screen = ({ navigation }): React.ReactElement => {

  const onProfileActionPress = (): void => {
    navigation.navigate('Profile7');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderProfileAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={renderProfileImage}
      onPress={onProfileActionPress}
    />
  );

  const renderProfileImage = (): React.ReactElement => (
    <Image
      style={styles.profileImage}
      source={require('../../assets/images/image-app-icon.png')}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title='Shirai Subaru'
        subtitle='Vu pour la dernière fois Sam 17 jan 2020 à 17h45'
        leftControl={renderBackAction()}
        rightControls={[renderProfileAction()]}
      />
      <ContentView/>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    tintColor: null,
  },
});