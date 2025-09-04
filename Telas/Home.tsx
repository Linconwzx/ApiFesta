import { useNavigation, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>OS cara do teto tao na minha maldade</Text>

      <View style={styles.bloco}>

        <TouchableOpacity style={styles.btn}
          onPress={()=>navigation.navigate('ListarClientes' as never)}
        >
          <Text style={styles.txtBtn}>Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity> 
          <Text style={styles.txtBtn}>Usuários</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  bloco: {
    width: '100%'
  },

  btn: {
    backgroundColor: '#c11b1b',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 20,
    padding: 20,
    borderRadius: 20
  },

  txtBtn: {
    textAlign: 'center',
    fontSize: 20
  }
});
