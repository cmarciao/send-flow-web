import { getDocs, Query } from "firebase/firestore";

export async function collectionData<T>(query: Query, idField: string = 'id') {
    const querySnapshot = await getDocs(query);

    return querySnapshot.docs.map((snap: any) => {
        const data = snap.data();

        if (idField) {
            data[idField] = snap.id;
        }

        return data as T;
    });
}