import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import { timeParse } from 'd3-time-format';


const Graph = ({
  userData
}) => {
  var elem = document.querySelector('svg');
  if (elem) elem.parentNode.removeChild(elem);
  let chart = "no chart :(";
  // useEffect(()=> {
    //format data
    let rawdata = JSON.parse(JSON.stringify(userData));
    //if (data.length > 2) data[1].record_date = 'fuck';
    const parseDate = timeParse("%Y-%m-%d");
    let data = { series: [{name: 'weight', values: [] }, {name: 'body_fat', values: []}, {name: 'mental_score', values: []}, {name: 'net_worth', values: []}], "dates": [] };
    rawdata.sort((a,b) => new Date(a.record_date) - new Date(b.record_date));
    for (let i = 0; i<rawdata.length; i++) {
      data.dates.push(parseDate(rawdata[i].record_date.slice(0,10)));
      data.series[0].values.push(+rawdata[i].weight);
      data.series[1].values.push(+rawdata[i].body_fat);
      data.series[2].values.push(+rawdata[i].mental_score);
      data.series[3].values.push(+rawdata[i].net_worth);
    }
    for (let i = 0; i<data.series.length; i++) {
      let currArr = data.series[i].values;
      let min = Math.min(...currArr);
      let max = Math.max(...currArr)
      currArr = currArr.map(el => (el-min)/(max-min));
      data.series[i].values = currArr; 
    }



    //hover
    function hover(svg, path) {
  
      if ("ontouchstart" in document) svg
          .style("-webkit-tap-highlight-color", "transparent")
          .on("touchmove", moved)
          .on("touchstart", entered)
          .on("touchend", left)
      else svg
          .on("mousemove", moved)
          .on("mouseenter", entered)
          .on("mouseleave", left);
    
      const dot = svg.append("g")
          .attr("display", "none");
    
      dot.append("circle")
          .attr("r", 2.5);
    
      dot.append("text")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
          .attr("text-anchor", "middle")
          .attr("y", -8);
    
      function moved(event) {
        event.preventDefault();
        const pointer = d3.pointer(event, this);
        const xm = x.invert(pointer[0]);
        const ym = y.invert(pointer[1]);
        const i = d3.bisectCenter(data.dates, xm);
        const s = d3.least(data.series, d => Math.abs(d.values[i] - ym));
        path.attr("stroke", d => d === s ? null : "#ddd").filter(d => d === s).raise();
        dot.attr("transform", `translate(${x(data.dates[i])},${y(s.values[i])})`);
        dot.select("text").text(s.name);
      }
    
      function entered() {
        path.style("mix-blend-mode", null).attr("stroke", "#ddd");
        dot.attr("display", null);
      }
    
      function left() {
        path.style("mix-blend-mode", "multiply").attr("stroke", null);
        dot.attr("display", "none");
      }
    }


    //color func
    // var res = data.series.map(function(d){ return d.name })
    // var color = d3.scaleOrdinal()
    // .domain(res)
    // .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
    const colors = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'];
    // data = data.map(el => {
    //   el.date = parseDate(el.record_date.slice(0,10));
    //   el.weight = +el.weight;
    //   el.body_fat = +el.body_fat;
    //   el.mental_score = +el.mental_score;
    //   el.net_worth = +el.net_worth;
    //   dates.push(el.date);
    //   delete el.record_date;
    //   return [el.date, el.weight, el.body_fat, el.mental_score, el.net_worth];
    // });
    
    console.log('dates', data.dates);
    console.log('data', data.series);
    //setup
    const height = 400;
    const width = 600;
    const margin = ({top: 20, right: 20, bottom: 30, left: 30})
    if (data.series && data.series[0].values.length>2)  {
    // //building chart
    const svg = d3.select("#Graph").append('svg')
      .attr("viewBox", [0, 0, width, height])
      .style("overflow", "visible");

    // //declare x and y
    const y = d3.scaleLinear()
    .domain([0, 1]).nice()
    .range([height - margin.bottom, margin.top])
    const x = d3.scaleUtc()
    .domain(d3.extent(data.dates))
    .range([margin.left, width - margin.right])

    // //declare axes
    const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
    const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold"))
    svg.append("g")
        .call(xAxis);
    svg.append("g")
        .call(yAxis);

    const line = d3.line()
    .defined(d => !isNaN(d))
    .x((d, i) => x(data.dates[i]))
    .y((d, i) => y(d))

        const path = () => svg.append("g")
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
      .selectAll("path")
      .data(data.series)
      .join("path")
        .style("mix-blend-mode", "multiply")
        .attr("d", d => line(d.values));
  
    svg.call(path, hover);

  // svg.call(path);

    chart = svg.node();
    }
  // });

  return (
    <div id="Graph">
        {/* {JSON.stringify(userData)} */}
    </div>
  );
};

export default Graph;
