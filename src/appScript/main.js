const book = SpreadsheetApp.getActive();
const sheet = book.getSheetByName("repair");
const sheetObjects = book.getSheetByName("objects");

function doGet() {
  const htmlService = HtmlService.createTemplateFromFile("index");

  const lastRow = sheetObjects.getLastRow();
  const objects = sheetObjects.getRange(`A1:A${lastRow}`).getValues();
  const models = sheetObjects.getRange(`B1:B${lastRow}`).getValues();
  htmlService.objects = objects;
  htmlService.models = models;

  const html = htmlService.evaluate();
  html.setTitle("Ремонт ТА");
  html.addMetaTag("viewport", "width=device-width, initial-scale=1");
  return html;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getDataSheet() {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  const value = sheet.getSheetValues(1, 1, lastRow, lastColumn);
  return value;
}

function acceptData(formData) {
  const id = sheet.getRange(sheet.getLastRow(), 1).getValue();
  const currentDate = new Date();
  // const date = `/${currentDate.getFullYear()}.${
  //   currentDate.getMonth() + 1
  // }.${currentDate.getDate()}`;
  const {
    objectName,
    department,
    cabinet,
    phone,
    defProducer,
    defColor,
    defSN,
    defInv,
    defDescription,
    workProducer,
    workColor,
    workSN,
    workInv,
  } = formData;

  const def = `${defProducer}\nЦвет:${defColor}\nзав:${defSN}\nинв:${defInv}`;
  const work = `${workProducer}\nЦвет:${workColor}\nзав:${workSN}\nинв:${workInv}`;

  sheet.appendRow([
    id + 1,
    Utilities.formatDate(currentDate, "GMT", "yyyy-MM-dd\nHH:mm:ss"),
    objectName,
    department,
    cabinet,
    phone,
    def,
    work,
    defDescription,
    "",
    "ремонт",
    "",
  ]);
}
