import { View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';

import Cliente from '../components/Cliente';
import api from '../components/Api';

export default function ListarClientes() {

    const [dados, setDados] = useState<any[]>([]);

    async function buscaClientes() {
        const resposta = await api.get('clientes');
        setDados(resposta.data);
    }

    useEffect(
        ()=>{
            buscaClientes();
        }
    );

    return(
       
            <View>
                <View style={styles.bloco}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txtBtn}>Cadastrar Novo Cliente</Text>
                </TouchableOpacity>
                </View>
                  
                <View>
                    <Text>Lista de Clientes</Text>

                    <Cliente nome="Lincon" cpf="593.800.100-00" saldo="100" id="11"/>
                </View>
            </View>

    );
}

const styles = StyleSheet.create({
    bloco: {

    },

    btn: {

    },

    txtBtn
    : {

    },
});