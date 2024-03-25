import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchComponent = ({navigation, text, onChangeText}) => {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder="Search for a place or address"
        onChangeText={onChangeText}
        value={text}
        onPressIn={() => navigation.navigate("WashroomSearch")}
      />
      <TouchableOpacity
        style={styles.saved}
        onPress={() => {
          navigation.navigate("WashroomBookmarks");
        }}
      >
        <MaterialIcons name="bookmark-outline" size={24} color={"#DA5C59"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "white",
    width: "100%",
    gap: 10
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: "#efefef",
    borderRadius: 5,
    flex: 9,
  },
  saved: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#efefef",
    borderWidth: 2
  },
});
export default SearchComponent;