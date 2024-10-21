import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from './src/use-translation';
import Button from './src/Button';
import { useCookie } from './src/use-cookie';
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from 'react';
import LoadingView from './src/LoadingView';
import LottieView from 'lottie-react-native';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const { t, locale, setLocale, format } = useTranslation();

  const { cookieKey } = useCookie();

  const [isLoaded, setIsLoaded] = useState(false);

  const y = new Date().getFullYear();
  const m = new Date().getMonth() + 1;
  const d = new Date().getDate();

  const todayText = format(t('today_is'), y, m, d);

  useEffect(() => {
    if (cookieKey !== "") {
      setIsLoaded(true);
    };
  }, [cookieKey]);
  useEffect(() => {
    if (locale !== null) {
      SplashScreen.hideAsync();
    }
  }, [locale]);

  if (!isLoaded) return <LoadingView />;


  return (
    <View style={styles.container}>
      <Text>{(todayText)}</Text>
      <Text>{t(cookieKey)}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => { setLocale("ko") }}
          isSelected={locale === "ko"}
          text="KO" />
        <Button
          onPress={() => { setLocale("en") }}
          isSelected={locale === "en"}
          text="EN" />
        <Button
          onPress={() => { setLocale("ja") }}
          isSelected={locale === "ja"}
          text="JA" />
        <Button
          onPress={() => { setLocale("zh") }}
          isSelected={locale === "zh"}
          text="ZH" />
        <Button
          onPress={() => { setLocale("es") }}
          isSelected={locale === "es"}
          text="ES" />
      </View>
      <LottieView
        autoPlay={false}
        source={require('./assets/background.json')}
        resizeMode='contain'
        style={{
          alignContent: 'flex-end',
          width: 200,
          height: 200,
          position: "relative",

        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa7070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {

    flexDirection: "row"
  },
});
