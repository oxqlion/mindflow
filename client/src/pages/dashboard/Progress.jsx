import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Progress = () => {
  return (
<<<<<<< HEAD
    <div className="flex w-full items-center justify-center">
      <FullCalendar 
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
       initialView= {"dayGridMonth"}
       headerToolbar={
        {
          start: '', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
        }
       }

       style={"width: 100%"}
       contentHeight={400}
       aspectRatio={1.8}
       dayMinWidth={"100%"}
       slotMinWidth={"100%"}
       eventMinWidth={"100%"}

       />

=======
    <div className="flex w-full h-full items-center justify-center">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height={500}
      />
>>>>>>> f9ce97fd1737ad1d92934e197c29aa3d2800a8e9
    </div>
  );
};

export default Progress;
