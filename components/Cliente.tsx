import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface propCliente{
    id: number,
    nome: string,
    cpf: string,
    saldo: number
}

export default function Cliente ({id, nome, cpf, saldo}:propCliente){
    return(
        <View>
            <Text style={styles.texto}>Cod: {id}</Text>
            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>CPF: {cpf}</Text>
            <Text style={styles.texto}>Saldo: {saldo}</Text>

            <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txtBtn}>Excluir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.txtBtn}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {

    },
    
    btn: {

    },

    btn2: {

    },

    txtBtn: {

    }
});