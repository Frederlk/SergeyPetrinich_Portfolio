import { sortData } from "./../helpers/functions";
import { IPet } from "./../models/models";
import { db } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";

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
                    return { data: PET.slice().sort((a, b) => sortData(a.releaseDate, b.releaseDate)) };
                } catch (e) {
                    return { error: e };
                }
            },
        }),
    }),
});
