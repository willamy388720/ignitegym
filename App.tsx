import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { theme } from "./src/theme";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { AuthContextProvider } from "@contexts/AuthContext";
import OneSignal from "react-native-onesignal";
OneSignal.setAppId("672a2e3b-ca1d-4878-8804-9f5bd0b6ea63");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
