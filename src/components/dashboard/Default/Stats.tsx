import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { rgba } from 'polished'

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from '@mui/material'
import { spacing } from '@mui/system'

const illustrationCardStyle = (props: any) => css`
  ${props.illustration &&
  props.theme.palette.mode !== 'dark' &&
  `
    background: ${rgba(props.theme.palette.primary.main, 0.125)};
    color: ${props.theme.palette.primary.main};
  `}
`

// const Card = styled(MuiCard)<{ illustration?: string }>`
//   position: relative;
//   margin-bottom: ${props => props.theme.spacing(6)};

//   ${illustrationCardStyle}
// `

const Card = styled(MuiCard)<{ illustration?: string }>`
  position: relative;

  ${illustrationCardStyle}
`


const Typography = styled(MuiTypography)(spacing)

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
  }
`



const illustrationPercentageStyle = (props: any) => css`
  ${props.illustration &&
  props.theme.palette.mode !== 'dark' &&
  `
    color: ${rgba(props.theme.palette.primary.main, 0.85)};
  `}
`





interface StatsProps {
  title: string
  amount: string
  chip: string
  percentagetext: string
  percentagecolor: string
  illustration?: string
}

const Stats = ({
  title,
  amount,
  chip,
  percentagetext,
  percentagecolor,
  illustration,
}: StatsProps) => {
  return (
    <Card illustration={illustration}>
      <CardContent>
        <Typography variant="h6" mb={4}>
          {title}
        </Typography>
        <Typography variant="h3" mb={3}>
          <Box fontWeight="fontWeightRegular">{amount}</Box>
        </Typography>
        {/* <Percentage
          variant="subtitle2"
          color="textSecondary"
          percentagecolor={percentagecolor}
          illustration={illustration}
        >
          <span>{percentagetext}</span> Since last month
        </Percentage> */}
        {/* {!illustration && <Chip label={chip} />} */}
      </CardContent>

      {/* {!!illustration && (
        <IllustrationImage src={illustration} alt="Illustration" />
      )} */}
    </Card>
  )
}

export default Stats
