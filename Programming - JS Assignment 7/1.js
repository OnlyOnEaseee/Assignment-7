// define JSON text which includes info about an appointment

// The properties of the appointment: title, location, duration, date, time and list of participants

// This information of each applicant should include the properties:
// first name, surname, phone number and whether participation is accepted (boolean value)

// After defining the JSON text for the appointment convert it to a JS object
// and display all appointment info on the website



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


