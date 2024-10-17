import { Text, View } from 'react-native'
import {Link} from "expo-router"




export default telaInicio = () => {
    return (
        <View>
            <Link href='/camera'>
                <Text>Lista de Tarefas</Text>
            </Link>
            
    
            
            <Link href= '/memoria'>
            <Text>memoria</Text>
            </Link>
            
        </View>
    )
}