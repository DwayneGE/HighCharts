
class LUBWChart {
    constructor(container) {
        this.container = container;
        this._createInitialChart();
        this.chart.redraw();
    }

    _createInitialChart() {
        this.highcharts = Highcharts.chart(this.$.container, {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Boston',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        })
    }
}





/*

function getCityInformation(data) {
    if (data === 'Boston') {
        return city;
    }
}


var city = {
    name: 'Boston',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
}

    name = 'Karlsruhe',
    data = 5.9, 5.2, 5.7, 9.5, 13.9, 17.2, 18.0, 17.6, 16.2, 12.3, 8.6, 6.8]
}
*/