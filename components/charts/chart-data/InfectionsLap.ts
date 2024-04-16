export const data = {
    labels: [
      'Systemic', 
      'None', 
      'Complications'
    ],
    datasets: [
      {
        data: [50, 50, 0 ],
        backgroundColor: [
          '#70257d', // Purple
          '#A47EAA', // Purple light
          '#a4a4a4'// Grey
        ],
        borderWidth: 0,
        cutout: '80%'
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // subtitle: {
      //     display: true,
      //     text: 'OPEN',
      //     font: {
      //         size: 14,
      //         weight: 'bold'
      //     }
      // },
      title: {
          display: true,
          text: 'LAP',
          position: 'top', // 'top', 'left', 'bottom', 'right'
          align: 'center',
          color: '#70257d',
          font: {
              size: 20,
              weight: 'bold',
          }
      },
      legend: {
          position: 'top',
          align: 'center',
          display: true,
          labels: {
              color: ['#000000'],
              useBorderRadius: true,
              borderRadius: 5,
              boxWidth: 14,
              boxHeight: 14,
              // padding: 10,
              font: {
                  size: 11,
                  // weight: 'bold'
              }
          },
          title: {
              display: false,
              padding: 20,
              color: '#0000ff',
              text: 'Legend Title',
          }
      }
  },
  }
  