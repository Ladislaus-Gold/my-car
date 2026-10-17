/* Конфігурація Firebase (Project settings → General → Your apps → Web app → SDK setup and configuration).
   Поки тут null — застосунок працює локально (дані в браузері). Після заповнення вмикається вхід через Google
   і збереження даних у Cloud Firestore.
   Ці значення НЕ секретні (це публічні ідентифікатори вебзастосунку); захист даних забезпечують firestore.rules. */
window.FIREBASE_CONFIG = null;
/* Приклад:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "my-car-xxxxx.firebaseapp.com",
  projectId: "my-car-xxxxx",
  storageBucket: "my-car-xxxxx.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
