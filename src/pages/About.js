import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'
const About = () => {
  return (
    <section className='section about-content'>
      <div class="about-inner">
        <div class="breadcrumb-inner ptb--120">
          <h2 class="title">About</h2>
          <ul class="page-list d-flex justify-content-center">
            <li class="breadcrumb-item"><Link to="/" className="">
              Home
            </Link>
            </li>
            <li class="breadcrumb-item active">About</li>
          </ul>
        </div>
      </div>
      <div class="rn-about-area ptb--120 bg_color--1">
        <div class="about-wrapper">
          <div class="container">
<div class="row">
            <div class="about-left col-lg-5">
            <img src={require('../images/about-image.jpg')} alt="image"/>  
            </div>
            <div class="about-right col-lg-7">
<div class="about-para inner"><div class="section-title"><h2 class="title">About</h2><p class="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.</p></div><div class="row mt--30"><div class="col-lg-6 col-md-12 col-sm-12 col-12"><div class="about-us-list"><h3 class="title">Who we are</h3><p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p></div></div><div class="col-lg-6 col-md-12 col-sm-12 col-12"><div class="about-us-list"><h3 class="title">Who we are</h3><p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p></div></div></div></div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <svg width="261" height="245" viewBox="0 0 261 245" fill="none" xmlns="http://www.w3.org/2000/svg">

    <defs>
    <linearGradient id="paint0_linear_1200_12842" x1="252" y1="122" x2="8.00095" y2="121.522" gradientUnits="userSpaceOnUse">
    <stop stop-color="rgba(238, 171, 0, 0.15)"/>
    <stop offset="40%" stop-color="rgba(234, 86, 86, 0.15)"/>
    <stop stop-color="rgba(238, 171, 0, 0.15)"/>
    <stop offset="100%" stop-color="rgba(234, 86, 86, 0.15)"/>
    </linearGradient>
   
    </defs>
    </svg>
      <Chart 
      type="radar"
      width={470}
      height={400}
      series={[
        {
          name: '',
          data: [65,70,75,32],
        }
      ]}
      options={
        {
         
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
        }
       
      }

      responsive={[
        {
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
        }
      ]}


     
      >

      </Chart>
    </section>
  );
};
export default About;
