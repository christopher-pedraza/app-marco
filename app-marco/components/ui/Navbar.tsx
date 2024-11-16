import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <Icon name="home-outline" size={24} style={styles.icon2} />
      <Icon name="cart-outline" size={24} style={styles.icon} />
      <Icon name="person-outline" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 60,
  },
  icon: {
    color: '#333', 
  },
  icon2: {
    color: '#e97cb0',
  },
});

export default Navbar;
