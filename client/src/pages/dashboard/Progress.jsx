import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Progress = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height={500}
      />
    </div>
  );
};

export default Progress;
