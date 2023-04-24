import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/useAuth";
import { Loading } from "@components/Loading";

const linking = {
  prefixes: ["ignitegym://"],
  config: {
    screens: {
      home: {
        path: "home",
      },
      exercise: {
        path: "exercise/:exerciseId",
        parse: {
          exerciseId: (exerciseId: string) => exerciseId,
        },
      },
      history: {
        path: "history",
      },
      notFound: "*",
    },
  },
};

export function Routes() {
  const { colors } = useTheme();
  const { user, isLoadingUserStorageData } = useAuth();

  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  if (isLoadingUserStorageData) {
    return <Loading />;
  }

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer linking={linking}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
