import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Icon from './Icon';
import Condition from './Condition';
import { motion } from 'framer-motion';

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to bottom,
      rgb(255, ${Math.abs(highColor)}, 0),
      rgb(255, ${Math.abs(lowColor)}, 0)
    )`;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to bottom,
      rgb(0, ${Math.abs(highColor)}, 255),
      rgb(0, ${Math.abs(lowColor)}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div
      initial={{ scale: 0, y: 300, x: 200 }}
      animate={{ scale: 1, y: 0, x: 0 }}
    >
      <Card>
        <Location city={city} country={country} getWeather={getWeather} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
