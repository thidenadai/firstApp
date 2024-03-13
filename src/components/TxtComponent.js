import { View, Text } from "react-native";
import { styles } from "../styles/Styleshetts";
export default function TxtComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text>Faça login!</Text>
      {children}
    </View>
  );
}
