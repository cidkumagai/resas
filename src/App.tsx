import React, { useMemo, useState } from 'react';

import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';
highchartsAccessibility(Highcharts);

import './App.css';

import Top from './components/Top';

function App() {
  return <Top />;
}

export default App;
