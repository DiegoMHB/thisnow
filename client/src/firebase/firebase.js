import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase = import.meta.env.VITE_FIREBASE_API;

const firebaseConfig = {
  apiKey: firebase,
  authDomain: "thisnow-ad749.firebaseapp.com",
  projectId: "thisnow-ad749",
  storageBucket: "thisnow-ad749.firebasestorage.app",
  messagingSenderId: "948922319113",
  appId: "1:948922319113:web:38ad7de9e204d683d8d3d8",
  measurementId: "G-22DZ09SBP6"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function  uploadFile (file, location) {
  const fileExtension = file.name.split('.').pop();
  const metadata = {
    contentType: file.type, 
  };

  const storageRef = ref(storage, location + v4() + fileExtension);
  await uploadBytes(storageRef, file, metadata);
  const url = await getDownloadURL(storageRef);
  return url
}
