const appScriptURL = `https://script.google.com/macros/s/AKfycbw2vXA4sGHgTRNy0oRdr8kPAdMyLtGDcpgguuDS8mSxIO4MmY3hIO-4N0LEQ2Ju5OhLEw/exec`;

const btnShowHistory = document.getElementById("btn-showAllList");

btnShowHistory.addEventListener("click", handleBtnShowHistoryCick);

async function getData() {
  const respons = await fetch(appScriptURL);
  const data = respons.json();
  return data;
}

async function handleBtnShowHistoryCick(e) {
  const btn = e.target;
  btn.disabled = true;
  console.log('---', btn.disabled)
  const data = await getData();
  btn.classList.toggle('active')
  btn.disabled = false;

  console.log("---", data);
}
