import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './doctor.js';

$(document).ready(function() {


  $('#practiceSearch').submit(function () {
    event.preventDefault();
    let practice = new Doctor();
    let promise = practice.getDoctorByPractice();

    promise.then(function (response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++)
        $("#doctorName").append(`<li class=${body.data[i].specialties.name}>${body.data[i].specialties.name}`);
    })
  });


  // $("form#nameSearch").submit(function() {
  //   event.preventDefault();
  //   $("#nameSearch")

  //   let doctorName = $("input#doctorName").val();
  //   let newSearch = new Doctor();
  //   let promise = newSearch.getDoctorByName(doctorName);

  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     for(let i = 0; i<body.data[i].length; i++)
  //     $("#doctorName").append(`<li class=${body.data[i]}>${body.data[i]}`);
  //   })

  // })

});