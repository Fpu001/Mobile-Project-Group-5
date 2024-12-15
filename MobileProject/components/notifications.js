import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Käsittele ilmoituksia, kun ne saapuvat
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Pyydä lupaa ilmoituksille
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Ilmoitukset eivät ole sallittuja. Salli ne asetuksista.');
    return false;
  }
  return true;
};

// Aikatauluta päivittäinen ilmoitus
export const scheduleDailyReminder = async () => {
  const hasPermission = await requestNotificationPermission();
  if (!hasPermission) return;

  await Notifications.cancelAllScheduledNotificationsAsync(); // Peruuta vanhat muistutukset

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Muistutus päivittää edistymistäsi',
      body: 'Älä unohda päivittää tavoitteesi edistymistä tänään!',
    },
    trigger: {
      hour: 13, // Muistutus klo 9 aamulla
      minute: 40,
      repeats: true,
    },
  });

  alert('Päivittäinen muistutus on asetettu!');
};
