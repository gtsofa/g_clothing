import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCI0nYxbhLg9OsCP3ZbPuxq1q7oSs5koGc",
    authDomain: "gclothing-db.firebaseapp.com",
    databaseURL: "https://gclothing-db.firebaseio.com",
    projectId: "gclothing-db",
    storageBucket: "gclothing-db.appspot.com",
    messagingSenderId: "965698714870",
    appId: "1:965698714870:web:670a9595b21526058a80d7",
    measurementId: "G-LSF3F8RH4J"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ 
                displayName,
                email,
                createdAt,
                ...additionalData
            });
            
        }catch (error) {
            console.log('error creating user', error.message);

        }
    }

    return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
