import "./ScheduleView.css";
const ScheduleView = () => {
  const timeArr = [...Array(16).keys()];

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
        {/* <div className="schedule-view-item"></div> */}
        <div className="schedule-view-body-row">
          {timeArr?.map((_, i) => (
            <span
              key={`schedule-time-${i}`}
              className="schedule-view-body-time"
            >
              {12 + i <= 23 ? 12 + i : `0${i - 12}`}:00
            </span>
          ))}
        </div>
        <div className="schedule-view-body-schedule"></div>
        <div className="schedule-view-body-schedule"></div>
        <div className="schedule-view-body-schedule"></div>
        <div className="schedule-view-body-schedule"></div>
        <div className="schedule-view-body-schedule"></div>
        <div className="schedule-view-body-schedule"></div>
        <div className="schedule-view-body-schedule"></div>
      </section>
    </section>
  );
};

export default ScheduleView;
