function genPass(len, upper, nums, special) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    let chars = lower;

    if (upper) chars += upperChars;
    if (nums) chars += numChars;
    if (special) chars += specialChars;

    let pass = "";
    for (let i = 0; i < len; i++) {
        const randIdx = Math.floor(Math.random() * chars.length);
        pass += chars[randIdx];
    }

    return pass;
}

function generate() {
    const len = parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;
    if (len < 6 || len > 20) {
        alert("Password length must be between 6 and 20 characters");
        return;
    }
    if (!upper && !nums && !special) {
        alert("Please select at least one character type besides lowercase letters");
        return;
    }

    const pass = genPass(len, upper, nums, special);
    document.getElementById("passOut").textContent = pass;
    const output = document.getElementById("passOut");
    output.classList.add("animate");
    setTimeout(() => output.classList.remove("animate"), 300);
}

function reset() {
    document.getElementById("len").value = 12;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = "Your password will appear here.";
}

