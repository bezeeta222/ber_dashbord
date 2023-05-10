import React from 'react'
import type { ReactElement } from 'react'
import styled from '@emotion/styled'
import NextLink from 'next/link'


import { Star, Award, Slack } from 'react-feather'

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Chip as MuiChip,
  CircularProgress,
  Divider as MuiDivider,
  Grid as MuiGrid,
  LinearProgress as MuiLinearProgress,
  Link,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography as MuiTypography,
} from '@mui/material'
import { spacing, SpacingProps } from '@mui/system'

import { useRouter } from 'next/router'
import {
  ACTIVITY_DETAIL_COUNT,
  GET_OWN_BADGE,
  GET_USER_OWN_REWARD,
  POINT_HISTORYBY_ID,
} from '../../graphQl/query'
import { useLazyQuery } from '@apollo/client'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing)
const Card = styled(MuiCard)(spacing)
const Divider = styled(MuiDivider)(spacing)
const Grid = styled(MuiGrid)(spacing)
const Spacer = styled.div(spacing)

interface TypographyProps extends SpacingProps {
  component?: string
}
const Typography = styled(MuiTypography)<TypographyProps>(spacing)

const Centered = styled.div`
  text-align: center;
`

const StatsIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 32px;

  svg {
    width: 32px;
    height: 32px;
  }
