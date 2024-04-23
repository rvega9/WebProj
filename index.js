const express = require('express');
const app = express();
const port = 3000;


// Dummy data for testing
let personalInfo = {
    name: "John Doe",
    birthDate: "1990-01-01",
    gender: "Male",
    contactNo: "123-456-7890",
    address: "123 Main St, City",
};

let skills = [
    { description: "JavaScript", expertiseLevel: "Advanced" },
    { description: "HTML", expertiseLevel: "Intermediate" },
    // Add more skills as needed
];

let education = [
    { school: "University ABC", year: "2010-2014" },
    { school: "High School XYZ", year: "2006-2010" },
    // Add more education details as needed
];

let personalReferences = [
    { name: "Jane Smith", relationship: "Former Manager", contactNumber: "987-654-3210" },
    // Add more references as needed
];

let workExperience = [
    { companyName: "Tech Corp", designation: "Software Engineer", details: "Developed web applications.", year: "2015-2020" },
    // Add more work experience details as needed
];

// Endpoint for personal information
app.get('/personal-info', (req, res) => {
    res.json(personalInfo);
});

// Endpoint for skills
app.get('/skills', (req, res) => {
    res.json(skills);
});

// Endpoint for education
app.get('/education', (req, res) => {
    res.json(education);
});

// Endpoint for personal references
app.get('/personal-references', (req, res) => {
    res.json(personalReferences);
});

// Endpoint for work experience
app.get('/work-experience', (req, res) => {
    res.json(workExperience);
});

// Define route handler for root URL
app.get('/', (req, res) => {
  });

app.listen(port, () => {
  console.log(`Web service listening at http://localhost:${3000}`);
});
