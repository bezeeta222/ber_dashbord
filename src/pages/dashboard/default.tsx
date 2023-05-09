import { useEffect, useState } from 'react';

// material-ui
import { Card, Container, Divider, Grid, Typography } from '@mui/material';
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



const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = window.localStorage.getItem('accessToken');
  const [bubbleCondition, setBubbleCondition] = React.useState<Boolean>(false);

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

    <Grid justifyContent="space-between" container spacing={6}>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          Dashboard
        </Typography>
        {/* <Typography variant="subtitle1">
          {t("Welcome back")}, Lucy! {t("We've missed you")}.{" "}
          <span role="img" aria-label="Waving Hand Sign">
            👋
          </span>
        </Typography> */}
      </Grid>

      {/* <CollectionDropdown /> */}
    </Grid>

    {/* <Divider my={6} /> */}

    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <Stats
          title="Total Join"
          amount={dataDashboard?.getDashboardHomeById?.totalJoin}
          chip="Today"
          percentagetext="+26%"
          percentagecolor={green[500]}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <Stats
          title="Total Badge Claim"
          amount={dataDashboard?.getDashboardHomeById?.totalBadgeClaim}
          chip="Annual"
          percentagetext="-14%"
          percentagecolor={red[500]}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <Stats
          title="Total Reward "
          amount={dataDashboard?.getDashboardHomeById?.totalRewardParticipant}
          chip="Monthly"
          percentagetext="+18%"
          percentagecolor={green[500]}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl>
        <Stats
          title="Total Purchases"
          amount={`RM ${dataDashboard?.getDashboardHomeById?.totalRawPoints?.toLocaleString()}`}
          chip="Yearly"
          percentagetext="-9%"
          percentagecolor={red[500]}
          // illustration="/static/img/illustrations/waiting.png"
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
