import { Button, View,Text,Image } from "react-native-web";

import styles from "./styles";

export default function Telainicial({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                
            </View>
           <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOnztrGmIhY54oyGLc8-4bq6kZLR9O_Rf-_MzCyFyMn5IQkwgqs31D9UZ9Q7T6nR-8QE&usqp=CAU'}} style={styles.logo}/>
           <Text style={styles.nome}>Calebe Carias Degenario</Text>
           <Text style={styles.descricao}>Aluno da uvv tentando aprendar react native</Text>
           <Button
        title="Sair"
        onPress={() => navigation.navigate('LoginPage')}
        />
        </View>
    )
}