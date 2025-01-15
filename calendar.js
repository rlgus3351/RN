document.getElementById("assignButton").addEventListener("click", assignRandom);

function assignRandom() {
    const namesInput = document.getElementById("names").value.trim();
    const namesArray = namesInput.split("\n").filter(name => name.trim() !== "");
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

    if (namesArray.length < 10) {
        alert("최소 10명의 이름이 필요합니다.");
        return;
    }

    // Shuffle array
    const shuffledNames = [...namesArray].sort(() => Math.random() - 0.5);

    // Assign names to days
    const assignments = {};
    days.forEach(day => {
        assignments[day] = shuffledNames.splice(0, 2); // 2명씩 배정
    });

    // Display assignments and remove assigned names from input
    days.forEach(day => {
        const dayElement = document.getElementById(day);
        dayElement.innerHTML = ""; // Clear previous assignments
        assignments[day].forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            dayElement.appendChild(li);
        });
    });

    // Update the textarea with remaining names
    const remainingNames = shuffledNames.join("\n");
    document.getElementById("names").value = remainingNames;
}
