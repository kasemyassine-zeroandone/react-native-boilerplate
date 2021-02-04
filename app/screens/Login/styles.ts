import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginFieldsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonsContainer: {
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
  loginField: {
    height: 60,
    width: width - 50,
    marginVertical: 15,
    marginHorizontal: 20
  },
  loginFieldPlaceholder: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 20,
  },
});

export default styles;
