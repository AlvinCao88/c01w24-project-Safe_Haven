import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

import NewsScreen from "./src/screens/NewsScreen";
import DetailedNewsScreen from "./src/screens/DetailedNewsScreen";
import CardScreen from "./src/screens/CardScreen";
import DonateScreen from "./src/screens/DonationScreen"

import WashroomBottomSheet from "./src/components/WashroomBottomSheet";
import InfoScreen from "./src/screens/InfoScreen";

import SettingScreen from "./src/screens/SettingScreen";
import AddWashroomScreen from "./src/screens/AddWashroomScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PrismicProvider client={client}>
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator initialRouteName="Map">
          <Tab.Screen
            name="Map"
            component={WashroomBottomSheet}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="News"
            component={NewsNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Card"
            component={CardScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Info"
            component={InfoStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingStack}
            options={{ headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PrismicProvider>
  );
}

function NewsNavigator() {
  return (
    <Stack.Navigator initialRouteName="News List">
      <Stack.Screen
        name="News List"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detailed News"
        component={DetailedNewsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function InfoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="Donate" component={DonateScreen} />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="SettingsPage" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsPage" component={SettingScreen} />
      <Stack.Screen name="AddWashrooms" component={AddWashroomScreen} />
    </Stack.Navigator>
  )
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar />
//       <Tab.Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Map" component={MapScreen} />
//         <Tab.Screen name="Card" component={CardScreen} />
//         <Tab.Screen name="Info" component={InfoStack} />
//         <Tab.Screen name="Settings" component={SettingStack} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }