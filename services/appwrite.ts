// track the searches made by a user
// EXPO_PUBLIC_APPWRITE_PROJECT_ID=684423c5003c0d27a65d
// EXPO_PUBLIC_APPWRITE_DATABASE_ID=68483e0c0007611680af
// EXPO_PUBLIC_APPRWRITE_COLLECTION_ID=68483e4400010ed8714f

import {Client, Databases, ID, Query} from "react-native-appwrite";

const DATABASE_ID= "68483e0c0007611680af";
const COLLECTION_ID = "68483e4400010ed8714f";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
   try {


       const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
           Query.equal('searchTerm', query)
       ])


       if (result.documents.length > 0) {
           const existingMovie = result.documents[0];

           await database.updateDocument(
               DATABASE_ID,
               COLLECTION_ID,
               existingMovie.$id,
               {
                   $inc: {
                       searchCount: existingMovie.searchCount + 1
                   }
               }
           )
       } else {
           await database.createDocument(
               DATABASE_ID,
               COLLECTION_ID,
               ID.unique(), {
                   searchTerm: query,
                   movie_id: movie.id,
                   count: 1,
                   poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
               }
           )
       }
   } catch (error) {
       console.log(error);
       throw error;
   }
    // if a document is found increment the searchCount field
    // if no document is found in Appwrite database -> 1

}
