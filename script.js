window.onload = function () {
    showAddPage();
};

function showAddPage() {
    document.getElementById("content").innerHTML = `
      <form onsubmit="saveRecord(); return false;">
          <label for="name">Name:</label>
          <input type="text" id="name" required>

          <label for="age">Age:</label>
          <input type="number" id="age" required>

          <label for="gender">Gender:</label>
          <select id="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>

          <label for="email">Email:</label>
          <input type="email" id="email" required>

          <button type="submit">Submit</button>
      </form>
  `;
}

function saveRecord() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    if (!name || !age || !gender || !email) {
        alert("Please fill in all fields.");
        return;
    }


    const record = {
        name,
        age,
        gender,
        email,
    };


    const records = JSON.parse(sessionStorage.getItem("records")) || [];
    records.push(record);
    sessionStorage.setItem("records", JSON.stringify(records));


    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("email").value = "";

    alert("Record saved successfully.");
}

function showViewPage() {
    const records = JSON.parse(sessionStorage.getItem("records")) || [];
    let tableHTML = "<h2>View Records</h2>";

    if (records.length === 0) {
        tableHTML += "<p>No records available.</p>";
    } else {
        tableHTML += "<table>";
        tableHTML +=
            "<tr><th>Name</th><th>Age</th><th>Gender</th><th>Email</th></tr>";

        records.forEach((record) => {
            tableHTML += `<tr><td>${record.name}</td><td>${record.age}</td><td>${record.gender}</td><td>${record.email}</td></tr>`;
        });

        tableHTML += "</table>";
    }

    document.getElementById("content").innerHTML = tableHTML;
}