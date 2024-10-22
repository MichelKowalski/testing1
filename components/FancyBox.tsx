import { Text, View } from "react-native";

export default function FancyBox() {
  return (
    <View
      style={{
        backgroundColor: "pink",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Fancy</Text>
    </View>
  );
}
