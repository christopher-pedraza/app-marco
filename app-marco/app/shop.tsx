import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '@/components/ui/Header';

const Shop: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Header title="Tienda" />
            <View style={styles.ticketSection}>
                <Text style={styles.sectionTitle}>BOLETOS</Text>
                <Icon name="ticket-outline" size={50} color="#e97cb0" style={styles.ticketIcon} />
                <View style={styles.ticketOption}>
                    <Text style={styles.ticketText}>Entrada General</Text>
                    <Text style={styles.ticketPrice}>$45</Text>
                </View>
                <View style={styles.ticketOption}>
                    <Text style={styles.ticketText}>Estudiantes y Maestros</Text>
                    <Text style={styles.ticketPrice}>$35</Text>
                </View>
                <View style={styles.ticketOption}>
                    <Text style={styles.ticketText}>Menores a 15 y adultos mayores</Text>
                    <Text style={styles.ticketPrice}>$30</Text>
                </View>
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
                        style={styles.icon2}
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


export default Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Ticket Section
    ticketSection: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ticketIcon: {
        marginBottom: 20,
    },
    ticketOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    ticketText: {
        fontSize: 16,
        color: '#333',
    },
    ticketPrice: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    // Navbar
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
