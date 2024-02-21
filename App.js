import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={styles.texto}>Thiago Viel Denadai</Text>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={styles.texto2}>33</Text>
      </View>
      <View style={styles.fourthContainer}>
        <Text style={styles.texto3}>7</Text>
      </View>
      <View style={styles.fifthContainer}>
        <Text style={styles.texto4}>desafio criterio critico</Text>
      </View>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,

  },
  secondaryContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: '',
    flexDirection: 'row-reverse'
  },
  texto: {
    color: '#0000FF',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  thirdContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  texto2: {
    color: '#0000FF',
    fontSize: '25px',
    fontStyle: 'italic',
    borderBottomWidth: '1px',
    borderColor: '#d11111'



  },

  fourthContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  texto3: {
    color: '#0000FF',
    fontSize: '20px',
    backgroundColor: '#FF69B4',


  },
  fifthContainerContainer: {
    width: '100%',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  texto4: {
    color: '#0000FF',
    fontSize: '30px',
    backgroundColor: '#26de18',
    borderBottomWidth: '1px',
  },

});
