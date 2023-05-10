import { useEffect, useState } from 'react';

// material-ui
import { Card, Container, Divider, Grid, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { RootState } from 'store';
import { useLazyQuery } from '@apollo/client';
import {
  COLLECTION_LIST,
  GET_DASHBOARD_ALL,
  GET_DASHBOARD_BY_ID,
} from '../../graphQl/query'
import Loader from 'ui-component/Loader';
import { updateDashboard } from 'store/slices/counter';
import Stats from 'components/dashboard/Default/Stats';
import green from '@mui/material/colors/green';
import red from '@mui/material/colors/red';
import BubbleChart from 'components/dashboard/BubbleChart';
import { data1, data2, data3 } from 'components/dashboard/BubbleChart/datss';
import CustomerSatisfactionCard from 'components/widget/Statistics/CustomerSatisfactionCard';
import SideIconCard from 'ui-component/cards/SideIconCard';
import RevenueCard from 'ui-component/cards/RevenueCard';
import { gridSpacing } from 'store/constant';
import { pink } from '@mui/material/colors';
import { AccountCircleTwoTone } from '@mui/icons-material';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentTwoTone';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';




const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = window.localStorage.getItem('accessToken');
  const [bubbleCondition, setBubbleCondition] = React.useState<Boolean>(false);
  const theme = useTheme();


  const selectedId = useSelector(
    (state: RootState) => state.collectionId.collectionId
  );
  const selectedTitle = useSelector(
    (state: RootState) => state.collectionId.title
  );

  const [
    getDashboardById,
    { loading: loadingDashboard, error: errorDashboard, data: dataDashboard },
  ] = useLazyQuery(GET_DASHBOARD_BY_ID);
  const [
    getDashboardAll,
    {
      loading: loadingDashboardAll,
      error: errorDashboardAll,
      data: dataDashboardAll,
    },
  ] = useLazyQuery(GET_DASHBOARD_ALL);

  React.useEffect(() => {
    getDashboardAll({
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
  }, []);

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
    });
  }, [selectedId]);

  useEffect(() => {
    setLoading(false);
  }, []); // <-- Move this hook outside of the conditional

  if (loadingDashboard) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Loader />
      </div>
    );
  }

  console.log(errorDashboard)

  if (errorDashboard) {
    return <p>Error :(</p>;
  }

  dispatch(updateDashboard(dataDashboardAll));

  const handleToggleBubbleCondition = () => {
    setBubbleCondition(!bubbleCondition);
  }



  return (
    <React.Fragment>
    {/* <Helmet title="Default Dashboard" /> */}

   

    <Grid container spacing={gridSpacing} sx={{paddingBottom: '20px'}} >
    <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <RevenueCard
          primary="Total Join"
          secondary={dataDashboard?.getDashboardHomeById?.totalJoin}
          content="-"
          iconPrimary={AccountCircleTwoTone}
          color={theme.palette.secondary.main}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <RevenueCard
          primary="Total Badge Claim"
          secondary={dataDashboard?.getDashboardHomeById?.totalBadgeClaim}
          content="-"
          iconPrimary={AssessmentOutlinedIcon}
          color={theme.palette.primary.dark}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <RevenueCard
          primary="Total Reward "
          secondary={dataDashboard?.getDashboardHomeById?.totalRewardParticipant}
          content="-"
          iconPrimary={MonetizationOnTwoToneIcon}
          color={theme.palette.orange.dark}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <RevenueCard
          primary="Total Sales"
          secondary={`RM ${dataDashboard?.getDashboardHomeById?.totalRawPoints?.toLocaleString()}`}
          content="-"
          iconPrimary={CalendarTodayOutlinedIcon}
          color={pink[500]}
          />
      </Grid>
</Grid>
    

    {/* <Button
      variant="contained"
      color="primary"
      onClick={handleToggleBubbleCondition}
    >testing </Button> */}

    <Card sx={{ padding: '20px' }}>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            borderRight: '2px dotted grey ',
          }}
        >
          <Container>
            <BubbleChart
              key={`bubble-chart`}
              bubblesData={data1}
              width={460}
              height={470}
              textFillColor="white"
              backgroundColor="white"
              minValue={1}
              maxValue={150}
              move={true}
              cardContentValue={'PRE PURCHASE'}
              cardContentColor={'rgb(0, 123, 255)'}
            />
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            borderRight: '2px dotted grey ',
          }}
        >
          <BubbleChart
            key={`bubble-chart`}
            bubblesData={data2}
            width={550}
            height={470}
            textFillColor="white"
            backgroundColor="white"
            minValue={1}
            maxValue={150}
            move={true}
            cardContentValue={'PURCHASE'}
            cardContentColor={'rgb(40, 167, 69)'}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <BubbleChart
            key={`bubble-chart`}
            bubblesData={data3}
            width={550}
            height={470}
            textFillColor="white"
            backgroundColor="white"
            minValue={1}
            maxValue={150}
            move={true}
            cardContentValue={'POST PURCHASE'}
            cardContentColor={'rgb(255, 140, 0)'}
          />
        </Grid>
      </Grid>
    </Card>
  </React.Fragment>
  );
};

Dashboard.Layout = 'authGuard';
export default Dashboard;