`
function Profile() {
  const router = useRouter()
  const tier = router.query.tier
  const points = router.query.points
  const rawPoints = router.query.rawPoints
  const email = router.query.email
  const dateJoined = router.query.dateJoined
  // const accessToken = useSelector(
  //   (state: RootState) => state.account.token
  // )
  const accessToken = window.localStorage.getItem('accessToken')
  const userId = useSelector((state: RootState) => state.collectionId.tokenId)

  const collectionId = useSelector(
    (state: RootState) => state.collectionId.collectionId
  )

  const [
    getPointHistoryById,
    { loading: loadingHistory, data: historyData, error: historyError },
  ] = useLazyQuery(POINT_HISTORYBY_ID, {
    onError: error => {
      console.log('Error fetching activity details count:', error)
      router.push('/user')
    },
  })
  const [
    getActivityDetailsCount,
    { loading: loadingActivity, data: dataActivity, error: errorActivity },
  ] = useLazyQuery(ACTIVITY_DETAIL_COUNT, {
    onError: error => {
      console.log('Error fetching activity details count:', error)
      router.push('/user')
    },
  })

  const [
    getUserOwnReward,
    { loading: loadingReward, data: dataReward, error: errorReward },
  ] = useLazyQuery(GET_USER_OWN_REWARD, {
    onError: error => {
      console.log('Error fetching activity details count:', error)
      router.push('/user')
    },
  })

  const [
    getUserBadge,
    { loading: loadingBadge, data: dataBadge, error: errorBadge },
  ] = useLazyQuery(GET_OWN_BADGE, {
    onError: error => {
      console.log('Error fetching activity details count:', error)
      router.push('/user')
    },
  })

  console.log(
    'dataActivity' + JSON.stringify(dataActivity?.activityDetailsCount)
  )
  // // console.log(userId)
  // // console.log("historyData" + historyData)
  // // console.log("dataReward" + dataReward)
  // console.log("historyError" + historyError)
  // console.log("errorActivity" + errorActivity)
  // console.log("errorReward" + errorReward)
  // console.log("errorBadge" + errorBadge)


  React.useEffect(() => {
    getPointHistoryById({
      variables: { collectionId: collectionId, userId: userId },
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    })
    getActivityDetailsCount({
      variables: { collectionId: collectionId, userId: userId },
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    })
    getUserOwnReward({
      variables: { collectionId: collectionId, userId: userId },
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    })
    getUserBadge({
      variables: { collectionId: collectionId, userId: userId },
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    })
  }, [])

  if (loadingHistory || loadingActivity || loadingReward || loadingBadge) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </div>
    )
  }
  if (errorActivity && historyError && errorReward && errorBadge)
    return <p>Error :( bye byee</p>

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'collectionTitle', headerName: 'Collection Title', flex: 1 },
    // { field: 'invoiceMessage', headerName: 'Invoice Message', flex: 1 },
    { field: 'details', headerName: 'Details', flex: 1 },
    // { field: 'rawPoints', headerName: 'Raw Points', type: 'number', flex: 1 },
    { field: 'action', headerName: 'Action', flex: 1 },
    {
      field: 'created',
      headerName: 'Created',
      width: 200,
      valueFormatter: (params: any) =>
        new Date(params.value).toLocaleDateString('en-US'),
    },
  ]

  const rows =
    historyData?.pointHistoryById?.edges?.map((edge: any) => ({
      id: edge.node.id,
      collectionTitle: edge.node.collection?.title,
      invoiceMessage: edge.node.collection?.invoiceMessage,
      details: edge.node.details,
      rawPoints: edge.node.rawPoints,
      action: edge.node.action,
      created: edge.node.created,
    })) ?? []

  const { pointsCount, badgeCount, rewardsCount } =
    dataActivity?.activityDetailsCount ?? {}

  return (
    <React.Fragment>
      <Grid
        container
        spacing={6}
        style={{ height: '100%', flexDirection: 'row' }}
      >
        <Grid item xs={12} lg={4} xl={3}>
          <Card mb={6}>
            <CardContent>
              <Centered>
                <Typography variant="body2" component="div" gutterBottom>
                  <Box fontWeight="fontWeightMedium">{email} </Box>
                  <Box fontWeight="fontWeightRegular">
                    {' '}
                    Tier <b>{tier}</b> 👑
                  </Box>
                </Typography>
              </Centered>
            </CardContent>
          </Card>
          <Card mb={6}>
            <CardContent>
              <Spacer mb={4} />

              <Grid container spacing={20}>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="body2" align="center">
                        Total Points
                      </Typography>
                      <Spacer mb={4} />

                      <Typography variant="h6" align="center">
                        {points}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="body2" align="center"></Typography>
                      <Spacer mb={4} />

                      <Typography variant="h6" align="center"></Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="body2" align="center">
                        Total Spent
                      </Typography>
                      <Spacer mb={4} />
                      <Typography variant="h6" align="center">
                        {/* {rawPoints.toLocaleString("en-MY", {
                          style: "currency",
                          currency: "MYR",
                        })} */}
                        {rawPoints}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card mb={6}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Account Info
              </Typography>
              <Divider />
              <Spacer mb={4} />

              {/* <Grid container direction="column" alignItems="flex-start" mb={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" align="center" gutterBottom>
                    Full Name
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    {row.name}
                  </Typography>
                </Grid>
              </Grid> */}
              <Grid container direction="column" alignItems="flex-start" mb={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" align="center" gutterBottom>
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    {email}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column" alignItems="flex-start" mb={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" align="center" gutterBottom>
                    dateJoined
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    {/* {new Date(dateJoined).toLocaleDateString("en-US")} */}
                    {dateJoined}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card mb={6}>
            <CardContent style={{ maxHeight: '400px' }}>
              {dataBadge &&
                dataBadge.getUserOwnBadges &&
                dataBadge.getUserOwnBadges.length > 0 ? (
                <>
                  <Typography variant="h6" gutterBottom>
                    Badge
                  </Typography>
                  <Spacer mb={4} />
                  <Divider />
                  <Spacer mb={4} />

                  <Grid container spacing={2}>
                    {dataBadge.getUserOwnBadges.map(
                      (image: any, index: any) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <img
                            src={
                              process.env.NEXT_PUBLIC_GRAPHQL_IMAGE +
                              image?.images
                            }
                            alt={`Image ${index}`}
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </>
              ) : (
                <Typography variant="h6" gutterBottom>
                  {/* <CircularProgress /> */}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8} xl={9}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={4}>
              <Box position="relative">
                <Card mb={6} pt={2}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      <Box fontWeight="fontWeightRegular">Points</Box>
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                      {pointsCount}
                    </Typography>
                    <StatsIcon>
                      <Star />
                    </StatsIcon>
                  </CardContent>
                </Card>
              </Box>{' '}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box position="relative">
                <Card mb={6} pt={2}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      <Box fontWeight="fontWeightRegular">Badges</Box>
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                      {badgeCount}
                    </Typography>
                    <StatsIcon>
                      <Award />
                    </StatsIcon>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box position="relative">
                <Card mb={6} pt={2}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      <Box fontWeight="fontWeightRegular">Rewards</Box>
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                      {rewardsCount}
                    </Typography>

                    <StatsIcon>
                      <Slack />
                    </StatsIcon>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Card mb={6}>
            <CardContent>
              <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                  rowsPerPageOptions={[5, 10, 25]}
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  checkboxSelection={false}
                  components={{
                    Toolbar: GridToolbar,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Profile.Layout = 'authGuard';
export default Profile;
