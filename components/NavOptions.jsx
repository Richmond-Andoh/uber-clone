import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Get a Ride",
    img: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },

  {
    id: "123",
    title: "Order Food",
    img: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[tw`pl-4 pt-5 pb-4 pr-4 m-2 bg-gray-200 rounded-lg`]}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{
                uri: item.img,
              }}
            />
            <Text style={[tw`pt-4`]}>{item.title}</Text>
            <Icon
              onPress={() => navigation.navigate("MapScreen")}
              name="arrowright"
              style={[tw`bg-black rounded-full w-10 p-2 mt-4`]}
              type="antdesign"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
