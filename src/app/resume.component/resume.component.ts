import { Component } from '@angular/core';

@Component({
	selector: 'my-resume',
	templateUrl: "app/resume.component/resume.component.html",
	styleUrls:["app/resume.component/resume.component.css"]
})

export class resumeComponent {
	title = "Clifford Ryan Nelson";
	bulletPoints = [
		"10+ years engineering experience",
		"Pragmatic and a logical problem solver",
		"Motivated and inspired by design and technology",
		"string"
	];
	contact = [
		{
			"email": "developer@cliffordryannelson.com",
			"website": "http://www.cliffordryannelson.com",
			"linkedIn": "",
			"instagram": "",
		},
	];
	education = [
		{
			"school": "Platt College",
			"degree": "Bachelors of Science",
			"focus": "Web Design",
			"dateRange": "2011-2014",
			"dateStart": new Date(),
			"dateEnd": new Date(),
			"gpa": "4.0",
			"accomplishments": "Class Valedictorian",
			"courseWork": [
				"Fundamentals of Web Design",
				"Web Campaign Implementation",
				"Design for Usability",
				"Responsive Web Design",
				"Programming for Designers",
				"Scripting for the Web",
				"Content Management Systems",
			],
		},
	];
	tools = [
		{ "name": "JIRA", },
		{ "name": "GitHub", },
		{ "name": "Grunt", },
		{ "name": "Jenkins", },
		{ "name": "IntelliJ IDEA", },
		{ "name": "Adobe Creative Suite", },
	];
	practices = [
		{ "name": "Agile Development", },
		{ "name": "Test Driven Development", },
		{ "name": "Mobile First Responsive Design", },
		{ "name": "Rapid Prototyping", },
	];
	languages = [
		{ "name": "HTML5", },
		{ "name": "CSS3", },
		{ "name": "JavaScript", },
		{ "name": "JSON", },
		{ "name": "PHP", },
		{ "name": "HTML5", },
	];
	frameworks = [ // and libraries, tools - maybe separte these later?
		{ "name": "Angular", },
		{ "name": "Angular2", },
		{ "name": "React", },
		{ "name": "GSAP", },
		{ "name": "jQuery", },
		{ "name": "Boostrap", },
	];
	positions = [
		{
			"id": 10,
			"title": "Experience Design (XD) Prototyper",
			"employer": "Intuit Turbotax",
			"contractor": "Integrated Associates",
			"dateRange": "2016-Current",
			"dateStart": new Date('2016'),
			"dateEnd": new Date('2017'), // april 14 2017
			"current": true,
			"briefDescription": "Design and develop prototype experiences for user testing research. Collaborate with stakeholders on functional requirements for testing",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 9,
			"title": "Software Engineer 1 (Front End)",
			"employer": "Intuit Turbotax",
			"contractor": "Integrated Associates",
			"dateRange": "2015-2016",
			"dateStart": new Date("2015"), // august 2015
			"dateEnd": new Date("2016"), // september 2016
			"current": false,
			"briefDescription": "Work closely with design team to develop user experiences. UI/UX design for in-house developer too",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 8,
			"title": "Software Engineer (UI/UX)",
			"employer": "IBM",
			"contractor": "Experis IT",
			"dateRange": "2014-2015",
			"dateStart": new Date("2014"), // november 20 2014
			"dateEnd": new Date("2015"),
			"current": false,
			"briefDescription": "Design and develop user interfaces / experiences for enterprise solutions. Established standards of scalable object oriented cascading style sheets",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 7,
			"title": "UI/UX Designer & Developer",
			"employer": "MOR Furniture",
			"contractor": "",
			"dateRange": "2014-2014",
			"dateStart": new Date(),
			"dateEnd": new Date(),
			"current": false,
			"briefDescription": "In-house front-end web development for internet and intranet applications. Develop new processes for customer information gathering",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 6,
			"title": "Web Developer",
			"employer": "Gaslamp Media",
			"contractor": "",
			"dateRange": "2014-2014",
			"dateStart": new Date(),
			"dateEnd": new Date(),
			"current": false,
			"briefDescription": "Develop interfaces from design compositions for content management system templates",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 5,
			"title": "Interaction Designer & Web Developer",
			"employer": "CMSCODE INC.",
			"contractor": "",
			"dateRange": "2013-2014",
			"dateStart": new Date(),
			"dateEnd": new Date(),
			"current": false,
			"briefDescription": "Design and develop web user interfaces and donation forms for non-profit donation-driven clients & in-house company development product",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 4,
			"title": "Graphic Design Intern",
			"employer": "DFGrafix",
			"contractor": "",
			"dateRange": "2013-2013",
			"dateStart": new Date(),
			"dateEnd": new Date(),
			"current": false,
			"briefDescription": "Hands-on experience in the graphic design & production industry",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 3,
			"title": "Teaching Assistant",
			"employer": "Platt College",
			"contractor": "",
			"dateRange": "2013-2013",
			"dateStart": new Date(),
			"dateEnd": new Date(),
			"current": false,
			"briefDescription": "Assist professors and serve as a technical resource for students",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 2,
			"title": "Broadcast Engineer",
			"employer": "OMNITEC Solutions INC",
			"contractor": "",
			"dateRange": "2006-2012",
			"dateStart": new Date('2006/01/01'),
			"dateEnd": new Date('2006/01/01'),
			"current": false,
			"briefDescription": "Support for the Navy’s Shipboard Integrated Television Entertainment Broadcast Systems (SITE TV), Lead Engineer in the Design/Build of ‘Next Generation’ Video on Demand Systems (SITE 400NG)",
			"longDescription": "...",
			"location": "San Diego, CA",
		},
		{
			"id": 1,
			"title": "Interior Communications Petty Officer Third Class (IC3)",
			"employer": "United States Navy",
			"contractor": "",
			"dateRange": "2003-2006",
			"dateStart": new Date('2003/09/01'),
			"dateEnd": new Date('2006/01/10'),
			"current": false,
			"briefDescription": "Maintain electronic shipboard equipment including: Televisions, Telephones, and Alarm Systems, etc.",
			"longDescription": "Enlisted ...",
			"location": "San Diego, CA",
		}
	];
}
