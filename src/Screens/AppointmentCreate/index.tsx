import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { styles } from './styles';

import { CategorySelect } from '../../Components/CategorySelect';
import { RectButton } from 'react-native-gesture-handler';
import { SmallInput } from '../../Components/SmallInput';
import { GuildProps } from '../../Components/Guild';
import { Background } from '../../Components/Background';
import { GuildIcon } from '../../Components/GuildIcon';
import { ModalView } from '../../Components/ModalView';
import { TextArea } from '../../Components/TextArea';
import { Feather } from '@expo/vector-icons';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Guilds } from '../Guilds';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
            hasCheckbox
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e Mes
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.separator}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Horario
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.separator}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descricao</Text>
              <Text style={styles.charLimit}>Max 100 chars</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button btnText="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
