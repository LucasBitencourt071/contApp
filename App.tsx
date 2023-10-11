import React, { useState } from 'react';
import { Text, Button, SafeAreaView, StatusBar } from 'react-native';

interface ContadorProps {
  titulo: string;
}

const Contador: React.FC<ContadorProps> = ({ titulo }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <SafeAreaView style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <Text>{titulo}</Text>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
      <Button title="Resetar" onPress={resetar} />
    </SafeAreaView>
      
  );
};

export default Contador;