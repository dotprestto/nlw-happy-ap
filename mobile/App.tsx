import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import { useFonts } from 'expo-font'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'
import Routes from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold
  })

  if(!fontsLoaded) return null

  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer: {
    width: 168,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',

    elevation: 3,
  },

  calloutText: {
    color: '#0089A5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    color: "#8FA7B3",
    fontFamily: 'Nunito_700Bold'
  },

  createOrphanage: {
    width: 56,
    height: 56,
    backgroundColor: "#15C3D6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center"
  },
});
