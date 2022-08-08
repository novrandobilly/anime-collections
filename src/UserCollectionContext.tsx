import { createContext, useReducer } from 'react';
import { AnimeType } from './lib/data-types';

type singleCollectionType = {
  collectionTitle: string;
  animeCollection: AnimeType[];
};
type UserCollectionContextType = {
  collectionList: singleCollectionType[];
  addCollection: (collectionName: string) => void;
  addAnimesToManyCollections: (animes: AnimeType[], collectionNames: string[]) => void;
  removeAnimeFromCollection: (collectionName: string, animeId: number) => void;
  removeCollection: (collectionName: string) => void;
  editCollectionName: (collectionName: string, newName: string) => void;
};

const UserCollectionContext = createContext<UserCollectionContextType>({
  collectionList: [],
  addCollection: (collectionName: string) => {},
  addAnimesToManyCollections: (animes: AnimeType[], collectionNames: string[]) => {},
  removeAnimeFromCollection: (collectionName: string, animeId: number) => {},
  removeCollection: (collectionName: string) => {},
  editCollectionName: (collectionName: string, newName: string) => {},
});

const reducer = (state: singleCollectionType[], action: any) => {
  switch (action.type) {
    case 'ADD_COLLECTION':
      return [...state, { collectionTitle: action.collectionName, animeCollection: [] }];
    case 'ADD_ANIMES_TO_MANY_COLLECTIONS':
      return state.map((collection) => {
        for (let collectionInput of action.collectionNames) {
          if (collection.collectionTitle === collectionInput) {
            return {
              ...collection,
              animeCollection: [...collection.animeCollection, ...action.animes].filter(
                (item, index, fullArray) => index === fullArray.indexOf(item)
              ),
            };
          }
        }
        return collection;
      });

    case 'REMOVE_ANIME_FROM_COLLECTION':
      return state.map((collection) => {
        if (collection.collectionTitle === action.collectionName) {
          return {
            ...collection,
            animeCollection: collection.animeCollection.filter((anime) => anime.id !== action.animeId),
          };
        }
        return collection;
      });

    case 'REMOVE_COLLECTION':
      return state.filter((collection) => collection.collectionTitle !== action.collectionName);
    case 'EDIT_COLLECTION_NAME':
      return state
        .map((collection) => {
          if (collection.collectionTitle === action.collectionName) {
            return {
              ...collection,
              collectionTitle: action.newName,
            };
          }
          return collection;
        })
        .filter((collection) => collection.collectionTitle !== action.collectionName);
    default:
      return state;
  }
};

const initialState: singleCollectionType[] = [];

export const UserCollectionContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [collectionList, dispatch] = useReducer(reducer, initialState);
  return (
    <UserCollectionContext.Provider
      value={
        {
          collectionList,
          addCollection: (collectionName: string) => dispatch({ type: 'ADD_COLLECTION', collectionName }),
          addAnimesToManyCollections: (animes: AnimeType[], collectionNames: string[]) =>
            dispatch({ type: 'ADD_ANIMES_TO_MANY_COLLECTIONS', animes, collectionNames }),
          removeAnimeFromCollection: (collectionName: string, animeId: number) =>
            dispatch({ type: 'REMOVE_ANIME_FROM_COLLECTION', collectionName, animeId }),
          removeCollection: (collectionName: string) => dispatch({ type: 'REMOVE_COLLECTION', collectionName }),
          editCollectionName: (collectionName: string, newName: string) =>
            dispatch({ type: 'EDIT_COLLECTION_NAME', collectionName, newName }),
        } as UserCollectionContextType
      }>
      {children}
    </UserCollectionContext.Provider>
  );
};

export default UserCollectionContext;
