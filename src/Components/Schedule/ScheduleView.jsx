import { getScheduleGridPosition } from "../../Functions/getScheduleGridPosition ";
import { weekToGridKeys } from "../../variables";
import ScheduleTime from "./ScheduleTime";
import "./ScheduleView.css";
const ScheduleView = ({ schedule }) => {
  if (schedule?.length === 0) return;

  const timeArr = [...Array(15).keys()];
  return (
    <section className="schedule-view-container">
      <section className="schedule-view-header">
        <h3 className="schedule-view-header-time">Time</h3>
        <h3 className="schedule-view-header-day">Monday</h3>
        <h3 className="schedule-view-header-day">Tuesday</h3>
        <h3 className="schedule-view-header-day">Wednesday</h3>
        <h3 className="schedule-view-header-day">Thursday</h3>
        <h3 className="schedule-view-header-day">Friday</h3>
        <h3 className="schedule-view-header-day">Saturday</h3>
        <h3 className="schedule-view-header-day">Sunday</h3>
      </section>
      <section className="schedule-view-body">
        <ScheduleTime timeArr={timeArr} />

        {schedule?.map((event, i) => {
          const startValue = getScheduleGridPosition(new Date(event.startTime));
          const endValue = getScheduleGridPosition(new Date(event.endTime));

          const gridValue = `${startValue.gridRow} / ${endValue.gridRow}`;

          return (
            <div
              key={"schedule-" + event.id + i}
              style={{
                backgroundColor: "green",
                gridColumn: weekToGridKeys[+startValue.day].toString(),
                gridRow: gridValue,
              }}
            >
              {event.startTime}
              <br></br>
              {event.endTime}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ScheduleView;
