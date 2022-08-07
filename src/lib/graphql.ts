import { gql } from '@apollo/client';

export const GET_DISPLAY_DATA = gql`
  query ($pageNumber: Int) {
    Page(page: $pageNumber, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false, status: RELEASING) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        description
        genres
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        format
        status
        episodes
        duration
        season
        averageScore
        popularity
        siteUrl
      }
    }
  }
`;
