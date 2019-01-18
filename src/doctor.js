export class Doctor {

    // This is the main API query that will grab all doctors' information
    getDoctorByName(name) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}user_location=47.6062%2C%20122.3321&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }   
    
    getDoctorByPractice(practice) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${practice}user_location=47.6062%2C%20122.3321&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
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
