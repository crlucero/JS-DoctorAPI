# Doctor Search 1_18_19


#### A program that lets a user search for doctors by illness or doctor name


## Description
This is a program that will allow a user to enter an illness or doctor's name into a form and it will give them a list of doctors in that area.


### Specs
| # | Spec | Input | Output |
| :-------------     | :-------------     | :------------- | :------------- |
| 1 | The program should return a list of doctors that fit the search query for an illness.  | Broken Leg | Dr. Jones, Dr. Jim,... |
| 2 | The program should return a list of doctors that fit the search query for a doctor's name.  | Dr. Lucero | Here is a list of all the Dr. Lucero's in the Seattle area. |
| 3 | The program should return should return a doctor's detail if included in the search. | Dr. Lucero | Name, Address, Number, Website, new patient acceptance. |
| 4 | If the search doesn't include doctor's it will return a message stating that no doctor's meet the criteria | Dr. Lucero | Name, Address, Number, Website, new patient acceptance. | Dr. Lucero | "There are no doctor's who meet the criteria you searched for. Please search again." |


## Setup/Installation Requirements to run program

* Clone repository $ git clone repo name
* Switch into the solution directory: $ cd DoctorAPI
* When file is open, install webpack dependcies: npm install
* Once dependcies are installed start the program in a browser with: npm run start 
* To test: npm run test
* Go to https://developer.betterdoctor.com/signup to signup for an API Key 
* Enter your API Key in your backend js file to make calls to API.


## Known Bugs
N/A

## Support and contact details

For any quesitons contact me at: cristianjlucero32@gmail.com


## Technologies Used

* Node Package Manager (tool that manages all external tools and libraries being used)
* JavaScript
* Karma (test runner)
* Jasmine (testing framework)
* Visual Studio Code (text editor)
* CSS
* HTML
* Postman


### License

Copyright (c) 2018 Cristian Lucero

This website is licensed under the MIT license.