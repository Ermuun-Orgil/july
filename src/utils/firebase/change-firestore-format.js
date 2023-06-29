const { getApp, getApps, initializeApp } = require("firebase/app");
const { getFirestore, doc, updateDoc, collection, getDocs, setDoc } = require("firebase/firestore");

// Initialize Firebase SDK
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "july-fa242.firebaseapp.com",
    projectId: "july-fa242",
    storageBucket: "july-fa242.appspot.com",
    messagingSenderId: "126323572587",
    appId: "1:126323572587:web:ec519db2a5899e1db2562e"
};

// Initialize Firebase
const firebaseApp =
    getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage service
const db = getFirestore(firebaseApp);

const change = async (docName) => {
    console.log('starts');

    const collectionRef = collection(db, `moments/${docName}/photos`);
    const querySnapshot = await getDocs(collectionRef);

    console.log('snapshot collected');

    const convertedData = querySnapshot.docs.map((cur) => ({
        ...cur.data(),
        photography: cur.data().photography === "М.Бямба-Очир" ? "Т.Бямба-Очир" : cur.data().photography,
        time: cur.id,
        date: `${docName}:${cur.id.split('-').join(":")}`
    }));

    console.log('snapshot converted');

    const momentRef = doc(db, "moments", docName);

    console.log('converted data: ', convertedData);

    await updateDoc(momentRef, {
        photos: convertedData
    });

    console.log('doc updated');

    return '';
}

change("2008:07:13-16");