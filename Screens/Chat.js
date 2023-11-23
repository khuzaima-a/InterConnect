import { Text, View, StyleSheet } from 'react-native'

const Chat = () => {
          return (
          <View style={styles.container}>
                    <Text style={styles.heading}>Chat Screen</Text>
                    <Text style={styles.description}>This Page is under construction</Text>
          </View>
          )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1185BA",
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
  },
});

export default Chat;