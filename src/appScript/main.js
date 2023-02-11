function doGet() {
  const htmlService = HtmlService.createTemplateFromFile("index");
  const html = htmlService.evaluate();
  html.setTitle("Ремонт ТА");
  html.addMetaTag("viewport", "width=device-width, initial-scale=1");
  return html;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
