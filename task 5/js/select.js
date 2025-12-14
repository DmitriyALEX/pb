export function createSelect(renderTableBody, renderedData, table_body) {
  const BOT_NAMES = [...new Set(renderedData.map((bot) => bot.botName))];

  BOT_NAMES.unshift("All");

  const nav_container = document.getElementById("nav-container");
  const select = document.createElement("select");
  nav_container.appendChild(select);

  BOT_NAMES.forEach((botName) => {
    const option = document.createElement("option");
    option.textContent = botName;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    const selectedBotValue = e.target.value;

    if (selectedBotValue === "All") {
      renderTableBody(renderedData, table_body);
    } else {
      const filtered = renderedData.filter((bot) => bot.botName === selectedBotValue);
      renderTableBody(filtered, table_body);
    }
  });
}
