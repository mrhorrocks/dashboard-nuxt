export const data = {
    labels: [
        '2012/12',
        '2013/14',
        '2014/15',
        '2015/16',
        '2016/17',
        '2017/18',
        '2019/19',
    ],
    datasets: [
        {
            type: 'line',
            label: 'Top 25 Trusts % Lap Rate',
            backgroundColor: '#ffffff', // white
            borderColor: '#ffc107', // YELLOW
            yAxisID: 'y',
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 4,
            data: [
                35,
                36,
                47,
                49,
                55,
                57,
                61,
            ]
        },
        {
            type: 'line',
            label: 'National % Lap Rate',
            backgroundColor: '#ffffff', // white
            borderColor: '#000000', // BLACK
            yAxisID: 'y',
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 4,
            data: [
                20,
                25,
                28,
                33,
                36,
                41,
                42,
            ]
        },
        {
            type: 'line',
            label: 'Trust % Lap Rate',
            backgroundColor: '#ffffff', // white
            borderColor: '#ff5a07', // ORANGE
            yAxisID: 'y',
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 4,
            data: [
                15,
                9,
                10,
                24,
                46,
                42,
                39,
            ]
        },
        {
            label: 'Laparoscopic',
            backgroundColor: '#00b482', // DARK GREEN
            borderColor: '#00b482', // DARK GREEN
            borderWidth: 0,
            yAxisID: 'y',
            // tension: 0.4,
            // pointRadius: 0,
            borderRadius: {
                topLeft: 5,
                topRight: 5,
            },
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
            label: 'OPEN',
            backgroundColor: '#70257d', // DARK PURP
            borderColor: '#70257d', // DARK PURP
            yAxisID: 'y',
            // borderDash: [5, 5],
            // tension: 0.4,
            // pointRadius: 0,
            borderRadius: {
                topLeft: 5,
                topRight: 5,
            },
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
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: 'index',
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
        tooltip: {
            backgroundColor: '#ffffffd7',
            borderColor: '#808080',
            borderWidth: 2,
            cornerRadius: 3,
            titleColor: '#000',
            titleFont: {weight: 'bold', size: 14},
            bodyFont: {weight: 'normal', size: 11},
            bodyColor: '#000',
            bodySpacing: 5,
            padding: 10,
            caretPadding: 20,
            caretSize: 10,
            multiKeyBackground: '#0000ff',
            footerColor: '#000000',
            font: {size: 20}
            // usePointStyle: true,
        },
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
                padding: 20,
                usePointStyle: false,
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
            stacked: true,
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
        // y: {
        //     stacked: false,
        //     max: 200,
        //     min: 0,
        //     title: {
        //         display: true,
        //         text: 'Emergency Admissions SOS / Emergency Admissions',
        //         color: '#ff0000', // RED
        //         font: {
        //             size: 11,
        //             weight: 'normal'
        //         }
        //     },
        //     type: 'linear',
        //     display: true,
        //     position: 'left',
        //     grid: {
        //         drawOnChartArea: false, // only want the grid lines for one axis to show up
        //     },
        //     ticks: {
        //         font: {
        //             size: 11,
        //             weight: 'normal'
        //         },
        //         color: '#ff0000',
        //         beginAtZero: true,
        //         callback: function (value: number, index: any, values: any) {
        //             if (value >= 1000) {
        //                 return value / 1000 + 'k';
        //             }
        //             return value;
        //         }
        //     }
        // },
        y: {
            stacked: false,
            max: 200,
            min: 0,
            title: {
                display: false,
                text: 'Patients (%)',
                color: '#000000', // BLACK
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
                color: '#000000',
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