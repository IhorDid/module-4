const articleRef = document.querySelector("article");
console.log(articleRef.innerHTML);

// articleRef.innerHTML = "";
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const ulref = document.querySelector(".list");
const markup = technologies
  .map((technologie) => `<li class="link-item">${technologie}</li>`)
  .join("");
// console.log(markup);
console.log(ulref);
ulref.innerHTML = markup;
