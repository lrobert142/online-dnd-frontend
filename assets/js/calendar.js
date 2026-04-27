(function () {
  const calendarContainer = document.querySelector(".calendar-container");
  if (!calendarContainer) return;

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

  function renderCalendar() {
    //TODO: Is there a nicer way to doing this? Probably via appendElement calls instead of raw HTMl strings...
    calendarContainer.innerHTML = `
      <div class="calendar-header">
        <div class="calendar-nav">
          <button class="calendar-prev-btn" aria-label="Previous month">&larr; Prev</button>
          <button class="calendar-today-btn">Today</button>
          <button class="calendar-next-btn" aria-label="Next month">Next &rarr;</button>
        </div>
        <div class="calendar-title">${MONTHS[currentMonth - 1]} &mdash; Year ${currentYear.toLocaleString()}</div>
        <div class="calendar-nav">
          <button class="calendar-prev-year-btn" aria-label="Previous year">&larr; Year</button>
          <button class="calendar-next-year-btn" aria-label="Next year">Year &rarr;</button>
        </div>
      </div>
      <div class="calendar-grid">
        ${DAY_NAMES.map((d, i) => `<div class="calendar-day-header" title="${DAY_FULL_NAMES[i]}">${d}</div>`).join("")}
        ${buildDayCells()}
      </div>
    `;

    // Navigation
    calendarContainer
      .querySelector(".calendar-prev-btn")
      .addEventListener("click", () => navigate(-1));
    calendarContainer
      .querySelector(".calendar-next-btn")
      .addEventListener("click", () => navigate(1));
    calendarContainer
      .querySelector(".calendar-today-btn")
      .addEventListener("click", goToToday);
    calendarContainer
      .querySelector(".calendar-prev-year-btn")
      .addEventListener("click", () => navigateYear(-1));
    calendarContainer
      .querySelector(".calendar-next-year-btn")
      .addEventListener("click", () => navigateYear(1));

    // Event banner clicks
    calendarContainer.querySelectorAll(".calendar-event").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("data-event-id");
        showEventModal(id);
      });
    });
  }

  //TODO: Is there a nicer way to doing this? Probably via appendElement calls instead of raw HTMl strings...
  function buildDayCells() {
    let cells = "";

    // 30 days / 6 days per week = exactly 5 rows, no offset needed
    for (let day = 1; day <= DAYS_PER_MONTH; day++) {
      const isToday =
        day === TODAY.day &&
        currentMonth === TODAY.month &&
        currentYear === TODAY.year;
      const dayEvents = getEventsForDay(day, currentMonth, currentYear);

      let eventsHtml = "";
      dayEvents.forEach((evt) => {
        const playerAttr = evt.player
          ? ` data-player="${evt.player}"`
          : "";
        eventsHtml += `<a class="calendar-event" data-event-id="${evt.identifier}"${playerAttr} title="${evt.title}">${evt.title}</a>`;
      });

      cells += `
        <div class="calendar-day${isToday ? " today" : ""}">
          <span class="day-number">${day}</span>
          <div class="day-events">${eventsHtml}</div>
        </div>`;
    }

    return cells;
  }

  function navigate(direction) {
    currentMonth += direction;
    if (currentMonth > MONTHS_PER_YEAR) {
      currentMonth = 1;
      currentYear++;
    } else if (currentMonth < 1) {
      currentMonth = MONTHS_PER_YEAR;
      currentYear--;
    }
    renderCalendar();
  }

  function navigateYear(direction) {
    currentYear += direction;
    renderCalendar();
  }

  function goToToday() {
    currentMonth = TODAY.month;
    currentYear = TODAY.year;
    renderCalendar();
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
    const playerBadge = evt.player
      ? `<span class="event-player" data-player="${evt.player}">${evt.player}</span>`
      : "";

    const wrapper = document.createElement("div");
    wrapper.id = "modal-" + evt.identifier;
    wrapper.className = "modal hide";
    wrapper.setAttribute(
      "onclick",
      `closeModalOuterClick(event, '${evt.identifier}', '${eventUrlKey}')`
    );
    wrapper.innerHTML = `
      <div class="modal-center centre">
        <div class="content">
          <span class="close modal-close" onclick="closeModal('${evt.identifier}', '${eventUrlKey}')"></span>
          <div class="modal-content-container calendar-event-modal">
            <div class="event-title">${evt.title}</div>
            <div class="event-date">${formatDate(evt.day, evt.month, evt.year)}</div>
            ${playerBadge}
            <div class="event-description">${evt.description}</div>
          </div>
        </div>
      </div>
    `;
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
