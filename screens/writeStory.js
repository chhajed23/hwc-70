import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AppHeader from "../appHeader";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
          <AppHeader />
        
        <TextInput style={styles.inputBox} placeholder="Story Title" />

        <TextInput style={styles.inputBox} placeholder="Author" />
        <TextInput
          style={styles.StoryWriting}
          placeholder="Write Your Story"
          multiline={true}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 200,
    height: 50,
    margin: 10,
    borderWidth: 1.5,

    fontSize: 20,
  },
  StoryWriting: {
    width: 200,
    height: 100,
    borderWidth: 1.5,

    fontSize: 20,
  },
  submitButton: {
    marginTop: 50,
    backgroundColor: "orange",
    width: 200,
    borderWidth: 1.5,
  },
  submitText: { fontSize: 30, textAlign: "center", fontWeight: "bold" },
  
});
