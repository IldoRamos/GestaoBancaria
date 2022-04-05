import React from 'react'
import {Text, View} from 'react-native'
import GetCampos from './campos'

const TelaInicial = ()=>{
    return(
    <View style={
        {
            flexDirection:'row',
            height: 100,
            alignText: 'center',
            padding: 20,
            fontSize: 35,
            backgroundColor: '#f0f'
        }
    }>        
        <Text> Seja Bem vindo</Text>
        <GetCampos/>
    </View>
    
    ) 
};

export default TelaInicial;