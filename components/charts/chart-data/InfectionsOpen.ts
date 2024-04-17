export const data = {
  labels: [
    'Systemic', 
    'None', 
    'Complications'
  ],
  datasets: [
    {
       data: [20, 40, 40],
      backgroundColor: [
        '#00b482', // Green
        '#00966c', // Green Light
        '#a4a4a4'// Grey
      ],
      borderWidth: 0,
      cutout: '70%'
    }
  ]
}

// export const centerTextDoughnut = {
//   id: 'centerTextDoughnut',
//   afterDatasetsDraw(chart, args, pluginOptions) {
//     const { ctx } = chart;
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.font = 'bold 12px sans-serif';
//     const text = 'I am the center';
//     const textWidth = ctx.measureText(text).width;
//     const x = chart.getDatasetMeta(0).data[0].x;
//     const y = chart.getDatasetMeta(0).data[0].y;
//     ctx.fillText(text, x,y);
//   }
// }
  
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    doughnutText: {
      text: 'Total: 450',
      color: '#000000', // text color
      font: {
        size: '20',
        weight: 'bold',
        family: 'Arial',
      },
    },
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
        text: 'OPEN',
        position: 'top', // 'top', 'left', 'bottom', 'right'
        align: 'center',
        color: '#00966c',
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
                size: 13.6,
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
  