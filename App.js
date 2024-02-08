import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Enzo Ferreira dos Santos, Número do Notebook:16, Armário:2</Text>
      <Text style={styles.texto2}>Enzo Ferreira dos Santos, Número do Notebook:16, Armário:2</Text>
      <Text style={styles.introdução}>Olá a todos meu nome é Zoen Santos</Text>
      <Text style={styles.meio}>Minha vida até o presente momento é simples e eu simplesmente amo tudo que eu tenho e vivi até o presente momento da minha vida, agora eu estou no terceiro do médio e fazendo ti no Senai de Sumaré</Text>
      <Text style={styles.ultimo}>Tenho muitos sonhos eles sendo: Poder escrever minhas histórias e as transmitir para o mundo, fazer música, dublagem e fazer um jogo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'left',
  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  texto2: {
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 5,
    marginTop: 10,
  },

  introdução: {
    borderWidth: 2,
    fontSize: 30,
  },

  meio: {
    marginTop: 10,
  },

  ultimo: {
    marginTop: 10,
  }
});
