import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import Navbar from '../components/ui/Navbar';
import EventCard from '../components/ui/EventCard';
import Header from '@/components/ui/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const events = [
    {
        id: '1',
        title: 'Exposición de Arte',
        description: 'Muestra de arte contemporáneo.',
        image: require('../assets/images/image_1.png'),
    },
    {
        id: '2',
        title: 'Conferencia de Historia',
        description: 'Charla sobre historia del arte.',
        image: require('../assets/images/image_2.png'),
    },
    {
        id: '3',
        title: 'Taller de Pintura',
        description: 'Aprende técnicas básicas de pintura.',
        image: require('../assets/images/image_3.png'),
    },
];

const HomeScreen: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title="Eventos" />
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar eventos"
                placeholderTextColor="#aaa"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filteredEvents}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <EventCard title={item.title} image={item.image} description={item.description} />}
            />
                            <View style={styles.navbar}>
                    <Icon
                        name="home-outline"
                        size={24}
                        style={styles.icon2}
                        onPress={() => navigation.navigate('home')}
                    />
                    <Icon
                        name="ticket-outline"
                        size={24}
                        style={styles.icon}
                        onPress={() => navigation.navigate('shop')}
                    />
                    <Icon
                        name="person-outline"
                        size={24}
                        style={styles.icon}
                        onPress={() => navigation.navigate('profile')}
                    />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginHorizontal: 20,
    },
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

export default HomeScreen;
