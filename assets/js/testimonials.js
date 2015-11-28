$(document).ready(function() {
    //store the quotations in arrays
    testimonials = 
    [
        {
            "testimonial": "I interacted with Shahryar as course instructor for several courses; Data Structures, Algorithms, and Introduction to Artificial Intelligence. As an instructor, I found him to  be diligent, patient, and thorough. In class, he consistently demonstrated his aptitude for teaching, bringing infectious enthusiasm for the material. By having the opportunity to take courses with him, I was able to learn well beyond the prescribed curriculum. Shahryar challenges his students to make deep connections to the subject material, gain valuable cross-domain knowledge, and to benefit from his huge wealth of experience. My colleagues and I consistently sought out his supervision and mentorship throughout our experience at UOIT because of his boundless knowledge, humility, and reassurance even in the face of very difficult technical challenges. I can safely attribute my success in my  professional and academic career to his guidance and encouragement to succeed, explore, and seek excellence in research. During my formative years of undergraduate education, Shahryar helped me to find my way. He is an extremely capable instructor, advisor, professor, and mentor.",
            "name": "Daniel Smullen",
            "title": "PhD Candidate, Carnegie Mellon University"
        },
        {
            "testimonial": "Shahryar has had a tremendous influence on my academic development as both a professor and supervisor. I interacted with Shahryar initially as a course instructor in Algorithms, Data Structures, and Artificial Intelligence. His dedication to his field and passion to impart his knowledge on students is unmatched by any other instructor in my academic progression throughout University. Shahryar always challenged the students to go beyond the course curriculum and to strive for a deep understanding of the course material being taught. As such I was motivated as an undergraduate student with my colleagues to go far beyond the curriculum in his Artificial Intelligence course; which resulted in a publication at WCCI under his incredible guidance and support. As a supervisor, Shahryar is superb, his deep understanding, background in many disciplines, and experience collaborating with numerous researchers from diverse domains has given him an insight that few supervisors can claim. He has been instrumental in the progress of my research and thesis topic and his deep insights into numerous topics have provided the guidance needed for me to excel in the research and publication process.",
            "name": "Jonathan Gillett",
            "title": "MASc Candidate, University of Ontario Institute of Technology"
        },
        {
            "testimonial": "Dear Prof. Shahryar, You're truly a one-of-a-kind professor. I took three of your classes at UOIT; Introduction to Programming (ENGR 1200U), Design and Analysis of Algorithm (ENGR 3770U) and Introduction to Artificial Intelligence (ENGR 3720U). The experiences, opportunities and knowledge I gained in your classes are invaluable for my career development. Your lecture notes, in-class analogies, helpfulness, your deep understanding of the course material, your comic relief, are what set your class apart from others. You can always bring the best in your students and your role was most vital in helping our group to win the first prize at UOIT Capstone Design Challenge presentation during my 4th academic year; which resulted in the research paper at IEEE WCCI, 2014. I would also like to mention that you are always very prompt in replying your emails, in fact, I ran a small query on all the emails we ever exchanged and remarkably your average response time is less than 20 mins! I sincerely appreciate the dedication and hard-work that you put towards your students. I'm so glad that you will be my supervisor for the MASc. at University of Waterloo starting in January 2016.",
            "name": "Shivam Kalra",
            "title": "MASc Candidate, University of Waterloo"
        }
    ];
    //calculate a random index number
    idx = Math.floor(Math.random() * testimonials.length);
    //display the quotation
    $('#testimonial').append(testimonials[idx].testimonial);
    $('#name').text(testimonials[idx].name);
    $('#title').text(testimonials[idx].title);
});