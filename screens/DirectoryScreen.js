import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: destination }) => {
    return (
      <ListItem onPress={() => props.onPress(destination.id)}>
        <Avatar source={destination.image} />
        <ListItem.Content>
          <ListItem.Title>{destination.name}</ListItem.Title>
          <ListItem.Subtitle>{destination.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={props.destination}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
