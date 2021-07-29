import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import { timeParse } from 'd3-time-format';
const Graph = ({
  userData
}) => {

  // let chart = "no chart :(";
  // useEffect(()=> {
  //   //format data
  //   let data = JSON.parse(JSON.stringify(userData));
  //   //if (data.length > 2) data[1].record_date = 'fuck';
  //   const parseDate = timeParse("%Y-%m-%d");
  //   data = data.map(el => {
  //     el.date = parseDate(el.record_date.slice(0,10));
  //     delete el.record_date;
  //     return el;
  //   });
  //   console.log('data', data);
  //   //setup
  //   const height = 500;
  //   const width = 800;
  //   const margin = ({top: 20, right: 20, bottom: 30, left: 30})

  //   //building chart
  //   const svg = d3.create("svg")
  //     .attr("viewBox", [0, 0, width, height])
  //     .style("overflow", "visible");

  //   //declare x and y
  //   const y = d3.scaleLinear()
  //   .domain([0, 200]).nice()
  //   .range([height - margin.bottom, margin.top])
  //   const x = d3.scaleUtc()
  //   .domain([2010,2020])
  //   .range([margin.left, width - margin.right])

  //   //declare axes
  //   const xAxis = g => g
  //   .attr("transform", `translate(0,${height - margin.bottom})`)
  //   .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
  //   const yAxis = g => g
  //   .attr("transform", `translate(${margin.left},0)`)
  //   .call(d3.axisLeft(y))
  //   .call(g => g.select(".domain").remove())
  //   .call(g => g.select(".tick:last-of-type text").clone()
  //       .attr("x", 3)
  //       .attr("text-anchor", "start")
  //       .attr("font-weight", "bold"))
  //   svg.append("g")
  //       .call(xAxis);
  //   svg.append("g")
  //       .call(yAxis);

  //   const line = d3.line()
  //   .defined(d => !isNaN(d))
  //   .x((d, i) => x(data.date[i]))
  //   .y(d => y(d))

  //   const path = svg.append("g")
  //       .attr("fill", "none")
  //       .attr("stroke", "steelblue")
  //       .attr("stroke-width", 1.5)
  //       .attr("stroke-linejoin", "round")
  //       .attr("stroke-linecap", "round")
  //     .selectAll("path")
  //     .data(data.weight)
  //     .join("path")
  //       .style("mix-blend-mode", "multiply")
  //       .attr("d", d => line(d.values));

  //   svg.call(path);

  //   chart = svg.node();
  
  // });

  return (
    <div id="Graph">
        
        {JSON.stringify(userData)}
    </div>
  );
};

export default Graph;
