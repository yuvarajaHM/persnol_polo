// Resume content matching the user's resume image
// When downloaded, this HTML file opens beautifully in any browser
// and can be saved as PDF using browser's "Print → Save as PDF"

const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Yuvaraja H M - Resume</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Times New Roman', Times, serif;
    color: #000;
    background: #fff;
    line-height: 1.4;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 40px;
    font-size: 13px;
  }
  h1 {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .contact {
    text-align: center;
    font-size: 12px;
    margin-bottom: 14px;
  }
  .contact a {
    color: #0066cc;
    text-decoration: underline;
  }
  .section-title {
    background: #d9d9d9;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #000;
    margin-top: 14px;
    margin-bottom: 8px;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .project-title {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 2px;
  }
  .tech {
    font-weight: bold;
    margin-left: 14px;
    margin-bottom: 4px;
  }
  ul {
    margin-left: 30px;
    margin-bottom: 6px;
  }
  ul li {
    margin-bottom: 4px;
  }
  .skills p {
    margin-bottom: 3px;
  }
  .edu-row {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 2px 4px;
  }
  .edu-row + .edu-row {
    border-top: 1px solid #ddd;
  }
  @media print {
    body { padding: 20px 30px; }
    a { color: #0066cc; }
  }
  @page { margin: 0.5in; }
</style>
</head>
<body>
  <h1>Yuvaraja H M</h1>
  <div class="contact">
    +91 9686806111 |
    <a href="mailto:yuva04461@gmail.com">yuva04461@gmail.com</a> |
    <a href="https://github.com/yuvarajaHM">Github</a> |
    <a href="https://www.linkedin.com/in/yuvaraja-h-m-821968318">LinkedIn</a>
  </div>

  <div class="section-title">Professional Summary</div>
  <p>
    Python Developer with experience in building web applications using Python, Django, HTML, and CSS.
    Strong foundation in SQL and database management. Developed machine learning and deep learning
    projects with improved model accuracy and performance. Passionate about writing clean, efficient,
    and maintainable code.
  </p>

  <div class="section-title">Work Experience</div>
  <div class="job-header">
    <span>Python Full Stack Developer Intern</span>
    <span>Feb 2026 &ndash; Jun 2026</span>
  </div>
  <ul>
    <li>
      Developed full-stack web applications using Python, Django, HTML, CSS, JavaScript, MySQL, and Django ORM.
      Worked on REST APIs, authentication, session management, responsive UI design, testing, and deployment.
    </li>
  </ul>

  <div class="section-title">Projects</div>

  <div class="project-title">Sentiment Analysis Web App (Machine Learning + Django)</div>
  <div class="tech">Technologies: Python, Scikit-learn, NLP</div>
  <ul>
    <li>Developed a Sentiment Analysis model using Logistic Regression and Naive Bayes for text classification.</li>
    <li>Applied text preprocessing, TF-IDF feature extraction, and parameter tuning, achieving around 90% accuracy on test data.</li>
  </ul>

  <div class="project-title">Potato Leaf Disease Detection (CNN Model)</div>
  <div class="tech">Technologies: Python, TensorFlow, Keras, CNN, Image Processing</div>
  <ul>
    <li>Developed a CNN-based Potato Leaf Disease Detection system with 92% accuracy using deep learning, image preprocessing, and data augmentation techniques.</li>
  </ul>

  <div class="project-title">RaithaMitraMart &ndash; Multi Vendor Agriculture E-Commerce Platform</div>
  <div class="tech">Technologies: Python, Django, HTML, CSS, JavaScript</div>
  <ul>
    <li>Built a full-stack agriculture e-commerce website using Django with seller management, product handling, order tracking, authentication, and responsive UI features.</li>
  </ul>

  <div class="project-title">Professional Billing System</div>
  <div class="tech">Technologies: Python, Django, HTML, CSS, JavaScript</div>
  <ul>
    <li>Built a web-based billing management system using Python Django with invoice generation, GST calculation, PDF download, and receipt printing features.</li>
  </ul>

  <div class="section-title">Skills</div>
  <div class="skills">
    <p><strong>Programming Languages:</strong> Python</p>
    <p><strong>Frontend:</strong> HTML, CSS, JavaScript</p>
    <p><strong>Backend and Databases:</strong> Django, REST APIs, Authentication &amp; Authorization, MYSQL</p>
    <p><strong>Core Concepts:</strong> Object-Oriented Programming (OOP)</p>
    <p><strong>Additional Skills:</strong> Machine Learning Basics, Deep Learning (CNN)</p>
  </div>

  <div class="section-title">Education</div>
  <div class="edu-row">
    <span><strong>APS College of Engineering, Bangalore</strong> (CGPA: 8.80)</span>
    <span>2022 - 2026</span>
  </div>
  <div class="edu-row">
    <span><strong>Vishwa Manava PU College, Chitradurga</strong> (Percentage: 88%)</span>
    <span>2020 - 2022</span>
  </div>

  <div class="section-title">Certifications</div>
  <ul>
    <li>Web Development Certification &ndash; Edunet Foundation</li>
    <li>Python full stack development internship &ndash; Skyllx Technologies</li>
    <li>Python &amp; Django Fundamentals &ndash; Kodest Technologies Pvt Ltd</li>
  </ul>

  <script>
    // Auto-prompt print dialog when opened directly (optional UX)
    // window.addEventListener('load', () => setTimeout(() => window.print(), 500));
  </script>
</body>
</html>`;

export function downloadResume() {
  const blob = new Blob([resumeHTML], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Yuvaraja_HM_Resume.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}
