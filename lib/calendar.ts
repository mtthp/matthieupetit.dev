// credits to https://codepen.io/posterchild/pen/LYVqabP

/**
 * Create and download a file on click
 * @params {string} filename - The name of the file with the ending
 * @params {string} filebody - The contents of the file
 */
export const download = (filename: string, fileBody: string) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/calendar;charset=UTF-8,' + encodeURIComponent(fileBody));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

/**
 * Returns a date/time in ICS format
 * @params {Date} dateTime - A date object you want to get the ICS format for.
 * @params {boolean} withTime - Whether the time should be concat to the date.
 * @returns {string} String with the date in ICS format
 */
export const convertToICSDate = (dateTime: Date, withTime: boolean = true) => {
  const year = dateTime.getFullYear().toString();
  const month =
    dateTime.getMonth() + 1 < 10
      ? '0' + (dateTime.getMonth() + 1).toString()
      : (dateTime.getMonth() + 1).toString();
  const day =
    dateTime.getDate() < 10 ? '0' + dateTime.getDate().toString() : dateTime.getDate().toString();
  const hours =
    dateTime.getHours() < 10
      ? '0' + dateTime.getHours().toString()
      : dateTime.getHours().toString();
  const minutes =
    dateTime.getMinutes() < 10
      ? '0' + dateTime.getMinutes().toString()
      : dateTime.getMinutes().toString();

  return `${year}${month}${day}${withTime ? `T${hours}${minutes}00` : ''}`;
};

/**
 * Creates and downloads an ICS file
 * @params {string} timeZone - In the format America/New_York
 * @params {Date} startTime - Vaild JS Date object in the event timezone
 * @params {Date} endTime - Vaild JS Date object in the event timezone
 * @params {boolean} fullday - Whether the event occurs a full day
 * @params {string} title
 * @params {string} description
 */
export const createDownloadICSFile = (
  timezone: string,
  startTime: Date,
  endTime: Date,
  fullday: boolean,
  title: string,
  description: string,
) => {
  const icsBody = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:Calendar
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:${timezone}
TZURL:http://tzurl.org/zoneinfo-outlook/${timezone}
X-LIC-LOCATION:${timezone}
END:VTIMEZONE
BEGIN:VEVENT
SUMMARY:${title}
UID:@Default
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
DTSTART;TZID=${timezone}:${convertToICSDate(startTime, !fullday)}
DTEND;TZID=${timezone}:${convertToICSDate(endTime, !fullday)}
DTSTAMP:${convertToICSDate(new Date())}
DESCRIPTION:${description}
URL:${window.location.href}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:${title}
TRIGGER:-PT0M
END:VALARM
END:VEVENT
END:VCALENDAR
  `.trim();

  download(`${title}.ics`, icsBody);
};
