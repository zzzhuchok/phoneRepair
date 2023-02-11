// function doGet() {
//   const htmlService = HtmlService.createTemplateFromFile("index");
//   const html = htmlService.evaluate();
//   html.setTitle("Ремонт ТА");
//   html.addMetaTag("viewport", "width=device-width, initial-scale=1");
//   return html;
// }

function doGet() {
  const activeUser = Session.getActiveUser();
  const activeUserEmail = activeUser.getEmail();

  const data = {
    firstName: "Ross",
    email: activeUserEmail,
  };

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
