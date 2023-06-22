import {
  doc,
  getFirestore,
  getDoc as firebaseGetDoc,
} from "firebase/firestore";
import { firebaseApp } from ".";

export const useFirestoreDoc: <T>(collectionNames: string[]) => {
  getDoc: (docId: string) => Promise<T | "Not found">;
} = (collectionNames) => {
  const db = getFirestore(firebaseApp);
  const collectionPath = collectionNames.join("/");

  const getDoc = async (docId: string): Promise<any> => {
    const docRef = doc(db, collectionPath, docId);
    const docSnap = await firebaseGetDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "Not found";
    }
  };

  return { getDoc };
};
