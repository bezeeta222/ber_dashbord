import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { useLazyQuery } from '@apollo/client'
import { COLLECTION_LIST } from 'graphQl/query'
import { updateCOllectionId, updateTitle } from 'store/slices/counter'
import Loader from 'ui-component/Loader'


interface CollectionDropdownProps {}

const CollectionDropdown: React.FC<CollectionDropdownProps> = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const accessToken = window.localStorage.getItem('accessToken')

  const selectedId = useSelector(
    (state: RootState) => state.collectionId.collectionId
  )

  const selectedTitle = useSelector(
    (state: RootState) => state.collectionId.title
  )

  const [
    getCollectionList,
    {
      loading: loadingCollectionList,
      error: errorCollectionList,
      data: dataCollectionList,
    },
  ] = useLazyQuery(COLLECTION_LIST, {
    onCompleted: data => {
      const firstCollection = data.collectionList[0]
      // getPointList({ variables: { collectionId: firstCollection.id } })
      // console.log('firstCollection' + firstCollection)
      if (selectedId == 0) {
        dispatch(updateCOllectionId(firstCollection.id))
        dispatch(updateTitle(firstCollection.title))
      }
    },
  })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (collection: any) => {
    dispatch(updateCOllectionId(collection.id))
    dispatch(updateTitle(collection.title))
    setAnchorEl(null)
  }

  React.useEffect(() => {
    getCollectionList({
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    })
  }, [])

  if (loadingCollectionList) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Loader />
      </div>
    )
  }
  if (errorCollectionList) return <p>Error :(</p>

  return (
    <Grid justifyContent="space-between" container spacing={6}>
      <Grid item>
        <Typography variant="h3" gutterBottom></Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          {selectedTitle}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(null)}
        >
          {dataCollectionList?.collectionList.map((collection: any) => (
            <MenuItem
              key={collection.id}
              onClick={() => handleClose(collection)}
              style={{ color: 'black' }}
              disabled={!anchorEl}
            >
              {collection.title}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    </Grid>
  )
}

export default CollectionDropdown
