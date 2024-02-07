import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Paper, CircularProgress } from '@mui/material';

import Telecall from './telecalling';
import Collection from './collections';

const TwoTabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tab1Data, setTab1Data] = useState(null);
  const [tab2Data, setTab2Data] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataForTab1 = async () => {
      setLoading(true);
      // Simulate data fetching for Tab 1
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate 2-second delay
      // Example: const data = await apiCallForTab1();
      // setTab1Data(data);
      setLoading(false);
    };

    const fetchDataForTab2 = async () => {
      setLoading(true);
      // Simulate data fetching for Tab 2
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate 2-second delay
      // Example: const data = await apiCallForTab2();
      // setTab2Data(data);
      setLoading(false);
    };

    if (selectedTab === 0 && !tab1Data) {
      fetchDataForTab1();
    }

    if (selectedTab === 1 && !tab2Data) {
      fetchDataForTab2();
    }
  }, [selectedTab, tab1Data, tab2Data]);

  const handleChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <Select
        value={selectedTab}
        onChange={handleChange}
        label="Select Tab"
        size='small'
        className="mb-2 self-start text-black"
      >
        <MenuItem value={0}>BO/TC</MenuItem>
        <MenuItem value={1}>Collections</MenuItem>
      </Select>

      <Paper className="flex w-full justify-center">
        {loading ? (
          <div className="flex justify-center items-center h-16">
            <CircularProgress />
          </div>
        ) : (
          <div className='flex flex-1 w-full h-fit'>
            {selectedTab === 0 && (
              <div className='w-full h-full bg-white'>{tab1Data ? tab1Data : <Telecall />}</div>
            )}
            {selectedTab === 1 && (
              <div className='w-full h-full bg-white'>{tab2Data ? tab2Data : <Collection />}</div>
            )}
          </div>
        )}
      </Paper>
    </div>
  );
};

export default TwoTabComponent;
