import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../../Components/ButtonIcon';
import { Background } from '../../Components/Background';

import IllustrationImg from '../../assets/illustration.png';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();

  let title = 'Conecte-se \n e organize suas \n jogatinas';
  let subtitle =
    'Crie grupos para jogar seus games \n favoritos com seus amigos';
  let btnText = 'Entrar com Discord';

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>
          <ButtonIcon btnText={btnText} onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
