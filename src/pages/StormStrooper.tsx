import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function StormStrooper() {
  const navigation = useNavigation();

  return (
    <View className="bg-[#EEEEEE] flex-1 flex items-center justify-center">
      <StatusBar
        animated={true}
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor="#EEEEEE"
      />
      <Text className="text-gray-600 font-bold text-xl">Stormtrooper!</Text>
      <TouchableOpacity
        className="bg-[#E0E0E0] w-[90%] flex items-center justify-center rounded-full"
        onPress={() => navigation.navigate("DarthVader")}
      >
        <Image
          className="w-[350px] h-[350px]"
          source={require("../assets/stromstrooper.gif")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default StormStrooper;
