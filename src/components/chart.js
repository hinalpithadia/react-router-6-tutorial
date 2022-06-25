var options = {
    
stroke: {
show: true,
width: 3,
colors: ['rgba(238, 171, 0, 0.5)'],
dashArray: 0,

},
grid: {
padding: {
left: 0,
right: 0
}
},
series: [{
name: '',
data: [65,70,75,32],
}],
chart: {
width:'470',
height:'400',
type: 'radar',  

},

markers: {
size: 5,
colors: '#EEAB00',
strokeWidth: 2,
strokeOpacity: 1,
strokeColors:'#0F111F',
strokeDashArray: 0,
fillOpacity: 1,
discrete: [],
shape: "circle",
radius: 2,
offsetX: 0,
offsetY: 0,
hover: {
size: 5,
strokeColors: '#fff',
strokeWidth: 14,
}
},
title: {
text: ''
},
xaxis: {
categories: ['Utility', 'Uniqueness', 'Community', 'Team'],
tickAmount: 0,
min:'0',
max:'100',
labels: {
show: true,
style: {
  color: ["blue"],
  fontSize: "12px",
 
}
}
},
responsive: [{
breakpoint: 400,
options: {
  chart: {
     width: 320,
     height: 320,
  },
  legend: {
     show: false,
  }
},
}],

};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
