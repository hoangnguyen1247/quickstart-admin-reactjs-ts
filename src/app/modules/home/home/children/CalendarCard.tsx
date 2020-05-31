import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Button } from "reactstrap";

export function CalendarCard() {

    const [ startDate, setStartDate ] = React.useState(new Date());
    const [ eventsList ] = React.useState(new Date());
    const localizer = momentLocalizer(moment);

    const handleSelect = ({ start, end }) => {
        alert(start + " " + end);
    }

    return (
        <div className="d-flex">
            <div className="" style={{ width: "256px" }}>
                <div>
                    <Button
                    >
                        New Event
                    </Button>
                </div>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    inline
                    fixedHeight
                />
            </div>
            <div className="flex-fill">
                <Calendar
                    selectable
                    localizer={localizer}
                    events={Array.isArray(eventsList) ? eventsList : []}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    defaultDate={new Date()}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={handleSelect}
                />
            </div>
        </div>
    )
}
