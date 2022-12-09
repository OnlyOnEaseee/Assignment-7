// Either not do anything and ask the teacher on tuesday or make something that should match the answer

// Exercise: Change the JSON string so that it is an array of appointments 

// The program must then be able to ask the user the name of a property (like location) of appointments
// and then displays the list of all locations of the appointments
// Does it list all locations of a single appointments or multiple appointments that have the same location?

// Basically how I vision it [appointment1, appointment2, ...]

// Changing JSON to 

let correctProperty = false;
let propertyFound = false;

const listOfAppointments = [
    { title: 'Appointment 1', location: 'Jersey', duration: 60, time: '14:00'},
    { title: 'Appointment 2', location: 'Texas', duration: 40, time: '18:00'},
    { title: 'Appointment 3', location: 'Alaska', duration: 100, time: '20:00'},
    { title: 'Appointment 4', location: 'California', duration: 60, time: '11:00'},
    { title: 'Appointment 5', location: 'Arizona', duration: 30, time: '7:30'},
    { title: 'Appointment 6', location: 'Nebraska', duration: 120, time: '24:00'},
];

const listOfAppointmentsJSON = JSON.stringify(listOfAppointments);

console.log(listOfAppointmentsJSON);

const listOfAppointmentsObj = JSON.parse(listOfAppointmentsJSON);

console.log(listOfAppointmentsObj);



while(!correctProperty) {
    const locationPrompt = prompt('Give location of appointment');

    for(let i=0; i < listOfAppointmentsObj.length; i++) {
        if(listOfAppointmentsObj[i].location.toLowerCase() === locationPrompt.toLowerCase()) {
            correctProperty = true;
            propertyFound = true;
            alert(`Location of ${listOfAppointmentsObj[i].title}: ${listOfAppointmentsObj[i].location}`);
        };
    };

    if(!propertyFound) {
        alert(`No appointments with the location of ${locationPrompt}.`);
    };
};

/*

const appointmentJSON = '{ "title" : "Doctor\'s Appointment", "location" : "New Jersey", "duration" : "100", "date" : "23.12.2002", "time" : "14:12", "listOfParticipants" : [{"firstName" : "Matt","surName" : "Adam","phoneNumber" : 637468351213,"participation" : false}]}';

const appointmentObj = JSON.parse(appointmentJSON);

alert(`
    Appointment: ${appointmentObj.title}
    Location: ${appointmentObj.location}
    Duration: ${appointmentObj.duration}
    Time: ${appointmentObj.time}
    List of Participants:
        Name: ${appointmentObj.listOfParticipants[0].firstName} ${appointmentObj.listOfParticipants[0].surName}
        Phone Number: ${appointmentObj.listOfParticipants[0].phoneNumber}
        Participates: ${appointmentObj.listOfParticipants[0].participation ? 'Yes' : 'No'}
`);

*/