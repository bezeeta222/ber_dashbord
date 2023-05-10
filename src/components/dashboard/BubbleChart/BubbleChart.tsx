/*eslint-disable */

import React from 'react';
import * as d3 from 'd3';
import { forceCenter, Simulation, SimulationNodeDatum } from 'd3-force';
import { BubbleChartTypes } from './types';
import svgAlignKR from './SvgAlignKR';
import svgAlignEN from './SvgAlignEN';
import uuid from 'react-uuid';
import { Box, Card, CardContent, Container, Divider, Grid, Tooltip, Typography } from '@mui/material';

class BubbleChart extends React.Component<IBubbleChartProps, IBubbleChartState> {
  public forceData: BubbleChartTypes.ForceData[];
  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined;

  constructor(props: IBubbleChartProps) {
    super(props);
    this.state = {
      data: [],
      hoverValue: { name: '' },
      hovered: false,
      scale: { x: 0, y: 0 },
      dYdX1: { dy: 0, dx: 0 },
      dYdX2: { dy: 0, dx: 0 }
    };
    this.forceData = this.setForceData(props);
  }

  componentDidMount() {
    this.animateBubbles();
  }

  setForceData = (props: IBubbleChartProps) => {
    const d: any[] = [];
    for (let i = 0; i < props.bubblesData.length; i++) {
      d.push({ size: (props.bubblesData[i].size / 200) * 100 });
    }
    return d;
  };

  setTextPosition = (idx: number, txt: string, content: string) => {
    const { dy, dx } = this.regex.test(txt) ? svgAlignEN(idx, txt, content) : svgAlignKR(idx, txt, content);

    return { dy, dx };
  };

  animateBubbles = () => {
    if (this.props.bubblesData.length > 0) {
      this.simulatePositions(this.forceData);
    }
  };

  radiusScale = (value: d3.NumberValue) => {
    const fx = d3.scaleSqrt().range([1, 50]).domain([this.props.minValue, this.props.maxValue]);
    return fx(value);
  };

  regex = /[a-zA-Z]/;

  simulatePositions = (data: BubbleChartTypes.ForceData[]) => {
    this.simulation = d3
      .forceSimulation()
      .velocityDecay(0.2)
      .nodes(data as SimulationNodeDatum[])
      .velocityDecay(0.08)
      .force('x', d3.forceX().strength(0.2))
      .force('y', d3.forceY().strength(0.2))
      .force('charge', d3.forceManyBody())
      .force('center', forceCenter(50, 50))
      .force(
        'collide',
        d3.forceCollide((d: SimulationNodeDatum) => {
          return this.radiusScale((d as BubbleChartTypes.ForceData).size) + 1;
        })
      )
      .on('tick', () => {
        this.setState({ data });
      })
      .tick(this.props.move ? 0 : 300);
  };

