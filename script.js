//Counter
document.addEventListener('DOMContentLoaded', function () {
    let counterHasBeenShown = false;
    function animateValue(id, start, end, duration) {
        if (counterHasBeenShown === false) {
            const range = end - start;
            let current = start;
            const increment = end > start ?
            Math.floor(range / (duration / 10)) > 0 ?
            Math.floor(range / (duration / 10)) : 1 : -1;
            const obj = document.getElementById(id);
            const timer = setInterval(() => {
                current += increment;
                obj.innerHTML = current;
                if (current >= end) {
                    obj.innerHTML = end;
                    clearInterval(timer);
                }
            }, 10);
        }
        counterHasBeenShown = true;
    } 

    function elementFromTop(elem) {
        const winY = window.innerHeight || document.documentElement.clientHeight,
        distTop = elem.getBoundingClientRect().top,
        elementHeight = elem.offsetHeight,
        distPixels = Math.round(distTop) + 200,
        distAndElmentHeight = elementHeight + distPixels;
        if (winY >= distAndElmentHeight ) {
            animateValue('counter', 0, 30, 5000);
        }
    }

    window.addEventListener('scroll', function() {
        elementFromTop(document.getElementById('counter'), 'element-from-top', 200);
    });

    //Barchart
    Highcharts.chart('chart', {
        chart: {
            type: 'column',
            backgroundColor: '#06182c',
            borderRadius: 10,
            height: 300,
            style: {
                fontFamily: 'Montserrat'
            }
        },
        tooltip: { enabled: false },
        title: {
            text: null,
            style: {
                color: '#fff'
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: '#fff'
                },
            },
            categories: ['Kassör i styrelse', 'Aktier', 'Sushi-lover', 'Jobb efter studier', 'Jobb före studier']
        },
        yAxis: {
            labels: {
                style: {
                    color: '#fff'
                },
            },
            min: 0,
            title: {
                text: 'År',
                style: {
                    color: '#fff'
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {},
        series: [{
            data: [2, 4, 5, 3, 7],
            color: '#00d4ff'
        }],
        credits: {
            enabled: false
        },
    });
});