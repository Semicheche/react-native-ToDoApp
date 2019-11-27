import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://localhost:3000' : 'http://192.168.1.20:3000'

function showError(err){
    Alert.alert("Ops, Occoreu um problema", `Message: ${err}`)
}

export { server, showError }