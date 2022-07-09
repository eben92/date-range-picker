import { useState } from 'react';
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './App.css';

function App() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div className='App'>
      <div
        style={{
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <h1 style={{ color: '#ffffff' }}>for large screens</h1>
        <DateRangePicker
          editableDateInputs={false}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          showSelectionPreview={true}
          ranges={dateRange}
          months={1}
          direction='horizontal'
          rangeColors={['#FF6A3A']}
          color='#FF6A3A'
        />
      </div>

      <div
        style={{
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <h1 style={{ color: '#ffffff' }}> for small screens</h1>

        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          rangeColors={['#FF6A3A']}
        />
      </div>
    </div>
  );
}

export default App;
