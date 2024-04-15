export const data = {
    labels: [
        'Dec 20',
        'Jan 21',
        'Feb 21',
        'Mar 21',
        'Apr 21',
        'May 21',
        'Jun 21',
    ],
    datasets: [
        {
            label: 'Emergency Admissions',
            backgroundColor: '#a47eaa', // LIGHT PURP
            borderColor: '#a47eaa', // LIGHT PURP
            yAxisID: 'y',
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0,
            data: [
                143,
                159,
                133,
                126,
                86,
                84,
                86,
            ]
        },
        {
            label: 'Emergency SOS Admissions',
            backgroundColor: '#70257d', // PURP
            borderColor: '#70257d', // PURP
            yAxisID: 'y',
            tension: 0.4,
            pointRadius: 0,
            pointStyle: 'circle',
            data: [
                25,
                16,
                15,
                39,
                72,
                60,
                55,
            ]
        },
        {
            // type: 'bar',
            label: 'Emergency Coded Sepsis',
            backgroundColor: '#00b482', // GREEN
            borderColor: '#00b482', // GREEN
            yAxisID: 'y1',
            pointRadius: 0,
            data: [
                35,
                43,
                47,
                49,
                55,
                57,
                61,
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
    stacked: true,
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
                color: ['#00a09a'],
                useBorderRadius: true,
                borderRadius: 2,
                boxWidth: 10,
                boxHeight: 10,
                // padding: 10,
                font: {
                    size: 10,
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
            stacked: false,
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
                font: {
                    size: 11,
                    weight: 'normal'
                },
                minRotation: 0 // Roptate the label
            }
        },
        y: {
            stacked: false,
            max: 200,
            min: 0,
            title: {
                display: true,
                text: 'Emergency Admissions SOS / Emergency Admissions',
                color: '#ff0000', // RED
                font: {
                    size: 11,
                    weight: 'normal'
                }
            },
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
                font: {
                    size: 11,
                    weight: 'normal'
                },
                color: '#ff0000',
                beginAtZero: true,
                callback: function (value: number, index: any, values: any) {
                    if (value >= 1000) {
                        return value / 1000 + 'k';
                    }
                    return value;
                }
            }
        },
        y1: {
            stacked: false,
            max: 200,
            min: 0,
            title: {
                display: true,
                text: 'Patients (%)',
                color: '#00a09a', // GREEN
                font: {
                    size: 13,
                    weight: 'bold'

                }
            },
            type: 'linear',
            display: true, // Grid lines
            position: 'left',
            grid: {
                drawOnChartArea: true, // only want the grid lines for one axis to show up
            },
            ticks: {
                font: {
                    size: 11,
                    weight: 'normal'
                },
                color: '#00a09a',
                beginAtZero: true,
                callback: function (value: number, index: any, values: any) {
                    if (value >= 1000) {
                        return value / 1000 + 'k';
                    }
                    return value;
                }
            }
        },
    },
}