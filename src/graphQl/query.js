import { gql } from '@apollo/client';

export const COLLECTION_LIST = gql`
  query collection_list {
    collectionList {
      id
      title
    }
  }
`;

export const POINT_LIST = gql`
  query pointlist($collectionId: ID!) {
    pointList(collectionId: $collectionId) {
      success
      message
      points {
        tokenId
        tier
        points
        rawPoints
        user {
          id
          email
          isActive
          dateJoined
        }
      }
    }
  }
`;

export const ACTIVITY_DETAIL_COUNT = gql`
  query activityDetailsCount($collectionId: ID!, $userId: ID!) {
    activityDetailsCount(collectionId: $collectionId, userId: $userId) {
      pointsCount
      badgeCount
      rewardsCount
    }
  }
`;

export const POINT_HISTORYBY_ID = gql`
  query pointHistoryById($collectionId: ID!, $userId: ID!) {
    pointHistoryById(collectionId: $collectionId, userId: $userId, orderby: ["created"]) {
      edges {
        node {
          id
          collection {
            title
            invoiceMessage
          }
          details
          rawPoints
          action
          created
        }
      }
    }
  }
`;

export const GET_DASHBOARD_BY_ID = gql`
  query getDashboardHomeById($collectionId: ID!) {
    getDashboardHomeById(collectionId: $collectionId) {
      id
      totalJoin
      totalBadgeClaim
      totalRewardParticipant
      totalRawPoints
      collection {
        active
        maxClaim
        claimable
      }
    }
  }
`;

export const GET_DASHBOARD_ALL = gql`
  query get_dashboard_all {
    getDashboardHomeAll {
      collection {
        id
        title
        dashboardSet {
          totalJoin
          totalBadgeClaim
          totalRawPoints
          totalRewardParticipant
        }
      }
    }
  }
`;

export const GET_USER_OWN_REWARD = gql`
  query get_user_own_reward($collectionId: ID!, $userId: ID!) {
    getUserOwnReward(collectionId: $collectionId, userId: $userId) {
      title
      images
    }
  }
`;

export const GET_OWN_BADGE = gql`
  query get_own_badge($collectionId: ID!, $userId: ID!) {
    getUserOwnBadges(collectionId: $collectionId, userId: $userId) {
      id
      title
      images
      stickerImages
      collection {
        id
      }
    }
  }
`;
