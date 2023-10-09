import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyD9A4YI-F2owAmvYBnzK1XxUcut2UZflJo",
    authDomain: "stlist-4402f.firebaseapp.com",
    databaseURL: "https://stlist-4402f.firebaseio.com",
    projectId: "stlist-4402f",
    storageBucket: "stlist-4402f.appspot.com",
    messagingSenderId: "955361731943",
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };
export default app;
