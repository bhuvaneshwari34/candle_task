// Example OHLC data for the candlestick chart
const data = [
    { x: new Date('2025-03-20'), o: 10, h: 15, l: 9, c: 11 },
    { x: new Date('2025-03-21'), o: 11, h: 14, l: 10, c: 11 },
    { x: new Date('2025-03-22'), o: 11, h: 12, l: 10.5, c: 11 },
    { x: new Date('2025-03-23'), o: 11, h: 16, l: 9, c: 15 },
    { x: new Date('2025-03-24'), o: 15, h: 16, l: 14, c: 15 },
  ];
  
  // Get the canvas context
  const ctx = document.getElementById('candlestickChart').getContext('2d');
  
  // Create the candlestick chart
  const candlestickChart = new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [
        {
          label: 'Candlestick Data',
          data: data,
          borderColor: 'black',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
          },
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Price',
          },
        },
      },
    },
  });