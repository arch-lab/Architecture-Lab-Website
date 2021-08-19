import React from 'react';

let startTime = new Date("8/20/2021")
let hour = 8;
let minute = 30;
startTime.setHours(hour, minute)

let calendarEvent = {
  "event": "Class",
  "startTime": startTime,
  "endTime": ""
}

console.log(Date());
console.log();
console.log(calendarEvent);
