import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {launchImageLibrary} from 'react-native-image-picker';

interface ImageBannerProps {
  hideText?: boolean;
  bgColor?: string;
  handleUpload?: (uri: string) => void; 
}

export const ImageBanner:React.FC<ImageBannerProps> = ({
  hideText,
  bgColor,
  handleUpload
}) => {
  const [selectedImage, setSelectedImage] = useState("");

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      // aspectRatio: ''
      quality: 1,
    });

    if (!result.didCancel) {
      const uri = result.assets ? result.assets[0].uri! : "";
      setSelectedImage(uri);
      if (handleUpload) handleUpload(uri);
    }
  };

  return (
    <View className={`w-full h-[163px] flex flex-col justify-center items-center relative rounded-[11px] ${bgColor || "bg-zinc-200"}`}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={{ width: 88.74, height: 93, borderRadius: 46.37 }} />
      ) : (
        <View className="mt-4 w-[88.74px] h-[93px] bg-zinc-400 rounded-full relative">
          <View className="left-[52px] top-[67px] absolute">
          <TouchableOpacity onPress={pickImage}>
            <View className="w-[26px] h-[26px] flex flex justify-center items-center bg-sky-900 rounded-full border-2 border-white">
              <Text className="z-5">
                <FontAwesome name={"camera"} color={"#fff"} size={12} />
              </Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      )}
      {
        !hideText && 
        <Text className="mt-[12] text-black text-sm font-normal leading-snug">
          Upload avatar
        </Text>
      }
    </View>
  );
};