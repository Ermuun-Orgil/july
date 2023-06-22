import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from ".";
import { useEffect, useState } from "react";

export const useFirestoreCollection: <T>(collectionNames: string[]) => {
  data: T;
  loading: boolean;
} = (collectionNames) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const db = getFirestore(firebaseApp);
  const collectionPath = collectionNames.join("/");

  const sendRequest = async () => {
    const collectionRef = collection(db, collectionPath);
    const querySnapshot = await getDocs(collectionRef);

    const convertedData = querySnapshot.docs.map((cur) => ({
      ...cur.data(),
      id: cur.id,
    }));

    setData(convertedData);
    setLoading(false);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return { loading, data };
};
