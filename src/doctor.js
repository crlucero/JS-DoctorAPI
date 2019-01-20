export class Doctor {
    constructor(firstName, lastName, address, phone, patientStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.patientStatus = patientStatus;
    }
}

export class Specialty {

    // This is the main API query that will grab doctors and a specialty
    getDoctorBySpecialty(name, specialty) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.exports.apiKey}&location=wa-seattle&query=${specialty}&name=${name}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
} 

// export class Doctor {
//   constructor(firstName, lastName, address, phone, patientStatus) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.phone = phone;
//     this.patientStatus = patientStatus;
//   }
// }

// export class Specialty {
//     // This is the main API query that will grab doctors and a specialty
//     getDoctorBySpecialty(name, specialty) {
//         return new Promise(function(resolve, reject) {
//             let request = new XMLHttpRequest();
//             let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
//             request.onload = function() {
//                 if(this.status === 200) {
//                     resolve(request.response);
//                 } else {
//                     reject(Error(request.statusText));
//                 }
//             }
//             request.open("GET", url, true);
//             request.send();
//         });
//     }
// } 
