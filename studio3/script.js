"use strict"; //strict

/******************************** Fall Data *********************************/

var data = [                                              /****** create graph ******/
  {
    x: ['Segundo', 'Tercero', 'Cuarto', 'Average'],
    y: [2.34, 2.27, 2.08, 2.23],
    marker:{
      color: ['rgba(66,95,244,1)', 'rgba(242, 150, 31,1)', 'rgba(241, 80, 31,1)', 'rgba(239, 117, 117,1)']    /****** adjust color ******/
    },
    type: 'bar'
  }
];

var layout = {
  title: 'Fall 2015'
};

Plotly.newPlot('GraphF2015', data, layout);     /****** plot graph ******/

/******* Second Graph *******/

var data = [                                          /****** create graph ******/
  {
    x: ['Segundo', 'Tercero', 'Cuarto', 'Average'],
    y: [2.11, 1.95, 1.87, 1.98],
    marker:{
      color: ['rgba(66,95,244,1)', 'rgba(242, 150, 31,1)', 'rgba(241, 80, 31,1)', 'rgba(239, 117, 117,1)']    /****** adjust color ******/
    },
    type: 'bar'
  }
];

var layout = {
  title: 'Fall 2017'
};

Plotly.newPlot('GraphF2017', data, layout);


Plotly.update('GraphF2017', data, layout);    /****** update graph data ******/
Plotly.relayout('GraphF2017', data)           /****** change layout of graph ******/

/******************************** Spring Data *********************************/

var data = [                                            /****** create graph ******/
  {
    x: ['Segundo', 'Tercero', 'Cuarto', 'Average'],
    y: [2.04, 1.97, 1.85, 1.96],
    marker:{
      color: ['rgba(66,95,244,1)', 'rgba(242, 150, 31,1)', 'rgba(241, 80, 31,1)', 'rgba(239, 117, 117,1)']    /****** adjust color ******/
    },
    type: 'bar'
  }
];

var layout = {
  title: 'Spring 2011'
};

Plotly.newPlot('GraphS2011', data, layout);

/******* Second Graph *******/

var data = [                                              /****** create graph ******/
  {
    x: ['Segundo', 'Tercero', 'Cuarto', 'Average'],
    y: [1.6, 1.51, 1.42, 1.5],
    marker:{
      color: ['rgba(66,95,244,1)', 'rgba(242, 150, 31,1)', 'rgba(241, 80, 31,1)', 'rgba(239, 117, 117,1)']    /****** adjust color ******/
    },
    type: 'bar'
  }
];

var layout = {
  title: 'Spring 2016'
};

Plotly.newPlot('GraphS2016', data, layout);

var plotDiv = document.getElementById('GraphS2016');
var plotData = plotDiv.data;
