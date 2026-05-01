(function () {
  const calendarContainer = document.querySelector(".calendar-container");
  if (!calendarContainer) return;

  const layoutTemplate = document.getElementById("calendar-layout-template");
  const dayHeaderTemplate = document.getElementById("calendar-day-header-template");
  const dayTemplate = document.getElementById("calendar-day-template");
  const eventTemplate = document.getElementById("calendar-event-template");
  const modalTemplate = document.getElementById("calendar-modal-template");

  const eventUrlKey = "event-id";

  const MONTHS = [
    "Dawn's Light",
    "Sanctus",
    "Emberwake",
    "Flamebright",
    "Crownfall",
    "Runeharvest",
    "Misttide",
    "Wyrmrest",
    "Lumenfall",
    "Hallowtide",
    "Radiant Wake",
    "Lliira's Joy",
  ];

  const DAYS_PER_MONTH = 30;
  const MONTHS_PER_YEAR = 12;
  const DAY_NAMES = ["Lux", "Ard", "Orn", "Tyr", "Vel", "Nyx"];
  const DAY_FULL_NAMES = ["Luxday", "Arday", "Ornday", "Tyrday", "Velday", "Nyxday"];

  // "Today" — change this single line to update the current date
  const TODAY = { day: 4, month: 5, year: 7692 };

  let currentMonth = TODAY.month;
  let currentYear = TODAY.year;
  let events = [];

  function getEventsForDay(day, month, year) {
    return events.filter(
      (e) => e.day === day && e.month === month && e.year === year
    );
  }

  function formatDate(day, month, year) {
    return `Day ${day} of ${MONTHS[month - 1]}, Year ${year.toLocaleString()}`;
  }

  // direction: -1 = slide right (going back), 1 = slide left (going forward), 0 = no animation
  function renderCalendar(direction = 0) {
    const node = layoutTemplate.content.cloneNode(true);

    // Title
    node.querySelector(".calendar-title").textContent =
      `${MONTHS[currentMonth - 1]} \u2014 Year ${currentYear.toLocaleString()}`;

    // Navigation
    node.querySelector(".calendar-prev-btn").addEventListener("click", () => navigateMonth(-1));
    node.querySelector(".calendar-next-btn").addEventListener("click", () => navigateMonth(1));
    node.querySelector(".calendar-today-btn").addEventListener("click", goToToday);
    node.querySelector(".calendar-prev-year-btn").addEventListener("click", () => navigateYear(-1));
    node.querySelector(".calendar-next-year-btn").addEventListener("click", () => navigateYear(1));

    // Grid
    const grid = node.querySelector(".calendar-grid");
    if (direction > 0) grid.classList.add("slide-left");
    else if (direction < 0) grid.classList.add("slide-right");

    // Day-of-week headers
    DAY_NAMES.forEach((name, i) => {
      const header = dayHeaderTemplate.content.cloneNode(true);
      const headerEl = header.querySelector(".calendar-day-header");
      headerEl.textContent = name;
      headerEl.title = DAY_FULL_NAMES[i];
      grid.appendChild(header);
    });

    // Day cells — 30 days / 6 per week = exactly 5 rows
    for (let day = 1; day <= DAYS_PER_MONTH; day++) {
      grid.appendChild(buildDayCell(day));
    }

    calendarContainer.replaceChildren(node);
  }

  function buildDayCell(day) {
    const isToday =
      day === TODAY.day &&
      currentMonth === TODAY.month &&
      currentYear === TODAY.year;

    const node = dayTemplate.content.cloneNode(true);
    const dayEl = node.querySelector(".calendar-day");
    if (isToday) dayEl.classList.add("today");

    dayEl.querySelector(".day-number").textContent = day;

    const eventsContainer = dayEl.querySelector(".day-events");
    getEventsForDay(day, currentMonth, currentYear).forEach((evt) => {
      const eventNode = eventTemplate.content.cloneNode(true);
      const eventEl = eventNode.querySelector(".calendar-event");
      eventEl.textContent = evt.title;
      eventEl.title = evt.title;
      eventEl.dataset.eventId = evt.identifier;
      if (evt.player) eventEl.dataset.player = evt.player;
      eventEl.addEventListener("click", (e) => {
        e.preventDefault();
        showEventModal(evt.identifier);
      });
      eventsContainer.appendChild(eventNode);
    });

    return node;
  }

  function navigateMonth(direction) {
    currentMonth += direction;
    if (currentMonth > MONTHS_PER_YEAR) {
      currentMonth = 1;
      currentYear++;
    } else if (currentMonth < 1) {
      currentMonth = MONTHS_PER_YEAR;
      currentYear--;
    }
    renderCalendar(direction);
  }

  function navigateYear(direction) {
    currentYear += direction;
    renderCalendar(direction);
  }

  function goToToday() {
    const monthDiff = (TODAY.year - currentYear) * MONTHS_PER_YEAR + (TODAY.month - currentMonth);
    currentMonth = TODAY.month;
    currentYear = TODAY.year;
    renderCalendar(monthDiff === 0 ? 0 : monthDiff > 0 ? 1 : -1);
  }

  // Modal
  function showEventModal(identifier) {
    const evt = events.find((e) => e.identifier === identifier);
    if (!evt) return;

    let modal = document.getElementById("modal-" + identifier);
    if (!modal) {
      modal = createEventModal(evt);
      document.body.appendChild(modal);
    }

    showModal(identifier, eventUrlKey);
  }

  function createEventModal(evt) {
    const node = modalTemplate.content.cloneNode(true);

    const wrapper = node.querySelector(".modal");
    wrapper.id = "modal-" + evt.identifier;
    wrapper.addEventListener("click", (e) => closeModalOuterClick(e, evt.identifier, eventUrlKey));

    node.querySelector(".modal-close").addEventListener("click", () => closeModal(evt.identifier, eventUrlKey));
    node.querySelector(".event-title").textContent = evt.title;
    node.querySelector(".event-date").textContent = formatDate(evt.day, evt.month, evt.year);

    const playerEl = node.querySelector(".event-player");
    if (evt.player) {
      playerEl.textContent = evt.player;
      playerEl.dataset.player = evt.player;
    } else {
      playerEl.remove();
    }

    node.querySelector(".event-description").innerHTML = evt.content;

    return wrapper;
  }

  function checkUrlForEvent() {
    const url = new URL(window.location.href);
    const eventId = url.searchParams.get(eventUrlKey);
    if (eventId) {
      // Navigate to the right month first
      const evt = events.find((e) => e.identifier === eventId);
      if (evt) {
        currentMonth = evt.month;
        currentYear = evt.year;
        renderCalendar();
        showEventModal(eventId);
      }
    }
  }

  // Load events and initialise
  fetch(baseUrl + "/search/calendar-events.json")
    .then((r) => r.json())
    .then((data) => {
      events = data;
      renderCalendar();
      checkUrlForEvent();
    })
    .catch((err) => {
      console.error("Failed to load calendar events:", err);
      renderCalendar();
    });
})();
