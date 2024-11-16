
import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Navbar from '../components/ui/Navbar';
import EventCard from '../components/ui/EventCard';
import Header from '@/components/ui/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const profile: React.FC = () => {
    const navigation = useNavigation();
    const handleLogout = () => {
        navigation.navigate('index');
    };
    return (
        <View style={styles.container}>
            <Header title="Profile" />
            <View style={styles.centerContent}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.navbar}>
                <Icon
                    name="home-outline"
                    size={24}
                    style={styles.icon}
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
                    style={styles.icon2}
                    onPress={() => navigation.navigate('profile')}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    logoutButton: {

        width: '50%',
        height: 50,
        backgroundColor: '#e97cb0',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRadius: 10,

        borderBottomColor: '#e0e0e0',
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default profile;
