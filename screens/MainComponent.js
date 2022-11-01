import { useState } from "react";
import { DESTINATION } from "../shared/destinations";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import InfoScreen from "./InfoScreen";

const Main = () => {
  const [destinations, setDestinations] = useState(DESTINATION);
  const [selectedDestinationId, setSelectedDestinationId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        destinations={destinations}
        onPress={(destinationId) => setSelectedDestinationId(destinationId)}
      />
      <InfoScreen
        destination={
          destinations.filter(
            (destination) => destination.id === selectedDestinationId
          )[0]
        }
      />
    </View>
  );
};

export default Main;
