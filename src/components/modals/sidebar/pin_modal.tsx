import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "../../text-input";
import { SvgXml } from "react-native-svg";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const AddUpdatePinModal: React.FC<Props> = ({ isShow, onClose }) => {
  return (
    <KeyboardAvoidingView>
      <Modal
        isVisible={isShow}
        avoidKeyboard
        onBackdropPress={onClose}
        className="justify-end m-0"
      >
        <View className="bg-white rounded-tl-lg rounded-tr-lg p-5 flex-column items-center">
          <View className="flex-row justify-between items-center w-full">
            <Pressable>
              <Ionicons name="chevron-back" size={28} color="#2A5C81" />
            </Pressable>
            <Text
              className="ml-auto text-base font-semibold text-black mr-auto font-Poppins_600"
            >
              Update/add Pin
            </Text>
            <Pressable className="w-8" onPress={onClose}>
              <Ionicons name="close" size={28} color="#2A5C81" />
            </Pressable>
          </View>
          <View className="p-7 mb-2 w-full">
            <View className="mb-3">
              <Text className="text-sm font-normal text-[#626163] mb-2 font-Poppins_400">
                Enter your pin
              </Text>
              <CustomTextInput
                leftIcon={
                  <SvgXml
                    xml={`
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3.375 3.9375V14.0625C3.375 14.2863 3.28611 14.5009 3.12787 14.6591C2.96964 14.8174 2.75503 14.9062 2.53125 14.9062C2.30747 14.9062 2.09286 14.8174 1.93463 14.6591C1.77639 14.5009 1.6875 14.2863 1.6875 14.0625V3.9375C1.6875 3.71372 1.77639 3.49911 1.93463 3.34088C2.09286 3.18264 2.30747 3.09375 2.53125 3.09375C2.75503 3.09375 2.96964 3.18264 3.12787 3.34088C3.28611 3.49911 3.375 3.71372 3.375 3.9375ZM9.18984 7.50234L8.15625 7.83984V6.75C8.15625 6.52622 8.06736 6.31161 7.90912 6.15338C7.75089 5.99514 7.53628 5.90625 7.3125 5.90625C7.08872 5.90625 6.87411 5.99514 6.71588 6.15338C6.55764 6.31161 6.46875 6.52622 6.46875 6.75V7.83984L5.43516 7.50234C5.32831 7.46174 5.21432 7.44327 5.10011 7.44805C4.98591 7.45284 4.87387 7.48078 4.77079 7.53018C4.66771 7.57958 4.57574 7.64941 4.50047 7.73543C4.42519 7.82145 4.36818 7.92187 4.3329 8.03059C4.29761 8.13931 4.28478 8.25407 4.29519 8.3679C4.3056 8.48173 4.33903 8.59226 4.39345 8.69278C4.44787 8.7933 4.52215 8.88171 4.61178 8.95265C4.70141 9.02359 4.80451 9.07558 4.91484 9.10547L5.94844 9.44297L5.30859 10.3219C5.17764 10.5033 5.12339 10.7289 5.15761 10.95C5.19182 11.1711 5.31175 11.3698 5.49141 11.5031C5.63746 11.6066 5.81163 11.663 5.99062 11.6648C6.12421 11.6655 6.25598 11.6339 6.37472 11.5726C6.49347 11.5114 6.59567 11.4225 6.67266 11.3133L7.3125 10.4344L7.95234 11.3133C8.02933 11.4225 8.13153 11.5114 8.25028 11.5726C8.36902 11.6339 8.50079 11.6655 8.63438 11.6648C8.81337 11.663 8.98754 11.6066 9.13359 11.5031C9.31325 11.3698 9.43318 11.1711 9.46739 10.95C9.50161 10.7289 9.44736 10.5033 9.31641 10.3219L8.67656 9.44297L9.71016 9.10547C9.91261 9.02854 10.0777 8.8767 10.1713 8.6814C10.2649 8.48609 10.2798 8.26227 10.213 8.05627C10.1461 7.85028 10.0026 7.67788 9.81215 7.57476C9.6217 7.47165 9.39889 7.44572 9.18984 7.50234ZM17.0016 8.04375C16.9323 7.83133 16.7817 7.65503 16.5826 7.55354C16.3836 7.45204 16.1524 7.43363 15.9398 7.50234L14.9062 7.83984V6.75C14.9062 6.52622 14.8174 6.31161 14.6591 6.15338C14.5009 5.99514 14.2863 5.90625 14.0625 5.90625C13.8387 5.90625 13.6241 5.99514 13.4659 6.15338C13.3076 6.31161 13.2188 6.52622 13.2188 6.75V7.83984L12.1852 7.50234C12.0783 7.46174 11.9643 7.44327 11.8501 7.44805C11.7359 7.45284 11.6239 7.48078 11.5208 7.53018C11.4177 7.57958 11.3257 7.64941 11.2505 7.73543C11.1752 7.82145 11.1182 7.92187 11.0829 8.03059C11.0476 8.13931 11.0348 8.25407 11.0452 8.3679C11.0556 8.48173 11.089 8.59226 11.1435 8.69278C11.1979 8.7933 11.2722 8.88171 11.3618 8.95265C11.4514 9.02359 11.5545 9.07558 11.6648 9.10547L12.6984 9.44297L12.0586 10.3219C11.9276 10.5033 11.8734 10.7289 11.9076 10.95C11.9418 11.1711 12.0617 11.3698 12.2414 11.5031C12.3875 11.6066 12.5616 11.663 12.7406 11.6648C12.8742 11.6655 13.006 11.6339 13.1247 11.5726C13.2435 11.5114 13.3457 11.4225 13.4227 11.3133L14.0625 10.4344L14.7023 11.3133C14.7793 11.4225 14.8815 11.5114 15.0003 11.5726C15.119 11.6339 15.2508 11.6655 15.3844 11.6648C15.5634 11.663 15.7375 11.6066 15.8836 11.5031C16.0633 11.3698 16.1832 11.1711 16.2174 10.95C16.2516 10.7289 16.1974 10.5033 16.0664 10.3219L15.4266 9.44297L16.4602 9.10547C16.5659 9.072 16.6639 9.01784 16.7485 8.94615C16.8331 8.87446 16.9026 8.78667 16.953 8.68788C17.0034 8.58909 17.0336 8.48127 17.0419 8.37069C17.0503 8.26011 17.0366 8.14898 17.0016 8.04375Z" fill="#2A5C81"/>
                      </svg>
                    `}
                  />
                }
                containerStyle="rounded-lg border border-[#96B4D1] px-2.5 py-1"
                placeholder="00.00"
              />
            </View>
            <View>
              <Text className="text-sm font-normal text-[#626163] mb-2">
                Confirm Pin
              </Text>
              <CustomTextInput
                leftIcon={
                  <SvgXml
                    xml={`
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3.375 3.9375V14.0625C3.375 14.2863 3.28611 14.5009 3.12787 14.6591C2.96964 14.8174 2.75503 14.9062 2.53125 14.9062C2.30747 14.9062 2.09286 14.8174 1.93463 14.6591C1.77639 14.5009 1.6875 14.2863 1.6875 14.0625V3.9375C1.6875 3.71372 1.77639 3.49911 1.93463 3.34088C2.09286 3.18264 2.30747 3.09375 2.53125 3.09375C2.75503 3.09375 2.96964 3.18264 3.12787 3.34088C3.28611 3.49911 3.375 3.71372 3.375 3.9375ZM9.18984 7.50234L8.15625 7.83984V6.75C8.15625 6.52622 8.06736 6.31161 7.90912 6.15338C7.75089 5.99514 7.53628 5.90625 7.3125 5.90625C7.08872 5.90625 6.87411 5.99514 6.71588 6.15338C6.55764 6.31161 6.46875 6.52622 6.46875 6.75V7.83984L5.43516 7.50234C5.32831 7.46174 5.21432 7.44327 5.10011 7.44805C4.98591 7.45284 4.87387 7.48078 4.77079 7.53018C4.66771 7.57958 4.57574 7.64941 4.50047 7.73543C4.42519 7.82145 4.36818 7.92187 4.3329 8.03059C4.29761 8.13931 4.28478 8.25407 4.29519 8.3679C4.3056 8.48173 4.33903 8.59226 4.39345 8.69278C4.44787 8.7933 4.52215 8.88171 4.61178 8.95265C4.70141 9.02359 4.80451 9.07558 4.91484 9.10547L5.94844 9.44297L5.30859 10.3219C5.17764 10.5033 5.12339 10.7289 5.15761 10.95C5.19182 11.1711 5.31175 11.3698 5.49141 11.5031C5.63746 11.6066 5.81163 11.663 5.99062 11.6648C6.12421 11.6655 6.25598 11.6339 6.37472 11.5726C6.49347 11.5114 6.59567 11.4225 6.67266 11.3133L7.3125 10.4344L7.95234 11.3133C8.02933 11.4225 8.13153 11.5114 8.25028 11.5726C8.36902 11.6339 8.50079 11.6655 8.63438 11.6648C8.81337 11.663 8.98754 11.6066 9.13359 11.5031C9.31325 11.3698 9.43318 11.1711 9.46739 10.95C9.50161 10.7289 9.44736 10.5033 9.31641 10.3219L8.67656 9.44297L9.71016 9.10547C9.91261 9.02854 10.0777 8.8767 10.1713 8.6814C10.2649 8.48609 10.2798 8.26227 10.213 8.05627C10.1461 7.85028 10.0026 7.67788 9.81215 7.57476C9.6217 7.47165 9.39889 7.44572 9.18984 7.50234ZM17.0016 8.04375C16.9323 7.83133 16.7817 7.65503 16.5826 7.55354C16.3836 7.45204 16.1524 7.43363 15.9398 7.50234L14.9062 7.83984V6.75C14.9062 6.52622 14.8174 6.31161 14.6591 6.15338C14.5009 5.99514 14.2863 5.90625 14.0625 5.90625C13.8387 5.90625 13.6241 5.99514 13.4659 6.15338C13.3076 6.31161 13.2188 6.52622 13.2188 6.75V7.83984L12.1852 7.50234C12.0783 7.46174 11.9643 7.44327 11.8501 7.44805C11.7359 7.45284 11.6239 7.48078 11.5208 7.53018C11.4177 7.57958 11.3257 7.64941 11.2505 7.73543C11.1752 7.82145 11.1182 7.92187 11.0829 8.03059C11.0476 8.13931 11.0348 8.25407 11.0452 8.3679C11.0556 8.48173 11.089 8.59226 11.1435 8.69278C11.1979 8.7933 11.2722 8.88171 11.3618 8.95265C11.4514 9.02359 11.5545 9.07558 11.6648 9.10547L12.6984 9.44297L12.0586 10.3219C11.9276 10.5033 11.8734 10.7289 11.9076 10.95C11.9418 11.1711 12.0617 11.3698 12.2414 11.5031C12.3875 11.6066 12.5616 11.663 12.7406 11.6648C12.8742 11.6655 13.006 11.6339 13.1247 11.5726C13.2435 11.5114 13.3457 11.4225 13.4227 11.3133L14.0625 10.4344L14.7023 11.3133C14.7793 11.4225 14.8815 11.5114 15.0003 11.5726C15.119 11.6339 15.2508 11.6655 15.3844 11.6648C15.5634 11.663 15.7375 11.6066 15.8836 11.5031C16.0633 11.3698 16.1832 11.1711 16.2174 10.95C16.2516 10.7289 16.1974 10.5033 16.0664 10.3219L15.4266 9.44297L16.4602 9.10547C16.5659 9.072 16.6639 9.01784 16.7485 8.94615C16.8331 8.87446 16.9026 8.78667 16.953 8.68788C17.0034 8.58909 17.0336 8.48127 17.0419 8.37069C17.0503 8.26011 17.0366 8.14898 17.0016 8.04375Z" fill="#2A5C81"/>
                      </svg>
                    `}
                  />
                }
                containerStyle="rounded-lg border border-[#96B4D1] px-2.5 py-1"
                placeholder="00.00"
              />
            </View>
          </View>
          <TouchableOpacity className="rounded-lg w-[233px] bg-[#2A5C81] py-3 justify-center flex-row">
            <Text className="text-base font-semibold text-white font-Poppins_600">SEND</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default AddUpdatePinModal;