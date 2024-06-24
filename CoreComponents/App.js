import { View, Text, Image, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {

  return (
    <View style={styles.container}> 
        <View style={[styles.darkMode]}>
          <Text style={styles.darkModeText}>Style INheritence <Text style={styles.boldText}>in bold</Text></Text>
        </View>
        <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
          <Text>Lightblue Box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
          <Text>LightGreen Box</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60
  },
  boldText: {
    fontWeight: "bold"
  },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white"
  },
  box:{
    height: 250,
    width: 250,
    // padding: 10
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  }
})

