import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text> Tudo bem com voces? exemplo app </Text>
    </View>
  )
}
function exemplo01() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Ola mundo - exempo 01</Text>
    </View>
  )
}

export default () => { //exemplo 02
  const [resposta, setResp] = useState('')
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style = {{fontStyle: "italic"}}> Seja bem vindo ao programa de soma</Text>
      <TextInput style = {{justifyContent: "center"}}
      value = {resposta} 
      onChangeText={setResp}
       clearTextOnFocus= {true}
       placeholder='Digite qualquer coisa'
       />
      <Text> O texto digitado foi {resposta}</Text>
    </View>
  )
}

const exemplo03 = () => <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>Ola mundo exemplo 03</Text></View>

const exemplo04 = ({nome = "Gabriel", idade = 19}) => {
  return(
    <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text> EXEMPLO 04 do {nome}, de idade {idade}</Text>
    </View>
  )
}
export {App, exemplo01, exemplo03, exemplo04}

