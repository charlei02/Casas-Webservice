const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// routes
const resume = [
    {
        section: 'PersonalInformation',
        data: [
            {
                Name: "July Charles E. Casas",
                Address: "MJ.Cuenco Upper Carreta Cebu City",
                ContactNo: "09678346576",
                Email: "charlescasas02@gmail.com",
                Birthdate: "July 29, 2002",
                Gender: "Male",
            }
        ]
    },
    {
        section: 'About_me',
        data: [
            {
                Description: "I'm a skilled front-end developer and Web designer specializing in HTML, CSS,JavaScript and figma. With 10 years of experience, I excel at creating user-friendly web interfaces. I'm eager to contribute my expertise to the Company and collaborate with a dynamic team.",
            }
        ]
    },
    {
        section: 'Skills',
        data: [
            {
                Language: "HTML, CSS, JavaScript",
                Webdesign: "Figma",
            }
        ]
    },
    {
        section: 'Education',
        data: [
            {
                Degree: 'Bachelor of Science in Information Technology',
                Institution: 'University of Southern Philippines Foundation',
                Year: '2019-2021',
            },
            {
                Degree: 'tvl-css',
                Institution: 'Mabolo National Highschool',
                Year: '2015-2019',
            }
        ]
    },
    {
        section: 'Personal_Reference',
        data: [
            {
                Name: 'Johnny Sin',
                Contact: '09498295693',
                Relationship: 'Single',
            }
        ]
    },
    {
        section: 'Work_Experience',
        data: [
            {
                Company: 'Techwings',
                Job_Title: 'Front-end Developer',
                Start_Date: '07/20/2020',
            }
        ]
    },
];

app.use(cors());
app.get('/', (req, res) => res.json(resume));

app.listen(port, () => {
    console.log(`Server Running on port ${port}!`);
});
