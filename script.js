document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        firstname: document.querySelectorAll("input")[0].value,
        lastname: document.querySelectorAll("input")[1].value,
        username: document.querySelectorAll("input")[2].value,
        password: document.querySelectorAll("input")[3].value,
        email: document.querySelectorAll("input")[4].value,
        phone: document.querySelectorAll("input")[5].value,
        age: document.querySelectorAll("input")[6].value,
        dob: document.querySelectorAll("input")[7].value,
        college: document.querySelectorAll("input")[8].value,
        department: document.querySelectorAll("input")[9].value,
        year_of_study: document.querySelector("select").value,
        city: document.querySelectorAll("input")[10].value,
        state: document.querySelectorAll("input")[11].value,
        country: document.querySelectorAll("input")[12].value,
        pincode: document.querySelectorAll("input")[13].value,
        emergency_contact: document.querySelectorAll("input")[14].value,
        gender: document.querySelector('input[name="gender"]:checked')
            ?.parentElement.textContent.trim(),
        address: document.querySelector("textarea").value
    };

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(
        result.message +
        "\nRegistration ID : " +
        result.registrationId
    );
});