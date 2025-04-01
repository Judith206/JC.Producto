(function ($) {
    'use strict';

    // SOLUCI�N IMPLEMENTADA: Esperar a que el DOM est� completamente cargado
    $(document).ready(function () {

        if ($("#visit-sale-chart").length) {
            const ctx = document.getElementById('visit-sale-chart');

            var graphGradient1 = document.getElementById('visit-sale-chart').getContext("2d");
            var graphGradient2 = document.getElementById('visit-sale-chart').getContext("2d");
            var graphGradient3 = document.getElementById('visit-sale-chart').getContext("2d");

            var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
            gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
            gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
            var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

            var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
            gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
            gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
            var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

            var gradientStrokeRed = graphGradient3.createLinearGradient(0, 0, 0, 300);
            gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
            gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
            var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';
            const bgColor1 = ["rgba(218, 140, 255, 1)"];
            const bgColor2 = ["rgba(54, 215, 232, 1"];
            const bgColor3 = ["rgba(255, 191, 150, 1)"];

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
                    datasets: [{
                        label: "CHN",
                        borderColor: gradientStrokeViolet,
                        backgroundColor: gradientStrokeViolet,
                        fillColor: bgColor1,
                        hoverBackgroundColor: gradientStrokeViolet,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [20, 40, 15, 35, 25, 50, 30, 20],
                        barPercentage: 0.5,
                        categoryPercentage: 0.5,
                    },
                    {
                        label: "USA",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        fillColor: bgColor2,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [40, 30, 20, 10, 50, 15, 35, 40],
                        barPercentage: 0.5,
                        categoryPercentage: 0.5,
                    },
                    {
                        label: "UK",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        fillColor: bgColor3,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [70, 10, 30, 40, 25, 50, 15, 30],
                        barPercentage: 0.5,
                        categoryPercentage: 0.5,
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    elements: {
                        line: {
                            tension: 0.4,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                            },
                        },
                        x: {
                            display: true,
                            grid: {
                                display: false,
                            },
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                },
                plugins: [{
                    afterDatasetUpdate: function (chart, args, options) {
                        const chartId = chart.canvas.id;
                        var i;
                        const legendId = `${chartId}-legend`;
                        const ul = document.createElement('ul');
                        for (i = 0; i < chart.data.datasets.length; i++) {
                            ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                  ${chart.data.datasets[i].label}
                </li>
              `;
                        }
                        // alert(chart.data.datasets[0].backgroundColor);
                        return document.getElementById(legendId).appendChild(ul);
                    }
                }]
            });
        }

        if ($("#traffic-chart").length) {
            const ctx = document.getElementById('traffic-chart');

            var graphGradient1 = document.getElementById("traffic-chart").getContext('2d');
            var graphGradient2 = document.getElementById("traffic-chart").getContext('2d');
            var graphGradient3 = document.getElementById("traffic-chart").getContext('2d');

            var gradientStrokeBlue = graphGradient1.createLinearGradient(0, 0, 0, 181);
            gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
            gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
            var gradientLegendBlue = 'rgba(54, 215, 232, 1)';

            var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 50);
            gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
            gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
            var gradientLegendRed = 'rgba(254, 112, 150, 1)';

            var gradientStrokeGreen = graphGradient3.createLinearGradient(0, 0, 0, 300);
            gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
            gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
            var gradientLegendGreen = 'rgba(6, 185, 157, 1)';

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Search Engines 30%', 'Direct Click 30%', 'Bookmarks Click 40%'],
                    datasets: [{
                        data: [30, 30, 40],
                        backgroundColor: [gradientStrokeBlue, gradientStrokeGreen, gradientStrokeRed],
                        hoverBackgroundColor: [
                            gradientStrokeBlue,
                            gradientStrokeGreen,
                            gradientStrokeRed
                        ],
                        borderColor: [
                            gradientStrokeBlue,
                            gradientStrokeGreen,
                            gradientStrokeRed
                        ],
                        legendColor: [
                            gradientLegendBlue,
                            gradientLegendGreen,
                            gradientLegendRed
                        ]
                    }]
                },
                options: {
                    cutout: 50,
                    animationEasing: "easeOutBounce",
                    animateRotate: true,
                    animateScale: false,
                    responsive: true,
                    maintainAspectRatio: true,
                    showScale: true,
                    legend: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                },
                plugins: [{
                    afterDatasetUpdate: function (chart, args, options) {
                        const chartId = chart.canvas.id;
                        var i;
                        const legendId = `${chartId}-legend`;
                        const ul = document.createElement('ul');
                        for (i = 0; i < chart.data.datasets[0].data.length; i++) {
                            ul.innerHTML += `
                  <li>
                    <span style="background-color: ${chart.data.datasets[0].legendColor[i]}"></span>
                    ${chart.data.labels[i]}
                  </li>
                `;
                        }
                        return document.getElementById(legendId).appendChild(ul);
                    }
                }]
            });
        }

        if ($("#inline-datepicker").length) {
            $('#inline-datepicker').datepicker({
                enableOnReadonly: true,
                todayHighlight: true,
            });
        }

        // SOLUCI�N IMPLEMENTADA: Usar jQuery consistentemente y verificar elementos
        if ($.cookie('purple-pro-banner') != "true") {
            $('#proBanner').addClass('d-flex');
            $('.navbar').removeClass('fixed-top');
        } else {
            $('#proBanner').addClass('d-none');
            $('.navbar').addClass('fixed-top');
        }

        // SOLUCI�N IMPLEMENTADA: Verificar si el navbar existe antes de manipularlo
        if ($(".navbar").length) {
            if ($(".navbar").hasClass("fixed-top")) {
                $('.page-body-wrapper').removeClass('pt-0');
                $('.navbar').removeClass('pt-5');
            } else {
                $('.page-body-wrapper').addClass('pt-0');
                $('.navbar').addClass('pt-5');
                $('.navbar').addClass('mt-3');
            }
        }

        // SOLUCI�N IMPLEMENTADA: Verificar si el elemento existe antes de agregar el event listener
        if ($('#bannerClose').length) {
            $('#bannerClose').on('click', function () {
                $('#proBanner').addClass('d-none').removeClass('d-flex');
                $('.navbar')
                    .removeClass('pt-5 mt-3')
                    .addClass('fixed-top');
                $('.page-body-wrapper').addClass('proBanner-padding-top');

                var date = new Date();
                date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
                $.cookie('purple-pro-banner', "true", {
                    expires: date
                });
            });
        }
    });
    document.addEventListener('themeChanged', function (e) {
        const isDark = e.detail === 'dark';
        // Reconfigura tus charts con colores apropiados
        updateChartsTheme(isDark);
    });
    $(document).on('themeChanged', function (event, theme) {
        $('.dataTable').DataTable().draw();
    });
    // FIN de $(document).ready()
})(jQuery);