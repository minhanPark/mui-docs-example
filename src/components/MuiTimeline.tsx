import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
          <TimelineContent>City A</TimelineContent>
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
          <TimelineContent>City B</TimelineContent>
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineContent>City C</TimelineContent>
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
};
