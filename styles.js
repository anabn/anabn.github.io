(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.sass":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.sass ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.background, .center, body h2, body h4, body h5, body p, .first_page .button, .third_page_foto a, .third_page_foto p, .third_page_foto h5, .first_page .main_photo, .third_page_foto_1, .third_page_foto_2, .third_page_foto_3, .third_page_foto_4, .third_page_foto_5, .third_page_foto_6, .forth_page .forth_page_foto_1, .forth_page .forth_page_foto_2, .forth_page .forth_page_foto_3, .forth_page .forth_page_foto_4, .forth_page .forth_page_foto_5, .forth_page .forth_page_foto_6 {\n  background-size: cover;\n  background-repeat: no-repeat; }\n.center, body h2, body h4, body h5, body p, .first_page .button, .third_page_foto a, .third_page_foto p, .third_page_foto h5 {\n  align-items: center;\n  justify-content: center;\n  text-align: center; }\n* {\n  padding: 0;\n  margin: 0; }\na {\n  text-decoration: none;\n  color: #000000; }\na:hover {\n    text-decoration: none;\n    color: #000000; }\nul {\n  list-style: none;\n  list-style-type: none;\n  display: flex;\n  padding: 1em; }\nul li > a {\n    padding: 1em;\n    size: 1.2em; }\nul li > a a {\n      color: #000000;\n      text-decoration: none; }\nul li > a:visited {\n      color: #000000; }\nul li > a::after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 2px;\n      background-color: red;\n      -webkit-transform: translateY(5px) scale(0);\n              transform: translateY(5px) scale(0);\n      transition: all 0.2s; }\nul li > a:hover {\n      -webkit-text-decoration: 0;\n              text-decoration: 0; }\nul li > a:hover::after {\n        -webkit-transform: translateY(7px) scale(1);\n                transform: translateY(7px) scale(1); }\nbody {\n  background: #f5f7f7; }\nbody h2, body h4 {\n    text-transform: uppercase;\n    font-weight: 900; }\nbody h5 {\n    font-size: 1.2em;\n    line-height: 1.2em; }\nbody h2 {\n    font-size: 2.5em;\n    text-shadow: 3px 3px rgba(0, 0, 0, 0.2);\n    line-height: 1.5em;\n    letter-spacing: .4em; }\nbody h2 span {\n      background-color: #b2f2ee; }\nbody h4 {\n    font-size: 2em; }\nbody p {\n    font-size: 15.57px;\n    line-height: 28px; }\n.icon-button {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 3rem;\n  background-color: grey;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 2.0rem;\n  line-height: 3rem;\n  margin: 1px; }\n.icon-button span {\n    height: 0;\n    width: 0;\n    border-radius: 0;\n    display: block;\n    margin: 0;\n    position: absolute;\n    left: 50%;\n    top: 50%; }\n.icon-button:hover span {\n    height: 3rem;\n    width: 3rem;\n    border-radius: 3rem;\n    margin: -1.5rem; }\n.twitter span {\n  background-color: #4099ff; }\n.facebook span {\n  background-color: #3B5998; }\n.google-plus span {\n  background-color: #db5a3c; }\n.icon-button i {\n  height: 3rem;\n  width: 3rem;\n  border-radius: 3rem;\n  background: none;\n  position: absolute;\n  color: #000000;\n  line-height: 3rem;\n  left: 0;\n  top: 0;\n  z-index: 3; }\n.first_page {\n  background: #eff0f2; }\n.first_page .logo {\n    font-weight: 900; }\n.first_page .logo a {\n      font-size: 1.52em;\n      border: 3px solid #000000;\n      border-radius: 3px;\n      padding: .2em .5em;\n      max-width: 100px;\n      text-align: center; }\n.first_page .logo a span {\n        font-size: 1.53em;\n        color: #b2f2ee; }\n.first_page .button {\n    margin: 40px; }\n.first_page .button a {\n      text-transform: uppercase;\n      font-size: 14.57px;\n      border: 1px solid #000000;\n      border-radius: 3px;\n      padding: 10px 20px;\n      max-width: 200px; }\n.first_page .button a:hover {\n        background: #b2f2ee;\n        transition: all 0.2s;\n        border: 2px solid #000000; }\n.first_page .main_photo {\n    margin-bottom: 50px;\n    width: 150px;\n    height: 150px;\n    background-image: url('Air_template.svg.png'); }\n.second_page_slider {\n  height: 300px;\n  display: block;\n  position: relative;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  width: 80%; }\n.second_page_slider img {\n    display: inline-block;\n    width: 300px;\n    position: absolute;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: .4s all; }\n.second_page_slider img.active {\n    z-index: 4; }\n.second_page_slider_about_work {\n    max-width: 650px; }\n.third_page_foto a, .third_page_foto p, .third_page_foto h5 {\n  background: rgba(0, 0, 1, 0.6); }\n.third_page_foto h5 {\n  margin: 2em 0;\n  padding: 10px 0;\n  text-transform: uppercase;\n  color: #b2f2ee; }\n.third_page_foto p {\n  color: #eff0f2; }\n.third_page_foto a {\n  color: #b2f2ee;\n  padding: 5px; }\n.third_page_foto a:hover {\n    font-weight: 900; }\n.third_page_foto_active {\n  opacity: 0;\n  transition: all 0.2s; }\n.third_page_foto_active:hover {\n    opacity: 1; }\n.third_page_foto_1 {\n  background-image: url('th_1.jpg'); }\n.third_page_foto_2 {\n  background-image: url('th_2.jpg'); }\n.third_page_foto_3 {\n  background-image: url('th_3.jpg'); }\n.third_page_foto_4 {\n  background-image: url('th_4.jpg'); }\n.third_page_foto_5 {\n  background-image: url('th_5.jpg'); }\n.third_page_foto_6 {\n  background-image: url('th_6.jpg'); }\n.forth_page .forth_page_foto a:hover {\n  font-weight: 900; }\n.forth_page .forth_page_foto h5 {\n  margin-top: 315px; }\n.forth_page .forth_page_foto p {\n  background: rgba(178, 242, 238, 0.5); }\n.forth_page .forth_page_foto_1 {\n  background-image: url('foto1.jpg'); }\n.forth_page .forth_page_foto_2 {\n  background-image: url('foto2.jpg'); }\n.forth_page .forth_page_foto_3 {\n  background-image: url('foto3.jpg'); }\n.forth_page .forth_page_foto_4 {\n  background-image: url('foto4.jpg'); }\n.forth_page .forth_page_foto_5 {\n  background-image: url('foto5.jpg'); }\n.forth_page .forth_page_foto_6 {\n  background-image: url('foto1.jpg'); }\n.fifth_page {\n  background: #eff0f2; }\n.fifth_page_contact {\n    padding: 10px; }\n.fifth_page_maps {\n    width: 500px;\n    height: 80%;\n    background-image: url('maps.jpg'); }\n.container {\n  display: grid;\n  grid-gap: 1em; }\n.container .first_page {\n    height: 100vh;\n    display: grid;\n    grid-gap: 1em;\n    grid-column: 1/13; }\n.container .first_page .header {\n      display: flex;\n      justify-content: space-between;\n      grid-column: 1/5;\n      padding: 3em 4em; }\n.container .first_page .idea {\n      grid-column: 1/5; }\n.container .first_page .contact_us {\n      grid-column: 2; }\n.container .first_page .main_photo {\n      grid-column: 3; }\n.container .second_page {\n    height: 100vh;\n    width: 100%;\n    display: grid;\n    grid-column: 1/13;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1em; }\n.container .second_page_about_us {\n      grid-column: 1/3;\n      grid-row: 1;\n      justify-items: center; }\n.container .second_page_slider {\n      grid-column: 1;\n      grid-row: 2;\n      margin: 20px 0 40px 40px;\n      justify-items: center;\n      align-items: center; }\n.container .second_page_about_work {\n      grid-column: 2;\n      grid-row: 2;\n      margin: 0 40px;\n      justify-items: center;\n      align-items: center; }\n.container .third_page {\n    height: 100vh;\n    display: grid;\n    grid-column: 1/13;\n    grid-template-rows: 60px 5fr;\n    margin: 20px 40px; }\n.container .third_page_foto {\n      display: grid;\n      grid-gap: 1em;\n      grid-template-areas: \"a6 a6 a6 b4\" \"c6 c6 c6 v4\" \"q4 w6 w6 w6\";\n      grid-template-rows: 1fr 1fr 1fr;\n      margin: 10px 0; }\n.container .third_page_foto_1 {\n        grid-area: a6; }\n.container .third_page_foto_2 {\n        grid-area: b4; }\n.container .third_page_foto_3 {\n        grid-area: c6; }\n.container .third_page_foto_4 {\n        grid-area: v4; }\n.container .third_page_foto_5 {\n        grid-area: q4; }\n.container .third_page_foto_6 {\n        grid-area: w6; }\n.container .forth_page {\n    display: grid;\n    grid-column: 1/13;\n    grid-template-rows: 60px 5fr;\n    margin: 50px 40px 10px 40px; }\n.container .forth_page_about_us {\n      grid-column: 1/13; }\n.container .forth_page_foto {\n      display: grid;\n      grid-column: 1/13;\n      grid-template-rows: 441px 441px;\n      grid-gap: 1em; }\n.container .forth_page_foto_1 {\n        grid-column: 1/4;\n        grid-row: 1; }\n.container .forth_page_foto_2 {\n        grid-column: 4/7;\n        grid-row: 1; }\n.container .forth_page_foto_3 {\n        grid-column: 7/10;\n        grid-row: 1; }\n.container .forth_page_foto_4 {\n        grid-column: 2/5;\n        grid-row: 2; }\n.container .forth_page_foto_5 {\n        grid-column: 5/8;\n        grid-row: 2; }\n.container .forth_page_foto_6 {\n        grid-column: 8/11;\n        grid-row: 2; }\n.container .fifth_page {\n    display: grid;\n    grid-gap: 1em;\n    grid-column: 1/13;\n    grid-template-rows: 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n    justify-content: center; }\n.container .fifth_page_contact {\n      grid-column: 1/5;\n      grid-row: 1; }\n.container .fifth_page_maps {\n      grid-column: 3/4;\n      grid-row: 2; }\n.container .footer {\n    display: grid;\n    grid-column: 1/13;\n    grid-gap: 1em; }\n.container .footer p {\n      grid-column: 1/5; }\n.container .footer .icon {\n      grid-column: 3/4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvc3R5bGVzLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX3N0eWxlLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX2ljb24uc2FzcyIsIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvYXBwL3N0eWxlcy9fZmlyc3RQYWdlLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX3NlY29uZFBhZ2Uuc2FzcyIsIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvYXBwL3N0eWxlcy9fdGhpcmRQYWdlLnNhc3MiLCIvVXNlcnMvcG9wY29ybi9jdXRhd2F5L2JvaWxlcnBsYXRlL2N1dGF3YXkvc3JjL2FwcC9zdHlsZXMvX2ZvcnRoUGFnZS5zYXNzIiwiL1VzZXJzL3BvcGNvcm4vY3V0YXdheS9ib2lsZXJwbGF0ZS9jdXRhd2F5L3NyYy9hcHAvc3R5bGVzL19maWZ0aFBhZ2Uuc2FzcyIsIi9Vc2Vycy9wb3Bjb3JuL2N1dGF3YXkvYm9pbGVycGxhdGUvY3V0YXdheS9zcmMvYXBwL3N0eWxlcy9tYWluLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNNQTtFQUNJLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTtBQUNoQztFQUNJLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7QUE0QnRCO0VBQ0ksVUFBVTtFQUNWLFNBQVMsRUFBQTtBQUNiO0VBQ0kscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTtBQUZsQjtJQUlRLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7QUFD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V0FBVyxFQUFBO0FBL0d2QjtJQWlIUSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWEsRUFBQTtBQW5IckI7TUFxSFksZ0JBQWdCLEVBQUE7QUFySDVCO01BdUhZLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbWFpbi5zYXNzXCI7XG5cbiIsIiRoZWFkZXJfY29sb3I6ICNlZmYwZjI7XG4kYWN0aXZlX2NvbG9yOiAjYjJmMmVlO1xuJGdyZXk6IGdyZXk7XG4kd2hpdGU6ICMwMDAwMDA7XG4kYm9keV9jb2xvcjogI2Y1ZjdmNztcbiRmb250X3dlaWdodDogOTAwO1xuLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuLmNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgQGV4dGVuZCAuYmFja2dyb3VuZDsgfVxuXG5AbWl4aW4gbGluay1kZWNvciB7XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDsgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogMDtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCkgc2NhbGUoMSk7IH0gfSB9XG5AbWl4aW4gY29sb3JzKCRzcGFuX2NvbG9ycykge1xuXHRzcGFuIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkc3Bhbl9jb2xvcnM7IH0gfVxuQG1peGluIHNpemUgKCRoZWlnaHQ6IDNyZW0sICR3aWR0aDogM3JlbSwgJGJvcmRlci1yYWRpdXM6IDNyZW0pIHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1czsgfVxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7IH1cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDsgfSB9XG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbGkgPiBhIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBzaXplOiAxLjJlbTtcbiAgICAgICAgQGluY2x1ZGUgbGluay1kZWNvcjsgfSB9XG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYm9keV9jb2xvcjtcbiAgICBoMiwgaDQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0O1xuICAgICAgICBAZXh0ZW5kICAuY2VudGVyOyB9XG4gICAgaDUge1xuICAgICAgICBAZXh0ZW5kICAuY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07IH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNGVtO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmVfY29sb3I7IH0gfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07IH1cbiAgICBwIHtcbiAgICAgICAgQGV4dGVuZCAgLmNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNS41N3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDsgfSB9XG5cbiIsIi5pY29uLWJ1dHRvbiB7XG5cdEBpbmNsdWRlIHNpemU7XG5cdGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGZvbnQtc2l6ZTogMi4wcmVtO1xuXHRsaW5lLWhlaWdodDogM3JlbTtcblx0bWFyZ2luOiAxcHg7XG5cdHNwYW4ge1xuXHRcdEBpbmNsdWRlIHNpemUoMCwgMCwgMCk7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dG9wOiA1MCU7IH1cblx0Jjpob3ZlciBzcGFuIHtcblx0XHRAaW5jbHVkZSBzaXplO1xuXHRcdG1hcmdpbjogLTEuNXJlbTsgfSB9XG4udHdpdHRlciB7XG5cdEBpbmNsdWRlIGNvbG9ycyAoIzQwOTlmZik7IH1cbi5mYWNlYm9vayB7XG5cdEBpbmNsdWRlIGNvbG9ycyAoIzNCNTk5OCk7IH1cbi5nb29nbGUtcGx1cyB7XG5cdEBpbmNsdWRlIGNvbG9ycyAoI2RiNWEzYyk7IH1cblxuLmljb24tYnV0dG9uIGkge1xuXHRAaW5jbHVkZSBzaXplO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiAkd2hpdGU7XG5cdGxpbmUtaGVpZ2h0OiAzcmVtO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IDM7IH1cbiIsIi5maXJzdF9wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAkaGVhZGVyX2NvbG9yO1xuICAgIC5sb2dvIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNTJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMmVtIC41ZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjUzZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICRhY3RpdmVfY29sb3I7IH0gfSB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIEBleHRlbmQgIC5jZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNC41N3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlX2NvbG9yO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7IH0gfSB9XG4gICAgLm1haW5fcGhvdG8ge1xuICAgICAgICBAZXh0ZW5kIC5iYWNrZ3JvdW5kO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvQWlyX3RlbXBsYXRlLnN2Zy5wbmdcIik7IH0gfVxuXG4iLCIuc2Vjb25kX3BhZ2Uge1xuICAgICZfc2xpZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGVyc3BlY3RpdmU6IDUwMHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzIGFsbDsgfVxuICAgICAgICBpbWcuYWN0aXZlIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDQ7IH1cbiAgICAgICAgJl9hYm91dF93b3JrIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjUwcHg7IH0gfSB9XG4iLCIudGhpcmRfcGFnZV9mb3RvIHtcbiAgICAmXzEsICZfMiwgJl8zLCAmXzQsICZfNSwgJl82IHtcbiAgICAgICAgQGV4dGVuZCAuYmFja2dyb3VuZDsgfVxuICAgIGEsIHAsIGg1IHtcbiAgICAgICAgQGV4dGVuZCAuY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDEsIDAuNik7IH1cbiAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogMmVtIDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICRhY3RpdmVfY29sb3I7IH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICRoZWFkZXJfY29sb3I7IH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICRhY3RpdmVfY29sb3I7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnRfd2VpZ2h0OyB9IH1cbiAgICAmX2FjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IH0gfVxuICAgICZfMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvdGhfMS5qcGdcIik7IH1cbiAgICAmXzIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL3RoXzIuanBnXCIpOyB9XG4gICAgJl8zIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy90aF8zLmpwZ1wiKTsgfVxuICAgICZfNCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvdGhfNC5qcGdcIik7IH1cbiAgICAmXzUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL3RoXzUuanBnXCIpOyB9XG4gICAgJl82IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy90aF82LmpwZ1wiKTsgfSB9XG4iLCIuZm9ydGhfcGFnZSB7XG4gICAgLmZvcnRoX3BhZ2VfZm90byB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250X3dlaWdodDsgfSB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMxNXB4OyB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkYWN0aXZlX2NvbG9yLCAwLjUpOyB9XG4gICAgICAgICZfMSwgJl8yLCAmXzMsICZfNCwgJl81LCAmXzYge1xuICAgICAgICAgICAgQGV4dGVuZCAuYmFja2dyb3VuZDsgfVxuICAgICAgICAmXzEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9mb3RvMS5qcGdcIik7IH1cbiAgICAgICAgJl8yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvZm90bzIuanBnXCIpOyB9XG4gICAgICAgICZfMyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2ZvdG8zLmpwZ1wiKTsgfVxuICAgICAgICAmXzQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9mb3RvNC5qcGdcIik7IH1cbiAgICAgICAgJl81IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvZm90bzUuanBnXCIpOyB9XG4gICAgICAgICZfNiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2ZvdG8xLmpwZ1wiKTsgfSB9IH1cblxuIiwiLmZpZnRoX3BhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICRoZWFkZXJfY29sb3I7XG4gICAgJl9jb250YWN0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDsgfVxuICAgICZfbWFwcyB7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvbWFwcy5qcGdcIik7IH0gfVxuIiwiQGltcG9ydCBcInN0eWxlXCI7XG5AaW1wb3J0IFwiaWNvblwiO1xuQGltcG9ydCBcImZpcnN0UGFnZVwiO1xuQGltcG9ydCBcInNlY29uZFBhZ2VcIjtcbkBpbXBvcnQgXCJ0aGlyZFBhZ2VcIjtcbkBpbXBvcnQgXCJmb3J0aFBhZ2VcIjtcbkBpbXBvcnQgXCJmaWZ0aFBhZ2VcIjtcbi8vIEBpbXBvcnQgXCJhbm90aGVyVmFyXCJcbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAuZmlyc3RfcGFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtZ2FwOiAxZW07XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xuICAgICAgICAgICAgcGFkZGluZzogM2VtIDRlbTsgfVxuICAgICAgICAuaWRlYSB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81OyB9XG4gICAgICAgIC5jb250YWN0X3VzIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyOyB9XG4gICAgICAgIC5tYWluX3Bob3RvIHtcbiAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7IH0gfVxuICAgIC5zZWNvbmRfcGFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLWdhcDogMWVtO1xuICAgICAgICAmX2Fib3V0X3VzIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgICAgICAgICBncmlkLXJvdzogMTtcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgfVxuICAgICAgICAmX3NsaWRlciB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgNDBweCA0MHB4O1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgICAmX2Fib3V0X3dvcmsge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgICAgICAgICBncmlkLXJvdzogMjtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0MHB4O1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfSB9XG4gICAgLnRoaXJkX3BhZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDVmcjtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDQwcHg7XG4gICAgICAgICZfZm90byB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAgICAgICAgIC8vIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYTYgYTYgYTYgYTYgYTYgYTYgYjQgYjQgYjQgYjRcIiBcImM2IGM2IGM2IGM2IGM2IGM2IHY0IHY0IHY0IHY0XCIgXCJxNCBxNCBxNCBxNCB3NiB3NiB3NiB3NiB3NiB3NlwiXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImE2IGE2IGE2IGI0XCIgXCJjNiBjNiBjNiB2NFwiIFwicTQgdzYgdzYgdzZcIjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICZfMSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBhNjsgfVxuICAgICAgICAgICAgJl8yIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGI0OyB9XG4gICAgICAgICAgICAmXzMge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogYzY7IH1cbiAgICAgICAgICAgICZfNCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB2NDsgfVxuICAgICAgICAgICAgJl81IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHE0OyB9XG4gICAgICAgICAgICAmXzYge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdzY7IH0gfSB9XG4gICAgLmZvcnRoX3BhZ2Uge1xuICAgICAgICAvLyBoZWlnaHQ6IDExMHZoXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggNWZyO1xuICAgICAgICBtYXJnaW46IDUwcHggNDBweCAxMHB4IDQwcHg7XG4gICAgICAgICZfYWJvdXRfdXMge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTM7IH1cbiAgICAgICAgJl9mb3RvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8xMztcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDQ0MXB4IDQ0MXB4O1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDFlbTtcbiAgICAgICAgICAgICZfMSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMTsgfVxuICAgICAgICAgICAgJl8yIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNC83O1xuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxOyB9XG4gICAgICAgICAgICAmXzMge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA3LzEwO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxOyB9XG4gICAgICAgICAgICAmXzQge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzU7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDI7IH1cbiAgICAgICAgICAgICZfNSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUvODtcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMjsgfVxuICAgICAgICAgICAgJl82IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogOC8xMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMjsgfSB9IH1cbiAgICAuZmlmdGhfcGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtZ2FwOiAxZW07XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICZfY29udGFjdCB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS81O1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7IH1cbiAgICAgICAgJl9tYXBzIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XG4gICAgICAgICAgICBncmlkLXJvdzogMjsgfSB9XG4gICAgLmZvb3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzEzO1xuICAgICAgICBncmlkLWdhcDogMWVtO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzU7IH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDsgfSB9IH1cblxuXG5cbiJdfQ== */", '', '']]

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