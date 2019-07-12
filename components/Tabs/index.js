// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    const topics = document.querySelector(".topics");
    return res.data.topics.map(topic => {
      return topics.appendChild(createTab(topic));
    });
  })
  .catch(err => {
    console.log("Error has occurred: ", err);
  });

function createTab(topic) {
  const tab = document.createElement("div");

  tab.classList.add("tab");
  if (topic === "javascript") {
    tab.classList.add("active-tab");
  }

  tab.textContent = topic;
  // tab.setAttribute("data-tab", topic !== "node.js" ? topic : "node");
  let tabName;
  topic === "node.js" ? (tabName = "node") : (tabName = topic);
  tab.dataset.tab = tabName;

  tab.addEventListener("click", event => {
    const tabs = Array.from(document.querySelectorAll(".tab"));

    tabs.map(tab => {
      tab.classList.remove("active-tab");
    });

    event.target.classList.add("active-tab");

    let allCards = document.querySelectorAll(".card");
    allCards.forEach(card => (card.style.display = "none"));

    let selectedCards = document.querySelectorAll(
      `.card[data-tab='${tabName}']`
    );
    selectedCards.forEach(card => (card.style.display = "block"));
  });

  return tab;
}
