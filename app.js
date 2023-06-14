const topRight = document.getElementById("myChart");
const midLeft = document.getElementById("myChart1");
const midMid = document.getElementById("myChart2");
const midRight = document.getElementById("myChart3");

var options = {
  series: [
    {
      name: "Cash",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Credit",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false, // Hide the chart menu
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

new Chart(topRight, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "My First Dataset",
        data: [80, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});

const options1 = {
  series: [
    {
      name: "Profit",
      data: [44, 31, 77, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
    background: "transparent", // Set background color to white
    foreColor: "#ffff", // Set text color to black
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      endingShape: "rounded",
      colors: {
        color: "white", // Set bar color to black
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
};

// Create the chart
const chart1 = new ApexCharts(midLeft, options1);

// Render the chart
chart1.render();

const options2 = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  chart: {
    height: 150,
    type: 'line',
    toolbar: {
      show: false, // Hide the chart menu
    },
    zoom: {
      enabled: false,
      color: 'transparent'
    },
    foreColor: 'transparent', // Set text color to white
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
 
  
  
};

var chart2 = new ApexCharts(midMid, options2);
chart2.render();

const options3 = {
  series: [
    {
      name: "Profit",
      data: [44, 31, 77, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
    background: "transparent", // Set background color to white
    foreColor: "#ffff", // Set text color to black
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      endingShape: "rounded",
      colors: {
        color: "white", // Set bar color to black
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
};

// Create the chart
const chart3 = new ApexCharts(midRight, options3);

// Render the chart
chart3.render();
