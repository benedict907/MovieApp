import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  canGoBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, canGoBack = false}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {canGoBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
      ) : null}
      <Text numberOfLines={1} style={styles.headerTitle}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
