const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { getApp, getApps, initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");
const fs = require('fs');
const mime = require('mime');
const path = require('path');

// Initialize Firebase SDK
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "july-a9a1f.firebaseapp.com",
    projectId: "july-a9a1f",
    storageBucket: "july-a9a1f.appspot.com",
    messagingSenderId: "53494904497",
    appId: "1:53494904497:web:a059c13e3cf2552ee25490",
};

// Initialize Firebase
const firebaseApp =
    getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage service
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

const uploadImage = async (imagePath, imagePos, data) => {
    const imageRef = ref(storage, imagePath);
    const imageExtension = path.extname(imagePos);
    const imageType = mime.getType(imageExtension);

    const metaData = {
        contentType: imageType
    }
    const snapshot = await uploadBytes(imageRef, data, metaData)
    const imageUrl = await getDownloadURL(snapshot.ref);

    return imageUrl;
}
const setImageInFirestore = async (collection, name, content) => {
    await setDoc(doc(db, collection, name), content);

    return true;
}

const uploadImageToFirebase = (dirPath) => {

    const images = fs.readdirSync(dirPath);

    // Read the image file
    images.forEach((imagePath) => {
        if (imagePath === '.DS_Store') return;

        const imagePos = `${dirPath}/${imagePath}`;

        console.log(imagePos);

        fs.readFile(imagePos, async (error, data) => {
            if (error) return;

            const date = imagePath.split('-')[0].replaceAll(';', ':');
            const day = date.split(":")[2]
            const hour = imagePath.split('-')[1].split(';')[0];
            const minute = imagePath.split('-')[1].split(';')[1];
            const second = imagePath.split('-')[1].split(';')[2].split('.')[0];

            const downloadURL = await uploadImage(imagePath, imagePos, data);

            const metaData = { imageUrl: downloadURL, name: `${minute}-${second}`, photography: "Б.Инжинааш" }
            await setImageInFirestore(`moments/2008:07:${day}-${hour}/photos`, `${minute}-${second}`, metaData);
        });
    })
}
// import "../../../../julyPics/elbegzaya"
const dirPath = '../../../../julyPics/compressed-injinaash';

uploadImageToFirebase(dirPath);