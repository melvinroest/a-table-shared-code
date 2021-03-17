import Papa from "papaparse";
import encodedData from "./encodedData";

export function createData() {
  const data = atob(encodedData);
  const options: Papa.ParseConfig = {
    delimiter: ",",
    quoteChar: '"',
    header: true,
  };
  const result = Papa.parse(data, options);
  return { header: result.meta.fields, content: result.data.slice(0, 20) };
}
