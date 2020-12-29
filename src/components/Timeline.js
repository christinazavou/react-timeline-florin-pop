import React from "react";
import TimelineItem from "./TimelineItem";
import timelinedata from "./data";

const Timeline = () =>
  timelinedata.length > 0 && (
    <div className="timeline-container">
      {timelinedata.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
