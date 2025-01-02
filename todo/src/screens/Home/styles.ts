import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
      },
      header: {
        height: 173,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D0D'
      },
      form: {
        padding: 16,
        width: '100%',
        marginTop: -45,
        flexDirection: 'row'
      },
      input: {
        flex: 1,
        height: 54,
        padding: 16,
        fontSize: 16,
        color: '#FFF',
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5,
        borderColor: '#0D0D0D',
        backgroundColor: '#262626'
      },
      button: {
        width: 54,
        height: 54,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F'
      },
      buttonPressed: {
        backgroundColor: '#4EA8DE'
      }
});