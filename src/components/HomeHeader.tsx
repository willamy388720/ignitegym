import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack bg={"gray.600"} pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto
        source={{
          uri: "https://img.freepik.com/fotos-gratis/conceito-de-vida-rural-com-cabras-e-ovelhas-brancas_23-2149147938.jpg?w=826&t=st=1675089746~exp=1675090346~hmac=ff126446131471560a65e16f1e25cd1fb6b0083c391c9d562bd7b0d92a304f05",
        }}
        alt={"Imagem do usuário"}
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá,
        </Text>
        <Heading color={"gray.100"} fontSize={"md"} fontFamily={"heading"}>
          Zé das Cabras
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color={"gray.200"} size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
