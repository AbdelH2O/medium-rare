console.log("DOCUMENT");
console.log(document);

const article = document.querySelector(
  "#root > div > div.l.c > div:nth-child(2) > div.fr.fs.ft.fu.fv.l > article > div > div > section"
);
if (article) {
  console.log("THE ARTICLE");
  console.log(article.textContent);
}
