import { Image, TextInput, View, Button } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function SenhaPage(){
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-film-festival-logo-popcorn-and-film-free-png-image_1311154.jpg'}} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <Button title = "mandar">Mandar Email</Button>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'RegistroPage'}}>Cadastre-se </Link>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}