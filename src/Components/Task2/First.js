import React from "react";
import Second from "./Second";

const Detail = [
  {
    id: 1,
    name: "Scot",
    company: "Avamm",
    senior: true,
    desc: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    id: 2,
    name: "Cesya",
    company: "Skalith",
    senior: false,
    desc: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    id: 3,
    name: "Agnese",
    company: "BlogXS",
    senior: true,
    desc: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    id: 4,
    name: "Peyter",
    company: "Vidoo",
    senior: false,
    desc: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 5,
    name: "Carroll",
    company: "Gabcube",
    senior: false,
    desc: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    id: 6,
    name: "Theodore",
    company: "Demivee",
    senior: false,
    desc: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    id: 7,
    name: "Cherise",
    company: "Fatz",
    senior: false,
    desc: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    id: 8,
    name: "Bernette",
    company: "Rhybox",
    senior: true,
    desc: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    id: 9,
    name: "Winn",
    company: "Ailane",
    senior: true,
    desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    id: 10,
    name: "Kristy",
    company: "Thoughtstorm",
    senior: true,
    desc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    id: 11,
    name: "mosa",
    company: "@AntonX",
    senior: false,
    desc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    id: 12,
    name: "fawad shah",
    company: "@encoderytes",
    senior: true  ,
    desc: "Hi, iam fawad shah from Di Khan",
  }
];
function First() {
return <Second Detail={Detail} />;
}

export default First;
