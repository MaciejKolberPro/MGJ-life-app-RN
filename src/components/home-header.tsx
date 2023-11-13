import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { SearchComp } from "./search";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const HomeHeader = () => {
  return (
    <View className=" bg-[#00406E]">
      <View className="px-4 pb-2.5">
        <SafeAreaView>
          <View className="pt-1 flex flex-row justify-between items-center">
            <Feather name="settings" size={24} color="black" />

            <Text
              className="text-white ml-1"
              style={{ fontFamily: "Poppins_600SemiBold", fontSize: 17 }}
            >
              Home
            </Text>

            <MaterialIcons name="person-add-alt" size={28} color="black" />
          </View>
        </SafeAreaView>
        {/* <SearchComp /> */}
      </View>
      <View className="w-full flex flex-row justify-between px-20 py-4 border-t border-[#2A5C81]">
        <View className="items-center">
          <MaterialIcons name="person-add-alt" size={28} color="black" />
          <Text style={{ fontFamily: "Poppins_300Light" }} className="text-slate-400 text-xs font-light font-['Poppins'] leading-snug">
            QR Code
          </Text>
        </View>
        <View className="items-center">
          <MaterialIcons name="person-add-alt" size={28} color="black" />
          <Text style={{ fontFamily: "Poppins_300Light" }} className="text-slate-400 text-xs font-light font-['Poppins'] leading-snug">
            Search
          </Text>
        </View>
      </View>
    </View>
  );
};
