import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from "twrnc";
import { Icon } from 'react-native-elements';

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
        <TouchableOpacity style={[tw`pl-4 pt-5 pb-4 pr-4 m-2 bg-gray-200`]}>
            <View>
            <Image 
                style={{width: 120, height: 120, resizeMode: "contain"}}
                source={{
                    uri: item.img,
                }}
            />
                <Text style={[tw`text-center pt-4`]}>{item.title}</Text>
                <Icon
                  name='arrowright'
                  style={[tw`bg-primary-content`]}
                  type="antdesign"
                />
            </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

