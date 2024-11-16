import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/marc0_logo.png')} // Cambia al path correcto de tu logo
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110, 
    backgroundColor: '#e97cb0', 
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', 
    marginBottom: 15,
    paddingTop: 30,
  },
  logo: {
    width: '100%',
    height: 100,
  },
});
