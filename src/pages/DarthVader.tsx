import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DarthVader() {
  const navigation = useNavigation();

  return (
    <View className="bg-[#222222] flex-1 flex items-center justify-center">
      <StatusBar
        animated={true}
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="#222222"
      />
      <Text className="text-white font-bold text-xl">Darth Vader!</Text>
      <Text></Text>
      <TouchableOpacity
        className="bg-[#ED4631] w-[90%] flex items-center justify-center rounded-full"
        onPress={() => navigation.navigate("StormStrooper")}
      >
        <Image source={require("../assets/darthvader.gif")} />
      </TouchableOpacity>
    </View>
  );
}

export default DarthVader;
