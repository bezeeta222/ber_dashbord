import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import type { ReactElement } from 'react'
import * as Yup from 'yup'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { Formik } from 'formik'
import Dropzone, { useDropzone } from 'react-dropzone'

import {
  Alert as MuiAlert,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  CircularProgress,
  Divider as MuiDivider,
  Grid,
  Link,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { spacing } from '@mui/system'

import { useLazyQuery, useMutation } from '@apollo/client'
import { COLLECTION_LIST, GET_DASHBOARD_BY_ID } from '../../graphQl/query'
import { CREATE_EVENT } from '../../graphQl/mutation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { updateCOllectionId, updateTitle } from 'store/slices/counter'

const Divider = styled(MuiDivider)(spacing)
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing)
const Card = styled(MuiCard)(spacing)
const Alert = styled(MuiAlert)(spacing)
const Button = styled(MuiButton)(spacing)

const initialValues = {
  collectionId: '',
  details: '',
  title: '',
  venue: '',
  location: '',
  startDate: '',
  endDate: '',
}

const validationSchema = Yup.object().shape({
  details: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  venue: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  startDate: Yup.date().required('Start Date is required'),
  endDate: Yup.date()
    .required('End Date is required')
    .min(Yup.ref('startDate'), 'End Date must be later than Start Date'),
})

function FormikPage() {
  const dispatch = useDispatch()
  const accessToken = window.localStorage.getItem('accessToken')
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null)
  const [fileInfo, setFileInfo] = useState('')

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2 MB')
      return
    }
    setUploadedFile(file)
    setFileInfo(`${file.name} (${file.size} bytes)`)
  }

  const [
    submitEvent,
    { loading: loadingEvent, error: errorEvent, data: dataEvent },
  ] = useMutation(CREATE_EVENT)
  const selectedId = useSelector(
    (state: RootState) => state.collectionId.collectionId
  )
  const selectedTitle = useSelector(
    (state: RootState) => state.collectionId.title
  )

  const handleSubmit = async (
    values: any,
    { resetForm, setErrors, setStatus, setSubmitting }: any
  ) => {
    try {
      const startDate = new Date(values.startDate)
      const endDate = new Date(values.endDate)
      const isoStartDate = startDate.toISOString()
      const isoEndDate = endDate.toISOString()

      const variables = {
        collectionId: selectedId,
        details: values.details,
        endDate: isoEndDate,
        startDate: isoStartDate,
        title: values.title,
        venue: values.venue,
        location: values.location,
        file: uploadedFile,
      }

      const response = await submitEvent({
        variables,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      })

      resetForm()
      setStatus({ sent: true })
      setSubmitting(false)
      setFileInfo('')
    } catch (error) {
      // setStatus({ sent: true });
      // setSubmitting(false);
      console.error('Error creating event:', error)
    }
  }

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
      getDashboardById({ variables: { collectionId: firstCollection.id } })
      // console.log('firstCollection' + firstCollection);
      if (selectedId == 0) {
        dispatch(updateCOllectionId(firstCollection.id))
        dispatch(updateTitle(firstCollection.title))
      }
    },
  })

  const [
    getDashboardById,
    { loading: loadingDashboard, error: errorDashboard, data: dataDashboard },
  ] = useLazyQuery(GET_DASHBOARD_BY_ID)

  React.useEffect(() => {
    getCollectionList({
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    })
  }, [])

  React.useEffect(() => {
    getDashboardById({
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: 'image/*',
    maxSize: 2 * 1024 * 1024,
    multiple: false,
  })

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          status,
          setFieldValue,
        }) => (
          <Card mb={6}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Events Form
              </Typography>

              {status && status.sent && (
                <Alert severity="success" my={3}>
                  Your data has been submitted successfully!
                </Alert>
              )}

              {isSubmitting ? (
                <Box display="flex" justifyContent="center" my={6}>
                  <CircularProgress />
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <TextField
                        name="title"
                        label="title"
                        value={values.title}
                        error={Boolean(touched.title && errors.title)}
                        fullWidth
                        helperText={touched.title && errors.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ marginY: '20px' }}
                      />
                    </Grid>

                    <Grid item md={12}>
                      <TextField
                        name="details"
                        label="details"
                        value={values.details}
                        error={Boolean(touched.details && errors.details)}
                        fullWidth
                        helperText={touched.details && errors.details}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ marginY: '20px' }}
                      />
                    </Grid>

                    <Grid item md={12}>
                      <TextField
                        name="venue"
                        label="venue"
                        value={values.venue}
                        error={Boolean(touched.venue && errors.venue)}
                        fullWidth
                        helperText={touched.venue && errors.venue}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ marginY: '20px' }}
                      />
                    </Grid>

                    <Grid item md={12}>
                      <TextField
                        name="location"
                        label="location"
                        value={values.location}
                        error={Boolean(touched.location && errors.location)}
                        fullWidth
                        helperText={touched.location && errors.location}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ marginY: '20px' }}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField
                        name="startDate"
                        label="Start Date"
                        value={values.startDate}
                        error={Boolean(touched.startDate && errors.startDate)}
                        fullWidth
                        helperText={touched.startDate && errors.startDate}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="date"
                        variant="outlined"
                        sx={{ marginY: '20px' }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField
                        name="endDate"
                        label="End Date"
                        value={values.endDate}
                        error={Boolean(touched.endDate && errors.endDate)}
                        fullWidth
                        helperText={touched.endDate && errors.endDate}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="date"
                        variant="outlined"
                        sx={{ marginY: '20px' }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <div
                        {...getRootProps()}
                        style={{
                          border: '2px dashed #666',
                          borderRadius: '5px',
                          padding: '20px',
                          textAlign: 'center',
                        }}
                      >
                        <input {...getInputProps()} />
                        {fileInfo ? (
                          <p>{fileInfo}</p>
                        ) : isDragActive ? (
                          <p>Drop the file here ...</p>
                        ) : (
                          <p>
                            Drag and drop a file here, or click to select a file
                            to upload
                          </p>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                  <Box display="flex" justifyContent="flex-end" mt={3}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      mt={3}
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              )}
            </CardContent>
          </Card>
        )}
      </Formik>
    </React.Fragment>
  )
}

FormikPage.Layout = 'authGuard';
export default FormikPage;