  renderBubbles = (data: []) => {
    return data.map((item: { v: number; x: number; y: number }, index) => {
      const { props } = this;
      const fontSize = this.radiusScale((item as unknown as BubbleChartTypes.ForceData).size) / 3.2;
      let content = props.bubblesData.length > index ? props.bubblesData[index].name : '';
      const tooltipText = `${props.bubblesData[index].name} - Size: ${props.bubblesData[index].size}`;

      if (content.length > 8 && !this.regex.test(content)) {
        content = [content.slice(0, 9), '...'].join('');
      } else if (content.length > 20 && this.regex.test(content)) {
        content = [content.slice(0, 9), '...'].join('');
      }

      return (
        props.bubblesData[index] !== undefined && (
          <>
            <Tooltip key={`tooltip-${index}`} title={tooltipText} arrow>
              <g
                style={{ cursor: 'default' }}
                key={`g-${uuid()}`}
                transform={`translate(${props.width / 2 + item.x - 70}, ${props.height / 2 + item.y})`}
              >
                <circle
                  // onMouseEnter={() =>
                  //   this.setState({
                  //     hovered: true,
                  //     hoverValue: { name: props.bubblesData[index].name },
                  //     scale: {
                  //       x: props.width / 2 + item.x - 70,
                  //       y: props.height / 2 + item.y,
                  //     },
                  //   })
                  // }
                  // onMouseLeave={() => this.setState({ hovered: false })}
                  // style={{
                  //   cursor: this.state.hovered ? 'pointer' : 'default',
                  // }}
                  id="circleSvg"
                  r={this.radiusScale((item as unknown as BubbleChartTypes.ForceData).size)}
                  fill={props.bubblesData[index].fillColor}
                  stroke={props.bubblesData[index].theme === 'white' ? '#BDC8CF' : 'white'}
                  strokeWidth={props.bubblesData[index].theme === 'white' ? 1 : 0}
                  strokeDasharray={3}
                />
                <text
                  height={'10px'}
                  dy="6"
                  className="bubble-text"
                  fill={
                    props.bubblesData[index].theme === 'white' || props.bubblesData[index].fillColor !== undefined
                      ? this.props.textFillColor
                      : 'white'
                  }
                  textAnchor="middle"
                  fontSize={`${fontSize}px`}
                  fontWeight="normal"
                  onMouseEnter={() =>
                    this.setState({
                      hovered: true,
                      hoverValue: {
                        name: props.bubblesData[index].name
                      },
                      scale: {
                        x: props.width / 2 + item.x - 70,
                        y: props.height / 2 + item.y
                      }
                    })
                  }
                  onMouseLeave={() => this.setState({ hovered: false })}
                  style={{ cursor: this.state.hovered ? 'pointer' : 'default' }}
                >
                  {/*space line condition*/}
                  {content.split('\n').map((txt, idx) => {
                    if (idx === 0) {
                      const { dy, dx } =
                        props.bubblesData[index].dYdX1 !== undefined
                          ? props.bubblesData[index].dYdX1
                          : this.setTextPosition(idx, txt, content);
                      return (
                        <tspan dy={dy} dx={dx}>
                          {' '}
                          {txt}{' '}
                        </tspan>
                      );
                    } else if (idx === 1) {
                      const { dy, dx } =
                        props.bubblesData[index].dYdX2 !== undefined
                          ? props.bubblesData[index].dYdX2
                          : this.setTextPosition(idx, txt, content);
                      return (
                        <tspan dy={dy} dx={dx}>
                          {' '}
                          {txt}{' '}
                        </tspan>
                      );
                    } else if (idx === 2) {
                      const { dy, dx } =
                        props.bubblesData[index].dYdX3 !== undefined
                          ? props.bubblesData[index].dYdX3
                          : this.setTextPosition(idx, txt, content);
                      return (
                        <tspan dy={dy} dx={dx}>
                          {' '}
                          {txt}{' '}
                        </tspan>
                      );
                    } else {
                      const { dy, dx } = this.setTextPosition(idx, txt, content);
                      return (
                        <tspan dy={dy} dx={dx}>
                          {' '}
                          {txt}{' '}
                        </tspan>
                      );
                    }
                  })}
                </text>
              </g>
            </Tooltip>
          </>
        )
      );
    });
  };

  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
          flexContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Grid item>
              <Container
                aria-hidden="true"
                id="chart"
                sx={{
                  cursor: 'default',
                  position: 'relative',
                  padding: '106px'
                }}
              >
                <svg
                  style={{
                    // border: "2px solid gold",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  width={460}
                  height={460}
                  onMouseEnter={() => this.setState({ hovered: true })}
                  focusable="false"
                >
                  {this.renderBubbles(this.state.data as [])}
                </svg>{' '}
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Card sx={{ minWidth: 275, bgcolor: this.props.cardContentColor }}>
            <CardContent>
              <Typography sx={{ fontSize: 16, color: 'white' }} align="center" color="text.secondary" gutterBottom>
                {this.props.cardContentValue}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Container>
    );
  }
}

interface IBubbleChartProps {
  bubblesData: BubbleChartTypes.Data[];
  width: number;
  height: number;
  backgroundColor: string;
  textFillColor: string;
  minValue: number;
  maxValue: number;
  move: boolean; //true || false
  cardContentValue: string;
  cardContentColor: any;
}

interface IBubbleChartState {
  hoverValue: { name: string };
  hovered: boolean;
  data: BubbleChartTypes.ForceData[];
  scale: { x: number; y: number };
  dYdX1?: { dy: number; dx: number };
  dYdX2?: { dy: number; dx: number };
  dYdX3?: { dy: number; dx: number };
}

export default BubbleChart;
/*eslint-disable */
