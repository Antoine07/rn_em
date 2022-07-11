import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';


const initialState = {
  text: ""
}

const lenChar = (characters) => {

  const res = [];

  for(const char of characters ){
    res.push(char.length);
  }

  return res;

}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':

      return {
        ...state,
        text: action.text

      }

    case "CALCUL":

      return {
        ...state,
        text : lenChar( state.text.split(" ") ).join(" ")
          
      }

      case "REVERSE":

        return {
          ...state,
          text : state.text.split('').reverse().join("")
        }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (text) => dispatch({ type: "SET_TEXT", text });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "powderblue" }}>
        <Text>Hello {state.text}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={state.text}
        />
      </View>
      {state.text !== "" && (
        <>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: "REVERSE" })}
        >
          <Text>Reverse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: "CALCUL" })}
        >
          <Text>Calcul</Text>
        </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDD",
    padding: 10
  }
});
