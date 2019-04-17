(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.sass":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.sass ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.background, .center, body h2, body h4, body h5, body p, .first_page .button, .third_page_foto a, .third_page_foto p, .third_page_foto h5, .first_page .main_photo, .third_page_foto_1, .third_page_foto_2, .third_page_foto_3, .third_page_foto_4, .third_page_foto_5, .third_page_foto_6, .forth_page .forth_page_foto_1, .forth_page .forth_page_foto_2, .forth_page .forth_page_foto_3, .forth_page .forth_page_foto_4, .forth_page .forth_page_foto_5, .forth_page .forth_page_foto_6 {\n  background-size: cover;\n  background-repeat: no-repeat; }\n.center, body h2, body h4, body h5, body p, .first_page .button, .third_page_foto a, .third_page_foto p, .third_page_foto h5 {\n  align-items: center;\n  justify-content: center;\n  text-align: center; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: #000000; }\na:hover {\n    text-decoration: none;\n    color: #000000; }\nul {\n  list-style: none;\n  list-style-type: none;\n  display: flex;\n  padding: 1em; }\nul li > a {\n    padding: 1em;\n    size: 1.2em; }\nul li > a a {\n      color: #000000;\n      text-decoration: none; }\nul li > a:visited {\n      color: #000000; }\nul li > a::after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 2px;\n      background-color: red;\n      -webkit-transform: translateY(5px) scale(0);\n              transform: translateY(5px) scale(0);\n      transition: all 0.2s; }\nul li > a:hover {\n      -webkit-text-decoration: 0;\n              text-decoration: 0; }\nul li > a:hover::after {\n        -webkit-transform: translateY(7px) scale(1);\n                transform: translateY(7px) scale(1); }\nbody {\n  background: #f5f7f7; }\nbody h2, body h4 {\n    text-transform: uppercase;\n    font-weight: 900; }\nbody h5 {\n    font-size: 1.2em;\n    line-height: 1.2em; }\nbody h2 {\n    font-size: 2.5em;\n    text-shadow: 3px 3px rgba(0, 0, 0, 0.2);\n    line-height: 1.5em;\n    letter-spacing: .4em; }\nbody h2 span {\n      background-color: #b2f2ee; }\nbody h4 {\n    font-size: 2em; }\nbody p {\n    font-size: 15.57px;\n    line-height: 28px; }\n.icon-button {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 3rem;\n  background-color: grey;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 2.0rem;\n  line-height: 3rem;\n  margin: 1px; }\n.icon-button span {\n    height: 0;\n    width: 0;\n    border-radius: 0;\n    display: block;\n    margin: 0;\n    position: absolute;\n    left: 50%;\n    top: 50%; }\n.icon-button:hover span {\n    height: 3rem;\n    width: 3rem;\n    border-radius: 3rem;\n    margin: -1.5rem; }\n.twitter span {\n  background-color: #4099ff; }\n.facebook span {\n  background-color: #3B5998; }\n.google-plus span {\n  background-color: #db5a3c; }\n.icon-button i {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 3rem;\n  background: none;\n  position: absolute;\n  color: #000000;\n  line-height: 3rem;\n  left: 0;\n  top: 0;\n  z-index: 3; }\n.first_page {\n  background: #eff0f2; }\n.first_page .logo {\n    font-weight: 900; }\n.first_page .logo a {\n      font-size: 1.52em;\n      border: 3px solid #000000;\n      border-radius: 3px;\n      padding: .2em .5em;\n      max-width: 100px;\n      text-align: center; }\n.first_page .logo a span {\n        font-size: 1.53em;\n        color: #b2f2ee; }\n.first_page .button {\n    margin: 40px; }\n.first_page .button a {\n      text-transform: uppercase;\n      font-size: 14.57px;\n      border: 1px solid #000000;\n      border-radius: 3px;\n      padding: 10px 20px;\n      max-width: 200px; }\n.first_page .button a:hover {\n        background: #b2f2ee;\n        transition: all 0.2s;\n        border: 2px solid #000000; }\n.first_page .main_photo {\n    margin-bottom: 50px;\n    width: 150px;\n    height: 150px;\n    background-image: url('Air_template.svg.png'); }\n.second_page .back, .second_page .badge {\n  background: #b2f2ee; }\n.second_page_slider {\n  height: 300px;\n  display: block;\n  position: relative;\n  width: 100%; }\n.second_page_slider img {\n    display: inline-block;\n    width: 350px;\n    position: absolute; }\n.second_page_slider img.active {\n    z-index: 4; }\n.second_page_slider_about_work {\n    max-width: 650px; }\n.second_page .badge {\n  padding: 10px;\n  margin: 0 5px;\n  border-radius: 10%; }\n.third_page_foto a, .third_page_foto p, .third_page_foto h5 {\n  background: rgba(0, 0, 1, 0.6); }\n.third_page_foto h5 {\n  margin: 2em 0;\n  padding: 10px 0;\n  text-transform: uppercase;\n  color: #b2f2ee; }\n.third_page_foto p {\n  color: #eff0f2; }\n.third_page_foto a {\n  color: #b2f2ee;\n  padding: 5px; }\n.third_page_foto a:hover {\n    font-weight: 900; }\n.third_page_foto_active {\n  opacity: 0;\n  transition: all 0.2s; }\n.third_page_foto_active:hover {\n    opacity: 1; }\n.third_page_foto_1 {\n  background-image: url('th_1.jpg'); }\n.third_page_foto_2 {\n  background-image: url('th_2.jpg'); }\n.third_page_foto_3 {\n  background-image: url('th_3.jpg'); }\n.third_page_foto_4 {\n  background-image: url('th_4.jpg'); }\n.third_page_foto_5 {\n  background-image: url('th_5.jpg'); }\n.third_page_foto_6 {\n  background-image: url('th_6.jpg'); }\n.forth_page .forth_page_foto a:hover {\n  font-weight: 900; }\n.forth_page .forth_page_foto h5 {\n  margin-top: 315px; }\n.forth_page .forth_page_foto p {\n  background: rgba(178, 242, 238, 0.5); }\n.forth_page .forth_page_foto_1 {\n  background-image: url('foto1.jpg'); }\n.forth_page .forth_page_foto_2 {\n  background-image: url('foto2.jpg'); }\n.forth_page .forth_page_foto_3 {\n  background-image: url('foto3.jpg'); }\n.forth_page .forth_page_foto_4 {\n  background-image: url('foto4.jpg'); }\n.forth_page .forth_page_foto_5 {\n  background-image: url('foto5.jpg'); }\n.forth_page .forth_page_foto_6 {\n  background-image: url('foto1.jpg'); }\n.fifth_page {\n  background: #eff0f2; }\n.fifth_page_contact {\n    padding: 10px; }\n.fifth_page_maps {\n    width: 500px;\n    height: 80%;\n    background-image: url('maps.jpg'); }\n.container {\n  display: grid;\n  grid-gap: 1em; }\n.container .first_page {\n    height: 100vh;\n    display: grid;\n    grid-gap: 1em;\n    grid-column: 1/13; }\n.container .first_page .header {\n      display: flex;\n      justify-content: space-between;\n      grid-column: 1/5;\n      padding: 3em 4em; }\n.container .first_page .idea {\n      grid-column: 1/5; }\n.container .first_page .contact_us {\n      grid-column: 2; }\n.container .first_page .main_photo {\n      grid-column: 3; }\n.container .second_page {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-column: 1/13;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1em; }\n.container .second_page_about_us {\n      grid-column: 1/3;\n      grid-row: 1; }\n.container .second_page_slider {\n      grid-column: 1;\n      grid-row: 2;\n      margin: 0 40px; }\n.container .second_page_about_work {\n      grid-column: 2;\n      grid-row: 2;\n      margin: 0 40px;\n      justify-items: center;\n      align-items: center; }\n.container .third_page {\n    height: 100vh;\n    display: grid;\n    grid-column: 1/13;\n    grid-template-rows: 60px 5fr;\n    margin: 20px 40px; }\n.container .third_page_foto {\n      display: grid;\n      grid-gap: 1em;\n      grid-template-areas: \"a6 a6 a6 b4\" \"c6 c6 c6 v4\" \"q4 w6 w6 w6\";\n      grid-template-rows: 1fr 1fr 1fr;\n      margin: 10px 0; }\n.container .third_page_foto_1 {\n        grid-area: a6; }\n.container .third_page_foto_2 {\n        grid-area: b4; }\n.container .third_page_foto_3 {\n        grid-area: c6; }\n.container .third_page_foto_4 {\n        grid-area: v4; }\n.container .third_page_foto_5 {\n        grid-area: q4; }\n.container .third_page_foto_6 {\n        grid-area: w6; }\n.container .forth_page {\n    display: grid;\n    grid-column: 1/13;\n    grid-template-rows: 60px 5fr;\n    margin: 50px 40px 10px 40px; }\n.container .forth_page_about_us {\n      grid-column: 1/13; }\n.container .forth_page_foto {\n      display: grid;\n      grid-column: 1/13;\n      grid-template-rows: 441px 441px;\n      grid-gap: 1em; }\n.container .forth_page_foto_1 {\n        grid-column: 1/4;\n        grid-row: 1; }\n.container .forth_page_foto_2 {\n        grid-column: 4/7;\n        grid-row: 1; }\n.container .forth_page_foto_3 {\n        grid-column: 7/10;\n        grid-row: 1; }\n.container .forth_page_foto_4 {\n        grid-column: 2/5;\n        grid-row: 2; }\n.container .forth_page_foto_5 {\n        grid-column: 5/8;\n        grid-row: 2; }\n.container .forth_page_foto_6 {\n        grid-column: 8/11;\n        grid-row: 2; }\n.container .fifth_page {\n    display: grid;\n    grid-gap: 1em;\n    grid-column: 1/13;\n    grid-template-rows: 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n    justify-content: center; }\n.container .fifth_page_contact {\n      grid-column: 1/5;\n      grid-row: 1; }\n.container .fifth_page_maps {\n      grid-column: 3/4;\n      grid-row: 2; }\n.container .footer {\n    display: grid;\n    grid-column: 1/13;\n    grid-gap: 1em; }\n.container .footer p {\n      grid-column: 1/5; }\n.container .footer .icon {\n      grid-column: 3/4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvc3R5bGVzLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX3N0eWxlLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX2ljb24uc2FzcyIsIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvYXBwL3N0eWxlcy9fZmlyc3RQYWdlLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX3NlY29uZFBhZ2Uuc2FzcyIsIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvYXBwL3N0eWxlcy9fdGhpcmRQYWdlLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX2ZvcnRoUGFnZS5zYXNzIiwiL1VzZXJzL3BvcGNvcm4vY3V0YXdheS9ib2lsZXJwbGF0ZS9jdXRhd2F5L3NyYy9hcHAvc3R5bGVzL19maWZ0aFBhZ2Uuc2FzcyIsIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvYXBwL3N0eWxlcy9tYWluLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNNQTtFQUNJLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTtBQUNoQztFQUNJLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7QUE0QnRCO0VBQ0ksVUFBVTtFQUNWLFNBQVMsRUFBQTtBQUNiO0VBQ0kscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTtBQUZsQjtJQUlRLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7QUFD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QjtJQUNqQixhQUFhLEVBQUE7QUFqSHJCO01BbUhZLGdCQUFnQixFQUFBO0FBbkg1QjtNQXFIWSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21haW4uc2Fzc1wiO1xuIiwiJGhlYWRlcl9jb2xvcjogI2VmZjBmMjtcbiRhY3RpdmVfY29sb3I6ICNiMmYyZWU7XG4kZ3JleTogZ3JleTtcbiR3aGl0ZTogIzAwMDAwMDtcbiRib2R5X2NvbG9yOiAjZjVmN2Y3O1xuJGZvbnRfd2VpZ2h0OiA5MDA7XG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG4uY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBAZXh0ZW5kIC5iYWNrZ3JvdW5kOyB9XG5cbkBtaXhpbiBsaW5rLWRlY29yIHtcbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwOyB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiAwO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KSBzY2FsZSgxKTsgfSB9IH1cbkBtaXhpbiBjb2xvcnMoJHNwYW5fY29sb3JzKSB7XG5cdHNwYW4ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRzcGFuX2NvbG9yczsgfSB9XG5AbWl4aW4gc2l6ZSAoJGhlaWdodDogM3JlbSwgJHdpZHRoOiAzcmVtLCAkYm9yZGVyLXJhZGl1czogM3JlbSkge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzOyB9XG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDsgfVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwOyB9IH1cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBsaSA+IGEge1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIHNpemU6IDEuMmVtO1xuICAgICAgICBAaW5jbHVkZSBsaW5rLWRlY29yOyB9IH1cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICRib2R5X2NvbG9yO1xuICAgIGgyLCBoNCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udF93ZWlnaHQ7XG4gICAgICAgIEBleHRlbmQgIC5jZW50ZXI7IH1cbiAgICBoNSB7XG4gICAgICAgIEBleHRlbmQgIC5jZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTsgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40ZW07XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZV9jb2xvcjsgfSB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDJlbTsgfVxuICAgIHAge1xuICAgICAgICBAZXh0ZW5kICAuY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE1LjU3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyB9IH1cblxuIiwiLmljb24tYnV0dG9uIHtcblx0QGluY2x1ZGUgc2l6ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udC1zaXplOiAyLjByZW07XG5cdGxpbmUtaGVpZ2h0OiAzcmVtO1xuXHRtYXJnaW46IDFweDtcblx0c3BhbiB7XG5cdFx0QGluY2x1ZGUgc2l6ZSgwLCAwLCAwKTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW46IDA7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0b3A6IDUwJTsgfVxuXHQmOmhvdmVyIHNwYW4ge1xuXHRcdEBpbmNsdWRlIHNpemU7XG5cdFx0bWFyZ2luOiAtMS41cmVtOyB9IH1cbi50d2l0dGVyIHtcblx0QGluY2x1ZGUgY29sb3JzICgjNDA5OWZmKTsgfVxuLmZhY2Vib29rIHtcblx0QGluY2x1ZGUgY29sb3JzICgjM0I1OTk4KTsgfVxuLmdvb2dsZS1wbHVzIHtcblx0QGluY2x1ZGUgY29sb3JzICgjZGI1YTNjKTsgfVxuXG4uaWNvbi1idXR0b24gaSB7XG5cdEBpbmNsdWRlIHNpemU7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29sb3I6ICR3aGl0ZTtcblx0bGluZS1oZWlnaHQ6IDNyZW07XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0ei1pbmRleDogMzsgfVxuIiwiLmZpcnN0X3BhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICRoZWFkZXJfY29sb3I7XG4gICAgLmxvZ28ge1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0O1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41MmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNTNlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGFjdGl2ZV9jb2xvcjsgfSB9IH1cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgQGV4dGVuZCAgLmNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0LjU3cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmVfY29sb3I7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDsgfSB9IH1cbiAgICAubWFpbl9waG90byB7XG4gICAgICAgIEBleHRlbmQgLmJhY2tncm91bmQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9BaXJfdGVtcGxhdGUuc3ZnLnBuZ1wiKTsgfSB9XG5cbiIsIi5zZWNvbmRfcGFnZSB7XG4gICAgLmJhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlX2NvbG9yOyB9XG4gICAgJl9zbGlkZXIge1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiB9ICAgICAgICAgICAgLy8gYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXG4gICAgICAgIGltZy5hY3RpdmUge1xuICAgICAgICAgICAgei1pbmRleDogNDsgfVxuICAgICAgICAmX2Fib3V0X3dvcmsge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDsgfSB9XG4gICAgLmJhZGdlIHtcbiAgICAgICAgQGV4dGVuZCAuYmFjaztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlOyB9IH1cblxuXG5cblxuIiwiLnRoaXJkX3BhZ2VfZm90byB7XG4gICAgJl8xLCAmXzIsICZfMywgJl80LCAmXzUsICZfNiB7XG4gICAgICAgIEBleHRlbmQgLmJhY2tncm91bmQ7IH1cbiAgICBhLCBwLCBoNSB7XG4gICAgICAgIEBleHRlbmQgLmNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAxLCAwLjYpOyB9XG4gICAgaDUge1xuICAgICAgICBtYXJnaW46IDJlbSAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAkYWN0aXZlX2NvbG9yOyB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAkaGVhZGVyX2NvbG9yOyB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAkYWN0aXZlX2NvbG9yO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodDsgfSB9XG4gICAgJl9hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxOyB9IH1cbiAgICAmXzEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL3RoXzEuanBnXCIpOyB9XG4gICAgJl8yIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy90aF8yLmpwZ1wiKTsgfVxuICAgICZfMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvdGhfMy5qcGdcIik7IH1cbiAgICAmXzQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL3RoXzQuanBnXCIpOyB9XG4gICAgJl81IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy90aF81LmpwZ1wiKTsgfVxuICAgICZfNiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvdGhfNi5qcGdcIik7IH0gfVxuIiwiLmZvcnRoX3BhZ2Uge1xuICAgIC5mb3J0aF9wYWdlX2ZvdG8ge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udF93ZWlnaHQ7IH0gfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMTVweDsgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGFjdGl2ZV9jb2xvciwgMC41KTsgfVxuICAgICAgICAmXzEsICZfMiwgJl8zLCAmXzQsICZfNSwgJl82IHtcbiAgICAgICAgICAgIEBleHRlbmQgLmJhY2tncm91bmQ7IH1cbiAgICAgICAgJl8xIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvZm90bzEuanBnXCIpOyB9XG4gICAgICAgICZfMiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2ZvdG8yLmpwZ1wiKTsgfVxuICAgICAgICAmXzMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9mb3RvMy5qcGdcIik7IH1cbiAgICAgICAgJl80IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvZm90bzQuanBnXCIpOyB9XG4gICAgICAgICZfNSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2ZvdG81LmpwZ1wiKTsgfVxuICAgICAgICAmXzYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9mb3RvMS5qcGdcIik7IH0gfSB9XG5cbiIsIi5maWZ0aF9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAkaGVhZGVyX2NvbG9yO1xuICAgICZfY29udGFjdCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAmX21hcHMge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL21hcHMuanBnXCIpOyB9IH1cbiIsIkBpbXBvcnQgXCJzdHlsZVwiO1xuQGltcG9ydCBcImljb25cIjtcbkBpbXBvcnQgXCJmaXJzdFBhZ2VcIjtcbkBpbXBvcnQgXCJzZWNvbmRQYWdlXCI7XG5AaW1wb3J0IFwidGhpcmRQYWdlXCI7XG5AaW1wb3J0IFwiZm9ydGhQYWdlXCI7XG5AaW1wb3J0IFwiZmlmdGhQYWdlXCI7XG4vLyBAaW1wb3J0IFwiYW5vdGhlclZhclwiXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAxZW07XG4gICAgLmZpcnN0X3BhZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWdhcDogMWVtO1xuICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNlbSA0ZW07IH1cbiAgICAgICAgLmlkZWEge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTsgfVxuICAgICAgICAuY29udGFjdF91cyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjsgfVxuICAgICAgICAubWFpbl9waG90byB7XG4gICAgICAgICAgIGdyaWQtY29sdW1uOiAzOyB9IH1cbiAgICAuc2Vjb25kX3BhZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAgICAgJl9hYm91dF91cyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XG4gfSAgICAgICAgICAgIC8vIGp1c3RpZnktaXRlbXM6IGNlbnRlclxuICAgICAgICAmX3NsaWRlciB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDQwcHg7IH1cbiAgICAgICAgJl9hYm91dF93b3JrIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgICAgICBtYXJnaW46IDAgNDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0gfVxuICAgIC50aGlyZF9wYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCA1ZnI7XG4gICAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuICAgICAgICAmX2ZvdG8ge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxZW07XG4gICAgICAgICAgICAvLyBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImE2IGE2IGE2IGE2IGE2IGE2IGI0IGI0IGI0IGI0XCIgXCJjNiBjNiBjNiBjNiBjNiBjNiB2NCB2NCB2NCB2NFwiIFwicTQgcTQgcTQgcTQgdzYgdzYgdzYgdzYgdzYgdzZcIlxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhNiBhNiBhNiBiNFwiIFwiYzYgYzYgYzYgdjRcIiBcInE0IHc2IHc2IHc2XCI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAmXzEge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogYTY7IH1cbiAgICAgICAgICAgICZfMiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBiNDsgfVxuICAgICAgICAgICAgJl8zIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGM2OyB9XG4gICAgICAgICAgICAmXzQge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdjQ7IH1cbiAgICAgICAgICAgICZfNSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBxNDsgfVxuICAgICAgICAgICAgJl82IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHc2OyB9IH0gfVxuICAgIC5mb3J0aF9wYWdlIHtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMTB2aFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDVmcjtcbiAgICAgICAgbWFyZ2luOiA1MHB4IDQwcHggMTBweCA0MHB4O1xuICAgICAgICAmX2Fib3V0X3VzIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzEzOyB9XG4gICAgICAgICZfZm90byB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA0NDFweCA0NDFweDtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxZW07XG4gICAgICAgICAgICAmXzEge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDE7IH1cbiAgICAgICAgICAgICZfMiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQvNztcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMTsgfVxuICAgICAgICAgICAgJl8zIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNy8xMDtcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMTsgfVxuICAgICAgICAgICAgJl80IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMi81O1xuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyOyB9XG4gICAgICAgICAgICAmXzUge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzg7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDI7IH1cbiAgICAgICAgICAgICZfNiB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDgvMTE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDI7IH0gfSB9XG4gICAgLmZpZnRoX3BhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWdhcDogMWVtO1xuICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAmX2NvbnRhY3Qge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcbiAgICAgICAgICAgIGdyaWQtcm93OiAxOyB9XG4gICAgICAgICZfbWFwcyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7IH0gfVxuICAgIC5mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81OyB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7IH0gfSB9XG5cblxuXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.sass */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/popcorn/cutaway/boilerplate/cutaway/src/styles.sass */"./src/styles.sass");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map