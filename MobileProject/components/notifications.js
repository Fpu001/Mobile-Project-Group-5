import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

// Käsittele ilmoituksia, kun ne saapuvat
PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios', // Request permissions for iOS only
});

// Pyydä lupaa ilmoituksille
export const requestNotificationPermission = async () => {
  if (Platform.OS === 'ios') {
    const permissionStatus = await PushNotification.requestPermissions();
    if (!permissionStatus.alert) {
      alert('Ilmoitukset eivät ole sallittuja. Salli ne asetuksista.');
      return false;
    }
  }
  return true;
};

// Aikatauluta päivittäinen ilmoitus
export const scheduleDailyReminder = async () => {
  const hasPermission = await requestNotificationPermission();
  if (!hasPermission) return;

  // Peruuta vanhat muistutukset
  PushNotification.cancelAllLocalNotifications();

  // Aikatauluta uusi muistutus
  PushNotification.localNotificationSchedule({
    title: 'Muistutus päivittää edistymistäsi',
    message: 'Älä unohda päivittää tavoitteesi edistymistä tänään!',
    date: new Date(Date.now() + 10 * 1000), // Välitön muistutus (testausta varten)
    repeatType: 'day', // Toistuu päivittäin
    repeatTime: 1, // Toistuu kerran päivässä
    // Trigger at 1:40 PM
    userInfo: { id: 'dailyReminder' },
    allowWhileIdle: true, // Allows notification even when the app is idle
  });

  alert('Päivittäinen muistutus on asetettu!');
};
