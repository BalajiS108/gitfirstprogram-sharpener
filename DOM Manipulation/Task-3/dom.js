// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "abc";
// console.log(document.title);
// // console.log(document.doctype);
// console.log(document.head);
// // console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hare Krishna";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// -----------------GETELEMENTBYID-----------------------------------
// console.log(document.getElementById("header-title"));
headerTitle = document.getElementById("header-title");
console.log(headerTitle);
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.textContent = "Hare Krishna";
console.log(headerTitle.innerText);
console.log(headerTitle.textContent);
headerTitle.innerText = "Lord Balaji ki Jay";
console.log(headerTitle.innerText);
console.log(headerTitle.textContent);
headerTitle.innerHTML = "<h1>        hello world </h1>";
console.log(headerTitle.innerHTML);
console.log(headerTitle.innerText);
console.log(headerTitle.textContent);
headerTitle.style.borderBottom = "3px solid black";
// headerTitle.style.borderBottom = "3px solid black";
headerTitle.style.borderBottom = "3px solid red";
header = document.getElementById("main-header");
console.log(header);
console.log("header return type =", typeof header);
header.style.borderBottom = "3px solid black";

title = document.getElementsByClassName("title");
console.log(title[0]);
title[0].style.color = "green";
