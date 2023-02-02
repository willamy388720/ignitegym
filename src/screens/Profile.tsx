import { useState } from "react";
import {
  Center,
  ScrollView,
  Text,
  VStack,
  Skeleton,
  Heading,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{
                uri: "https://img.freepik.com/fotos-gratis/conceito-de-vida-rural-com-cabras-e-ovelhas-brancas_23-2149147938.jpg?w=826&t=st=1675089746~exp=1675090346~hmac=ff126446131471560a65e16f1e25cd1fb6b0083c391c9d562bd7b0d92a304f05",
              }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity>
            <Text
              color={"green.500"}
              fontWeight={"bold"}
              fontSize={"md"}
              mt={3}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg={"gray.600"} />
          <Input bg={"gray.600"} value="zeDasCabras@gmail.com" isDisabled />
          <Heading
            color={"gray.200"}
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={12}
          >
            Alterar senha
          </Heading>
          <Input placeholder="Senha antiga" bg={"gray.600"} secureTextEntry />
          <Input placeholder="Nova senha" bg={"gray.600"} secureTextEntry />
          <Input
            placeholder="Confirme a nova senha"
            bg={"gray.600"}
            secureTextEntry
          />
          <Button title="Atualixar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
