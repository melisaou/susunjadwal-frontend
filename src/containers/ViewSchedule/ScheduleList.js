import React from "react";
import styled from "styled-components";

const ScheduleList = ({ schedule }) => {
  if (schedule) {
    const formattedSchedule = {};
    schedule.schedule_items.forEach((scheduleItem) => {
      if (!(scheduleItem.name in formattedSchedule)) {
        formattedSchedule[scheduleItem.name] = {
          name: scheduleItem.name,
          time: [
            {
              start: scheduleItem.start,
              end: scheduleItem.end,
              day: scheduleItem.day,
              room: scheduleItem.room,
            },
          ],
        };
      } else {
        formattedSchedule[scheduleItem.name].time.push({
          start: scheduleItem.start,
          end: scheduleItem.end,
          day: scheduleItem.day,
          room: scheduleItem.room,
        });
      }
    });
    return (
      <ClassTableContainer>
        <ClassHeaderContainer>
          <div>Nama Kelas</div>
          <div>Waktu</div>
          <div>Ruang</div>
        </ClassHeaderContainer>
        {Object.keys(formattedSchedule).map((scheduleName) => (
          <ClassItemContainer>
            <div>{formattedSchedule[scheduleName].name}</div>
            <div>
              {formattedSchedule[scheduleName].time.map((dayItem) => (
                <div>{`${dayItem.day}, ${dayItem.start} - ${dayItem.end}`}</div>
              ))}
            </div>
            <div>
              {formattedSchedule[scheduleName].time.map((dayItem) => (
                <div>{dayItem.room}</div>
              ))}
            </div>
          </ClassItemContainer>
        ))}
      </ClassTableContainer>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const ClassHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.primaryPurple};
  color: ${(props) => props.theme.color.primaryWhite};
  font-weight: 600;
  font-size: 1.25em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  div {
    flex: 1;
    text-align: center;
  }
`;

const ClassItemContainer = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    flex: 1;
    text-align: center;
    padding: 1em;
  }
`;

const ClassTableContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.primaryMineShaft};
  box-sizing: border-box;
  margin-bottom: 24px;
  border-radius: 4px;
  tr:nth-child(even) {
    background: ${(props) => props.theme.color.primaryAlabaster};
  }
  tr:nth-child(odd) {
    background: ${(props) => props.theme.color.primaryWhite};
  }
`;

export default ScheduleList;