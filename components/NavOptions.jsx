import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from "twrnc";

const data = [
    {
        id: "1",
        title: "Get a Ride",
        img: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },

    {
        id: "123",
        title: "Order Food",
        img: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
]
const NavOptions = () => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={[tw`pl-8 pt-5 pb-4 pr-4 m-2 bg-gray-200`]}>
            <View>
            <Image 
                style={{width: 120, height: 120, resizeMode: "contain"}}
                source={{
                    uri: item.img,
                }}
            />
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

