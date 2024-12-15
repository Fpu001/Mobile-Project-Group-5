import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

// Pyydä lupaa ilmoituksille (vain iOS)
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

// Aikatauluta ilmoitus tietyllä kellonajalla
export const scheduleDailyReminder = async () => {
  const hasPermission = await requestNotificationPermission();
  if (!hasPermission) return;

  // Peruuta vanhat muistutukset
  PushNotification.cancelAllLocalNotifications();

  // Hae nykyinen päivä ja aseta haluttu kellonaika
  const now = new Date();
  const reminderTime = new Date(now.setHours(17, 48, 0, 0)); // Aseta kellonajaksi 17:48

  // Aikatauluta muistutus tietylle kellonajalle joka päivä
  PushNotification.localNotificationSchedule({
    title: 'Muistutus päivittää edistymistäsi',
    message: 'Älä unohda päivittää tavoitteesi edistymistä tänään!',
    date: reminderTime,  // Määritä ilmoituksen ajankohta
    repeatType: 'day',   // Toistuu päivittäin
    repeatTime: 1,       // Toistuu kerran päivässä
    userInfo: { id: 'dailyReminder' },
    allowWhileIdle: true, // Mahdollistaa ilmoituksen, vaikka sovellus on taustalla
  });

  alert('Päivittäinen muistutus on asetettu!');
};



