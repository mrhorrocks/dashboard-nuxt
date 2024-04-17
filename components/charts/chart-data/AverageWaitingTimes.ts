export const data = {
    labels: [
        'England',
        'Airedale NHS Foundation Trust',
    ],

    datasets: [
        {
          label: 'Average Length of Stay Benchmatked - Open',
          backgroundColor: ['#a47eaa', '#6CC6AD'],
          borderRadius: {
            topLeft: 5,
            topRight: 5
        },
          data: [
            66.6,
            79.1
        ]
    }
]
}
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        // mode: 'index',
        intersect: false,
    },
    plugins: {
        // title: {
        //     display: true,
        //     text: 'Emergency SOS, Coded Sepsis & Emergency Admissions',
        //     font: {
        //         size: 14,
        //         weight: 'bold'
        //     }
        // },
        // subtitle: {
        //     display: true,
        //     text: 'Custom Chart Subtitle',
        //     font: {
        //         size: 14,
        //         weight: 'bold'
        //     }
        // },
        legend: {
            display: true,
            position: 'top',
            align: 'center',
            labels: {
                color: ['#000000'],
                useBorderRadius: true,
                borderRadius: 2,
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
                padding: 0,
                color: '#0000ff',
                text: 'Legend Title',
            }
        }
    },
    scales: {
        x: {
            title: {
                display: false,
                text: 'Patients (%)',
                color: '#000000', // BLACK
                font: {
                    size: 13,
                    weight: 'bold'

                }
            },
            // stacked: true,
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
                display: false,
                font: {
                    size: 11,
                    weight: 'normal'
                },
                minRotation: 0 // Roptate the label
            }
        },
    },
} 