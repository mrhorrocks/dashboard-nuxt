export const data = {
    labels: [
        'Dec 20',
        'Jan 21',
        'Feb 21',
        'Mar 21',
        'Apr 21',
        'May 21',
        'Jun 21',
        'Jul 21',
        'Aug 21',
        'Sep 21',
        'Oct 21',
        'Nov 21',
        'Dec 21',
        'Jan 22',
        'Feb 22',
        'Mar 22',
        'Apr 22',
        'May 22',
        'Jun 22',
        'Jul 22',
        'Aug 22',
        'Sep 22',
        'Oct 22',
        'Nov 22',
        'Dec 22',
        'Jan 23',
        'Feb 23',
        'Mar 23',
        'Apr 23',
        'May 23',
        'Jun 23',
        'Jul 23',
        'Aug 23',
        'Sep 23',
        'Oct 23',
        'Nov 23'
    ],
    datasets: [
        {
            label: 'Emergency Admissions',
            backgroundColor: '#ff0000', // RED
            borderColor: '#ff0000', // RED
            yAxisID: 'y',
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0,
            data: [
                338000,
                332000,
                309000,
                354000,
                352000,
                346000,
                367000,
                371000,
                354000,
                359000,
                361000,
                397000,
                357000,
                336000,
                318000,
                355000,
                334000,
                354000,
                340000,
                335000,
                332000,
                330000,
                337000,
                347000,
                355000,
                352000,
                319000,
                358000,
                342000,
                366000,
                363000,
                360000,
                361000,
                357000,
                365000,
                364000
            ]
        },
        {
            label: 'Emergency SOS Admissions',
            backgroundColor: '#ff0000', // RED
            borderColor: '#ff0000', // RED
            yAxisID: 'y',
            tension: 0.4,
            pointRadius: 0,
            pointStyle: 'circle',
            data: [
                117000,
                112000,
                104000,
                117000,
                118000,
                123000,
                137000,
                130000,
                124000,
                126000,
                133000,
                135000,
                138000,
                125000,
                116000,
                130000,
                127000,
                132000,
                128000,
                128000,
                125000,
                123000,
                153000,
                137000,
                153000,
                151000,
                128000,
                139000,
                135000,
                135000,
                138000,
                134000,
                136000,
                131000,
                136000,
                98000
            ]
        },
        {
            // type: 'bar',
            label: 'Emergency Coded Sepsis',
            backgroundColor: '#00a09a', // GREEN
            borderColor: '#00a09a', // GREEN
            yAxisID: 'y1',
            pointRadius: 0,
            data: [
                15900,
                15500,
                14100,
                15800,
                15800,
                16200,
                16600,
                17100,
                16500,
                17000,
                16300,
                16200,
                16600,
                15800,
                15000,
                17000,
                16400,
                16900,
                16700,
                17100,
                16500,
                17000,
                17000,
                17000,
                18000,
                16900,
                14900,
                16000,
                15700,
                16400,
                16800,
                16500,
                16900,
                16300,
                15800,
                10900
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
    stacked: false,
    plugins: {
        // subtitle: {
        //     display: true,
        //     text: 'Custom Chart Subtitle',
        //     font: {
        //         size: 14,
        //         weight: 'bold'
        //     }
        // },
        // title: {
        //     display: true,
        //     text: 'Emergency SOS, Coded Sepsis & Emergency Admissions',
        //     font: {
        //         size: 14,
        //         weight: 'bold'
        //     }
        // },
        legend: {
            align: 'center',
            position: 'top',
            display: true,
            labels: {
                color: ['#00a09a'],
                useBorderRadius: true,
                borderRadius: 2,
                boxWidth: 20,
                boxHeight: 20,
                // padding: 10,
                font: {
                    size: 14,
                    weight: 'bold'
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
    scales: {
        x: {
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
                minRotation: 90
            }
        },
        y: {
            max: 450000,
            min: 0,
            title: {
                display: true,
                text: 'Emergency Admissions SOS / Emergency Admissions',
                color: '#ff0000', // RED
                font: {
                    size: 14,
                    weight: 'bold'
                }
            },
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
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
            max: 20000,
            min: 0,
            title: {
                display: true,
                text: 'Emergency Coded Sepsis',
                color: '#00a09a', // GREEN
                font: {
                    size: 14,
                    weight: 'bold'

                }
            },
            type: 'linear',
            display: true,
            position: 'left',
            grid: {
                drawOnChartArea: true, // only want the grid lines for one axis to show up
            },
            ticks: {
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