import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image } from 'react-native';
import React, {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [ticketNum, setTicketNum] = useState(null);
  const [ticketCost, setTicketCost] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>

      <TextInput
        placeholder="Number of Tickets"
        style={styles.input}
        onChangeText={newTicketNum => setTicketNum(newTicketNum)}
        keyboardType="numeric"
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          if(isNaN(ticketNum)){
            alert("You Need to Enter a Number");
            setTicketCost("");
          } else {
            setTicketCost("Ticket Cost: $" + (ticketNum*99.99).toFixed(2));
          }
        }}>
          <Text style={styles.buttonText}>Find The Cost</Text>  
        </Pressable>

        <Text style={styles.ticketCost}>{ticketCost}</Text>

        <Image
        style={styles.tinyLogo}
        source={require('./assets/concert.png')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 60,
    marginBottom: 60,
  },
  input: {
    marginBottom: 60,
    fontWeight: 'bold',
    height: 40,
    width: 300,
    fontSize: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    marginBottom: 30,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#f98b88",
    width: 150,
    margin: 12,
    padding: 10,
  },
  ticketCost: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 30,
  },
});
