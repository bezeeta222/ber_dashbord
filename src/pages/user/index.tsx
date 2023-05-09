import React from 'react'
import type { ReactElement } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Button, Menu, MenuItem } from '@mui/material'

import {
  Card as MuiCard,
  Divider as MuiDivider,
  Grid,
  Paper as MuiPaper,
  Typography,
} from '@mui/material'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { spacing } from '@mui/system'

import {
  ApolloError,
  useLazyQuery,
  useMutation,
  useQuery,
} from '@apollo/client'
import { COLLECTION_LIST, POINT_LIST } from '../../graphQl/query'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import Loader from 'ui-component/Loader'
import { updateTokenId } from 'store/slices/counter'
import CollectionDropdown from 'layout/MainLayout/Header/nftCollectionDropdown'


const Card = styled(MuiCard)(spacing)
const Divider = styled(MuiDivider)(spacing)
const Paper = styled(MuiPaper)(spacing)

const columns: GridColDef[] = [
    // { field: 'id', headerName: 'Token ID', width: 150 },
    { field: 'userId', headerName: 'userId', width: 150 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'tier', headerName: 'Tier', flex: 1 },
    { field: 'points', headerName: 'Points', flex: 1 },
    { field: 'rawPoints', headerName: 'Raw Points', flex: 1 },
    // { field: "user", headerName: "User", width: 200 },
    // { field: "dateJoined", headerName: "Date Joined", width: 200 },
    {
      field: 'dateJoined',
      headerName: 'Date Joined',
      width: 200,
      valueFormatter: (params: any) =>
        new Date(params.value).toLocaleDateString('en-US'), // Format date as desired
    },
  ]

const User = () => {
    const selectedId = useSelector(
        (state: RootState) => state.collectionId.collectionId
      )
      const selectedTitle = useSelector(
        (state: RootState) => state.collectionId.title
      )
      // const tokenId = useSelector((state: RootState) => state.collectionId.tokenId)
      const userId = useSelector((state: RootState) => state.collectionId.tokenId)
    
      const dispatch = useDispatch()
      const router = useRouter()
      const accessToken = window.localStorage.getItem('accessToken')
      // const accessToken = useSelector((state: RootState) => state.collectionId.token);
    
      const [
        getPointList,
        { loading: loadingPointList, error: errorPointList, data: dataPointList },
      ] = useLazyQuery(POINT_LIST)
    
      React.useEffect(() => {
        getPointList({
          variables: {
            collectionId: selectedId,
          },
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        })
      }, [selectedId])
    
      console.log(dataPointList?.dataPointList?.pointList?.points)
    
      const rows =
        dataPointList?.pointList?.points?.map((point: any, index: number) => ({
          // id: point.tokenId || 0,
          userId: point.user ? point.user.id : '-',
          id: index + 1,
          tier: point.tier || '-',
          points: point.points,
          rawPoints: point.rawPoints,
          // user: `${point.user.firstName} ${point.user.lastName}` || '',
          email: point.user ? point.user.email : '-',
          dateJoined: point.user?.dateJoined || '-',
        })) || []
    
      if (!rows.length) {
        return <Loader />
      }
    
      const handleCellClick = (params: any, event: any) => {
        const { row } = params
        const rowJson = JSON.stringify(row)
    
        var rawpoint = row.rawPoints.toLocaleString('en-MY', {
          style: 'currency',
          currency: 'MYR',
        })
    
        var date = new Date(row.dateJoined).toLocaleDateString('en-US')
    
        dispatch(updateTokenId(row.userId))
        console.log(userId)
    
        router.push({
          pathname: '/profile',
          query: {
            row: rowJson,
            collectionId: selectedId,
            // id: row.id,
            tier: row.tier,
            points: row.points,
            rawPoints: rawpoint,
            email: row.email,
            dateJoined: date,
          },
        })
      }
    
      if (loadingPointList) {
        return (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Loader />
          </div>
        )
      }
      if (errorPointList) return <p>Error :(</p>
    
      return (
        <React.Fragment>
    
          <Card mb={6}>
            <Paper>
              <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  autoPageSize
                  checkboxSelection
                  components={{
                    Toolbar: GridToolbar,
                  }}
                  onCellClick={handleCellClick}
                />
              </div>
            </Paper>
          </Card>
        </React.Fragment>
      )
};

User.Layout = 'authGuard';
export default User;
