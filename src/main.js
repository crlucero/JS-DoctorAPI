import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor, Specialty } from './doctor.js';

$(document).ready(function() {
  $("form#drSearch").submit(function() {
    event.preventDefault();
    let name = $("input#drName").val();
    let specialty = $("input#specialty").val();

    let searchSpecialty = new Specialty();
    let promise = searchSpecialty.getDoctorBySpecialty(name, specialty);

    promise.then(function(response) {
      $("#results").empty();
      $("#errorMessage").empty();
      let body = JSON.parse(response);

      if(body.data.length===0) {
        $("#errorMessage").text("No doctors matched your search. Try again.");
      }

      for(let x = 0; x<body.data.length; x++) {
        let firstName = body.data[x].profile.first_name;
        let lastName = body.data[x].profile.last_name;
        let address = `${body.data[x].practices[0].visit_address.street}
          ${body.data[x].practices[0].visit_address.city}, ${body.data[x].practices[0].visit_address.state} ${body.data[x].practices[0].visit_address.zip}`;
        let phone = body.data[x].practices[0].phones[0].number;
        let patientStatus = body.data[x].practices[0].accepts_new_patients;

        let doctor = new Doctor(firstName, lastName, address, phone, patientStatus);

        $("#results-table").append(`<tr>
            <td>${doctor.firstName}</td>
            <td>${doctor.lastName}</td>
            <td>${doctor.address}</td>
            <td>${doctor.phone}</td>
            <td>${doctor.patientStatus}</td>
          </tr>`);
      } 
    }, function (error) {
      $('#errorMessage').text(`We could not process your request. Please try again. ${error}`);
    });
  });
});