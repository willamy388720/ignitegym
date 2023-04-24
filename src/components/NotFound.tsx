import { Heading, Center } from "native-base";

export function NotFound() {
  return (
    <Center flex={1} bg="gray.700">
      <Heading color={"white"}>Pagina não encontrada!</Heading>
    </Center>
  );
}
