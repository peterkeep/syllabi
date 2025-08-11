var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "MTH150Syllabus",
  "level": "1",
  "url": "#MTH150Syllabus",
  "type": "Article",
  "number": "",
  "title": "MTH 150 Syllabus",
  "body": " MTH 150 Syllabus    Peter Keep      Welcome to MTH 150 - Calculus I\/Analytic Geometry! This course syllabus will serve as a repository for all of the course details, policies, and any other required information to meet college and state requirements.  This document might be a bit hard to navigate, and it can sometimes be hard to read. We'll try to highlight the most important and essential parts for students on the course website.    Faculty and Section Information   Faculty Information      Instructor Name:  Peter Keep  Email:  keepp@morainevalley.edu    Office:  A230  Mailbox:  C154    Office Phone:  (708) 974-5614  Testing Center File #:  564       Office Hours  Office hours this semester are:   Mondays: 12:30pm 1:30pm    Tuesdays: 9:00am 10:00am    Wednesdays: 9:00am 10:00am    Thursdays: 12:30pm 1:30pm   These 4 hours are times when I am guaranteed to be in my office.   If I am unavailable during an office hour or need to re-schedule an office hour temporarily, I will post a note on my office door and send a message to the class.   You do not need to set up an appointment or inform me before-hand that you're coming, unless you'd like for me to prepare something specific for our meeting. Otherwise, these are just drop-in hours for students in my courses.  If you would like to meet outside of these times, then we can set up a time that works in both of our schedules.    Section Information      Section Number:  003  Room Number:  D125    Meeting Times:  T\/Th 10:00am 12:15pm  Modality:  Traditional    First Class:  08\/19\/2025  Last Class:  12\/04\/2025    Final Exam (Part 1):  12\/02\/2025  Final Exam (Part 2):  12\/04\/2025        Course Information   Course Identification      Course Number:  MTH 150    Course Title:  Calculus I\/Analytic Geometry    Credit Hours:  5 (Lecture\/Demonstration)    Total Contact Hours\/Week:  5       Catalog Description   Prerequisites  Appropriate placement test score, or MTH 141 (College Algebra) and MTH 142 (Trigonometry) with a minimum grade of \"C.\"    Course Description  Topics include limits, continuity, the derivative, applications of differentiation, curve sketching, antidifferentiation, and the definite integral. These topics are applied to polynomial, radical, rational, logarithmic, exponential, trigonometric, and hyperbolic functions. Note: No more than five semester hours of credit will be granted to students taking both MTH 145 and MTH 150.     Illinois Articulation Initiative number: MTH 901     Major Course Concepts     Limits and continuity    Derivatives    Applications of the derivative    Antiderivatives and definite integrals    Exponential and logarithmic functions    Trigonometric and hyperbolic functions       Expected Outcomes for Student Learning   Course Student Learning Outcomes  Upon completion of this course, a student will be able to:   Evaluate limits graphically, numerically, and analytically, including infinite limits and limits at infinity.    Analyze functions graphically and numerically and determine the continuity of the function at fixed points in its domain.    Compute derivatives of polynomial, radical, rational, trigonometric, exponential, and logarithmic functions.    Explain the relationship between the derivative and each of the following: the slope of a tangent line to a function, the velocity and acceleration of an object.    Solve applied problems involving related rates of change, the velocity or acceleration of an object, and optimization.    Find the critical points of a function and determine the intervals where a function increases and decreases.    Determine the intervals over which a function is concave up and concave down and identify any inflection points.    Use the First and Second Derivative Tests to identify local extrema.    Use the first and second derivatives in curve sketching.    Use L'Hopital's Rule to evaluate limits and indeterminate forms.    Find the indefinite integral of functions involving or resulting in polynomial, radical, rational, trigonometric, exponential, and logarithmic functions.    Explain the relationship between the area under the curve and the definite integral.    Evaluate the definite integral of functions involving polynomial, radical, rational, trigonometric, exponential, and logarithmic functions.    Evaluate definite and indefinite integrals using substitution.       Common Learning Outcomes   Quantitative Literacy: Use processes, procedures, data or evidence to solve problems and make effective decisions.      Classroom Information   Books and Supplies   Textbook  We will not be using a traditional textbook in this course. This semester we will be using a free and open source calculus textbook, called Discover Calculus . You can find the link to the textbook website, pdf, and relevant portions of the textbook on Canvas.    Calculators  Similarly, we will not be using any specific calculators this semester. You can bring a calculator that you're comfortable with to class if you'd like, and we'll make use of free graphing tools like Desmos in class.  Calculators with a computer algebra system are prohibited on any graded work.     Classroom Policies and Procedures   Attendance and Participation         "
},
{
  "id": "faculty-2",
  "level": "2",
  "url": "#faculty-2",
  "type": "Table",
  "number": "1.1",
  "title": "",
  "body": "    Instructor Name:  Peter Keep  Email:  keepp@morainevalley.edu    Office:  A230  Mailbox:  C154    Office Phone:  (708) 974-5614  Testing Center File #:  564    "
},
{
  "id": "section-2",
  "level": "2",
  "url": "#section-2",
  "type": "Table",
  "number": "1.2",
  "title": "",
  "body": "    Section Number:  003  Room Number:  D125    Meeting Times:  T\/Th 10:00am 12:15pm  Modality:  Traditional    First Class:  08\/19\/2025  Last Class:  12\/04\/2025    Final Exam (Part 1):  12\/02\/2025  Final Exam (Part 2):  12\/04\/2025    "
},
{
  "id": "courseid-2",
  "level": "2",
  "url": "#courseid-2",
  "type": "Table",
  "number": "2.1",
  "title": "",
  "body": "    Course Number:  MTH 150    Course Title:  Calculus I\/Analytic Geometry    Credit Hours:  5 (Lecture\/Demonstration)    Total Contact Hours\/Week:  5    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
