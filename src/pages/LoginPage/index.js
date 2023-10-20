import { Image, TextInput, View, } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';
import { Button } from 'react-native';
export default function LoginPagePage({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
            source={{
            uri: 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-film-festival-logo-popcorn-and-film-free-png-image_1311154.jpg'}}/>
        <TextInput placeholder='Email' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input}/>
        <Button
        title="Login"
        onPress={() => navigation.navigate('Telainicial')}
      />
        <View style={styles.viewLinks}>
                <Link to={{screen: 'SenhaPage'}}>Esqueceu a senha? </Link>
                <Link to={{screen: 'RegistroPage'}}>Registre-se </Link>
        </View>
        </View>
    )
}