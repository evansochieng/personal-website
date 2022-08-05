// Add some JavaScript

// Create div to hold 'About' content
const aboutDiv = document.createElement('div');

// Create h2 element for 'About' title
const h2 = document.createElement('h2');
h2.textContent = 'About';

// Create p element for about
const about = document.createElement('p');
about.textContent = 'A confident and determined young man with entry\
               level experience in actuarial and data science field, with\
               self taught skills in Python, R, SQL and Machine Learning.\
               \n I have a great aptitude and desire to work with data, \
               enjoy coding, have no problem in continuously learning,\
               adaptive to high stress environments and stay calm under \
               pressure. I\'m a believer in solving problems using \
               mathematics and codes. \nCurrently learning Software \
               Development to integrate these skills in building\
               interactive user applications for my data science projects\
               .';

//Add h2 and p to the div
aboutDiv.append(h2);
aboutDiv.append(about);

// Add the div as a child to the body
document.querySelector('body').appendChild(aboutDiv);
