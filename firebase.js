import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase'in sana özel verdiği yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyAeiVJLWu9vdx2c088KLBs4t352GtAkECY",
  authDomain: "dafh-b2b42.firebaseapp.com",
  projectId: "dafh-b2b42",
  storageBucket: "dafh-b2b42.firebasestorage.app",
  messagingSenderId: "448602095803",
  appId: "1:448602095803:web:f562f87fb7c4d85fd1a99e",
  measurementId: "G-P6WP1FSK1X"
};

// Next.js uyumlu başlatma mantığı
// Uygulama daha önce başlamışsa onu kullan, başlamamışsa yeni başlat
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Diğer dosyalarda (page.tsx gibi) kullanacağımız 'auth' nesnesi
export const auth = getAuth(app);