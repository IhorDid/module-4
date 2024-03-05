// const articleRef = document.querySelector("article");
// console.log(articleRef.innerHTML);

// articleRef.innerHTML = "";
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const ulref = document.querySelector(".list");
// const markup = technologies
//   .map((technologie) => `<li class="link-item">${technologie}</li>`)
//   .join("");
// console.log(markup);
// console.log(ulref);
// ulref.innerHTML = markup;

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", onButtonClick);

// function onButtonClick(event) {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// }

const cleanBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(cleanBtn);
console.log(logList);

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
cleanBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentElement("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}
