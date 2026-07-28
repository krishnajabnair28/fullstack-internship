const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name.length < 2) {
            alert("Name must contain at least 2 characters.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        if (message.length < 5) {
            alert("Message must contain at least 5 characters.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
}

// Display Blogs

fetch("http://localhost:3000/blogs")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("blogContainer");

        if (!container) return;

        data.forEach(blog => {

            const div = document.createElement("div");
            div.className = "blog-card";

            div.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
                <hr>
            `;

            container.appendChild(div);

        });

    })
    .catch(error => console.log(error));