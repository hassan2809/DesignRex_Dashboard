import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject} from '@syncfusion/ej2-react-schedule';

const Calender = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <ScheduleComponent currentView='Month'>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
      </div>
  );
};

export default Calender;