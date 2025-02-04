import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { Header } from "../../components/Header";
import { tokens } from "../../theme";

export const Calendar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {

        const title = prompt("Please Enter a new title for you")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();


        if (title) {
            calendarApi.addEvent({
                id: `${selected.date}-${selected.title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        };
    };

    const handleEventClick = (selected) => {

        if (window.confirm(`Are you sure u want to delete the event ${selected.event.title}`))
            selected.event.remove();
    }


    return <Box m="20px">

        <Header title="CALENDAR" subtitle="Full Calendasr Interactive Page" />

        <Box display='flex' justifyContent='space-between'>
            <Box flex="1 1 20%" bgcolor={colors.primary[400]} p="10px" borderRadius="5px">
                <Typography variant="h5">
                    EVENTS
                </Typography>

                <List>
                    {currentEvents.map((event) => (

                        <ListItem
                            key={event.id}
                            sx={{
                                bgcolor: colors.greenAccent[500],
                                margin: "10px 0",
                                borderRadius: "2px"
                            }}

                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                            />

                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box m="15px" flex="1 1 100%">
                <FullCalendar
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        interactionPlugin,
                        timeGridPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left: "Prev, Next Today",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        { id: "123", title: "All day event", start: "2022-09-01" }
                    ]}
                />
            </Box>
        </Box>
    </Box>

}