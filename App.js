import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"

const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Blog List"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightgray'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'blue'
          }
        }}
      >
        <Stack.Screen
          name="Blog List"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Blog List',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create Blog')}>
                <Icon name="plus" size={30} color="black" />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="Blog Screen" 
          component={ShowScreen}
          options={({ navigation, route }) => ({
            title: 'Blog Screen',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit Blog',{ id: route.params.id, goBack: true })} >
                <Icon name="edit-2" size={25} color="black" />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen 
          name="Create Blog"
          component={CreateScreen}
          options={{
            title: 'Create Blog'
          }}
        />
        <Stack.Screen 
          name="Edit Blog"
          component={EditScreen}
          options={{
            title: 'Edit Blog'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()  => {
  return <Provider>
    <App />
  </Provider>
}