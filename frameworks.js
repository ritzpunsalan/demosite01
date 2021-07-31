// import Vue from "vue";
// import jQuery from "jquery";
// import React from "react";
// import { Component } from "@angular/core";

const vue = require("vue")
const jquery = require("jquery")
const react = require("react")
const angular = require("angular/core")
@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}