import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const [data] = useState([53, 50, 30, 60, 34, 14, 57]);
  const svgRef = useRef();

  useEffect(() => {
    const w = 600;
    const h = 500;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");

    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, 60]).range([h, 0]);

    const x = d3.axisBottom(xScale).ticks(data.length);
    const y = d3.axisLeft(yScale).ticks(10);
    svg.append("g").call(x).attr("transform", "translate(0, 500)");
    svg.append("g").call(y);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val));
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} fill="steelblue"></svg>
    </div>
  );
};

export default BarChart;
