import "./ScheduleTime.css";

const ScheduleTime = ({ timeArr }) => {
  let startRow = -5;
  let endValue = 1;
  const increaseValue = 6;
  return (
    <>
      {timeArr?.map((_, i) => {
        startRow = startRow + increaseValue;
        endValue = endValue + increaseValue;
        return (
          <span
            style={{
              gridRow: `${startRow} / ${endValue}`,
            }}
            key={`schedule-time-${i}`}
            className="schedule-view-body-time"
          >
            {12 + i <= 23 ? 12 + i : `0${i - 12}`}:00
          </span>
        );
      })}
    </>
  );
};

export default ScheduleTime;
