export function renderTableBody(data, table_body) {
  table_body.innerHTML = "";

  data.forEach((callBot) => {
    const table_body_row = document.createElement("tr");
    table_body.appendChild(table_body_row);

    for (const key in callBot) {
      const table_body_cell = document.createElement("td");
      table_body_cell.className = "table_body_cell";
      table_body_cell.textContent = callBot[key];
      table_body_row.appendChild(table_body_cell);
    }
  });
}

export function createTable(callBotsArr, renderedData) {
  const table_container = document.getElementById("table-container");
  const table = document.createElement("table");
  table.className = "table";
  table_container.appendChild(table);

  const table_header = document.createElement("thead");
  table_header.className = "table_head";
  table.appendChild(table_header);

  const table_header_row = document.createElement("tr");
  table_header_row.className = "table_head_row";
  table_header.appendChild(table_header_row);

  const TABLE_HEADER_VALUES = [];
  for (const key in callBotsArr[0]) {
    TABLE_HEADER_VALUES.push(key);
  }

  for (let i = 0; i < TABLE_HEADER_VALUES.length; i++) {
    const table_header_cell = document.createElement("th");
    table_header_cell.innerHTML = TABLE_HEADER_VALUES[i];
    table_header_cell.className = "table_header_cell";
    //data-set
    table_header_cell.dataset.key = TABLE_HEADER_VALUES[i];

    table_header_row.appendChild(table_header_cell);
  }

  //create tbody
  const table_body = document.createElement("tbody");
  table.appendChild(table_body);

  let sortAsc = true;

  table_header_row.addEventListener("click", (e) => {
    const key = e.target.dataset.key;

    if (key === "numberBot") {
      const sorted = [...renderedData].sort((a, b) =>
        sortAsc ? a.numberBot - b.numberBot : b.numberBot - a.numberBot
      );
      renderTableBody(sorted, table_body);
      sortAsc = !sortAsc;
    }
  });

  renderTableBody(renderedData, table_body);

  return table_body;
}
