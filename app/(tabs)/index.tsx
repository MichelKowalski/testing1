import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import FancyBox from "@/components/FancyBox";

export default function HomeScreen() {
  const [pressButton, setPressButton] = useState("");
  const [counter, setCounter] = useState(0);

  function addPlus() {
    setCounter(counter + 1);

    if (counter >= 10) {
      setCounter(0);
    }
  }

  function addMinus() {
    setCounter(counter - 1);

    if (counter <= 0) {
      setCounter(0);
    }
  }

  return (
    <View style={{ backgroundColor: "dodgerblue", flex: 1 }}>
      <View style={{ height: 80, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>A</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>B</Text>
        </View>
        <View
          style={{
            backgroundColor: "green",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>C</Text>
        </View>
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{pressButton}</Text>

        <TextInput
          style={{
            borderWidth: 2,
            backgroundColor: "pink",
            width: 200,
            borderStyle: "dashed",
            borderRadius: 10,
          }}
          onChangeText={() => {}}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 40, color: "gold" }}>{counter}</Text>

        <Button
          title="PLUS"
          onPress={() => {
            addPlus();
          }}
        />

        <Button
          title="MINUS"
          onPress={() => {
            addMinus();
          }}
        />

        <HelloWave />
      </View>
      <View style={{ alignItems: "center" }}>
        <FancyBox />
      </View>
      <View
        style={{
          backgroundColor: "red",
          height: 50,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button
          title="STOPP"
          onPress={() => {
            setPressButton("Kanin");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

const style = StyleSheet.create({
  myStyleSheet: {
    alignItems: "flex-end",
    flex: 1,
    backgroundColor: "green",
    height: 100,
  },
});
