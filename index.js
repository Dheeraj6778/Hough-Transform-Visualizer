let data = [
  {
    x: [],
    y: [],
    lineData: [],
    type: "scatter",
    mode: "markers",
  },
];

function generateLineData(m, b, start, end, step) {
  let xValues = [];
  let yValues = [];
  for (let i = start; i <= end; i += step) {
    xValues.push(i);
    yValues.push(m * i + b);
  }
  return {
    x: xValues,
    y: yValues,
    type: "scatter",
    mode: "lines",
    line: { width: 2 },
  };
}

function houghSpace(m, b) {
  console.log("houghSpace");
  let lineData = generateLineData(m, b, -4, 4, 0.1);
  data[0].lineData.push(lineData);
  //   let data = [lineData];
  let layout = {
    title: "Hough Space",
    xaxis: {
      title: "m",
    },
    yaxis: {
      title: "b",
    },
    width: 800,
    height: 500,
  };
  Plotly.newPlot("hough-container", data[0].lineData, layout);
}

function handleSubmit(e) {
  console.log("clicked");
  let xc = parseInt(document.getElementById("x").value);
  let yc = parseInt(document.getElementById("y").value);
  data[0].x.push(xc);
  data[0].y.push(yc);
  //give title to the chart
  let layout = {
    title: "Point space",
    xaxis: {
      title: "x",
    },
    yaxis: {
      title: "y",
    },
    width: 800,
    height: 500,
  };
  Plotly.newPlot("chart-container", data, layout);
  for (let i = 0; i < data[0].x.length; i++) {
    houghSpace(-1 * data[0].x[i], data[0].y[i]);
  }
}
