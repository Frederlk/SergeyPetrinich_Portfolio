import { IImg, IPet } from "./../models/models";
import { db, storage } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export const firebaseAPI = createApi({
    reducerPath: "firebaseAPI",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getPets: build.query({
            async queryFn(title: string) {
                try {
                    const petRef = collection(db, title);
                    const PET: IPet[] = [];
                    const querySnapshot = await getDocs(petRef);
                    querySnapshot?.forEach((doc) => {
                        PET.push(doc.data() as IPet);
                    });
                    return { data: PET };
                } catch (e) {
                    return { error: e };
                }
            },
        }),
    }),
});
