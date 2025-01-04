import React from 'react';

export default function Education() {
  const education = [
    {
      school: "National Institute of Technology, Rourkela",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "November 2022 - Present",
      location: "Odisha, India",
      grade: "CGPA - 9.50"
    },
    {
      school: "Mother's Public School, Bhubaneswar",
      degree: "Senior Secondary",
      duration: "July 2022",
      location: "Odisha, India",
      grade: "Percentage 98.4"
    },
    {
      school: "Loyola School, Bhubaneswar",
      degree: "Secondary",
      duration: "July 2020",
      location: "Odisha, India",
      grade: "Percentage 98.8"
    }
  ];

  return (
    <section id="education" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-400">{edu.school}</h3>
              <p className="text-lg mt-2">{edu.degree}</p>
              <div className="mt-2 text-gray-400">
                <p>{edu.duration}</p>
                <p>{edu.location}</p>
                <p className="text-cyan-400">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}