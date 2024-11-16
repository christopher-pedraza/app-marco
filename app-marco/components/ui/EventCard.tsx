import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface EventCardProps {
  title: string;
  description: string;
  image: any; 
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: 250, 
  },
  textContainer: {
    padding: 15, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default EventCard;
