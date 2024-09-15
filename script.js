window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeDisplayElement = document.getElementById("resume-display");
    var shareableLinkContainer = document.getElementById("shareable-link-container");
    var shareableLinkElement = document.getElementById("shareable-link");
    var downloadPdfButton = document.getElementById("download-pdf");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var username = document.getElementById("username")
            .value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone")
            .value;
        var Education = document.getElementById("Education").value;
        var Experience = document.getElementById("Experience").value;
        var skills = document.getElementById("skills")
            .value;
        var resumeData = {
            name: name,
            email: email,
            phone: phone,
            Education: Education,
            Experience: Experience,
            skills: skills,
        };
        localStorage.setItem(username, JSON.stringify(resumeData));
        var resumeHTML = "\n<h2>Shareable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(Education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(Experience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
        resumeDisplayElement.innerHTML = resumeHTML;
        var resumeOutputElement = document.getElementById("resume-display");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
            shareableLinkContainer.style.display = "block";
            shareableLinkElement.href = shareableURL;
            shareableLinkElement.textContent = shareableURL;
        }
        ;
        downloadPdfButton.addEventListener("click", function () {
            window.print();
        });
        window.addEventListener("DOMContentLoaded", function () {
            var urlParams = new URLSearchParams(window.location.search);
            var username = urlParams.get("username");
            if (username) {
                var savedResumeData = localStorage.getItem(username);
                if (savedResumeData) {
                    var resumeData_1 = JSON.parse(savedResumeData);
                    document.getElementById("username").value =
                        username;
                    document.getElementById("name").value =
                        resumeData_1.name;
                    document.getElementById("email").value =
                        resumeData_1.email;
                    document.getElementById("phone").value =
                        resumeData_1.phone;
                    document.getElementById("Education").value =
                        resumeData_1.Education;
                    document.getElementById("Experience").value =
                        resumeData_1.Experience;
                    document.getElementById("skills").value =
                        resumeData_1.skills;
                }
            }
        });
    });
});
