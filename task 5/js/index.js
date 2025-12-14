import { callBotsArr } from "./data.js";
import { createSelect } from "./select.js";
import { renderTableBody, createTable } from "./table.js";

const renderedData = callBotsArr;

const table_body = createTable(callBotsArr, renderedData);

createSelect(renderTableBody, renderedData, table_body);
