import { Image, TextInput, View, Button, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function RegistroPage(){
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-film-festival-logo-popcorn-and-film-free-png-image_1311154.jpg'}} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TextInput placeholder='Confirme a Senha' style={styles.input}/>
            <Button title = "Cadastrar">Cadastrar</Button>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'SenhaPage'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}