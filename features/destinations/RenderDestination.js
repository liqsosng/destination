import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderDestination = ({ destination }) => {
  if (destination) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={destination.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {destination.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{destination.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderDestination;
