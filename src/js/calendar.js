import data from "../data/calendar-data.json";
import template from "../templates/calendar-template.hbs";

const calendarMarkup = template(data);
const grid = document.querySelector(".js-calendar-grid");
grid.innerHTML = calendarMarkup;
