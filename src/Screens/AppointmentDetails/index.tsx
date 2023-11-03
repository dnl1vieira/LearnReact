import React, { ReactNode } from 'react';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { Background } from '../../Components/Background';
import { Header } from '../../Components/Header';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { ListHeader } from '../../Components/ListHeader';
import { Member, MemberProps } from '../../Components/Member';
import { ListSeparator } from '../../Components/ListSeparator';
import { ButtonIcon } from '../../Components/ButtonIcon';

export function AppointmentDetails() {
  let title = 'Lendários';
  let description =
    'É hoje que vamos ganhar todas ranked sem perder pra xitado, fé com fé';

  let profileImgURL1 = 'https://github.com/dnl1vieira.png';
  let profileImgURL2 = 'https://github.com/edsoncamargo.png';
  let profileImgURL3 = 'https://github.com/pelinzon.png';
  let profileImgURL4 = 'https://github.com/httpedrao.png';
  let btnText = 'Entrar na partida';
  const members = [
    {
      id: '1',
      username: 'Daniel Vieira',
      avatar_url: profileImgURL1,
      status: 'online',
    },
    {
      id: '2',
      username: 'Edson Menezes',
      avatar_url: profileImgURL2,
      status: 'online',
    },
    {
      id: '3',
      username: 'Lucas Pelinzon',
      avatar_url: profileImgURL3,
      status: 'offline',
    },
    {
      id: '4',
      username: 'Pedro Queiroz',
      avatar_url: profileImgURL4,
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.description}>{description}</Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle={String(members.length)} />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListSeparator />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon btnText={btnText} />
      </View>
    </Background>
  );
}
