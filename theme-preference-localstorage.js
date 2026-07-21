// ===============================
// Function: Apply System Theme
// ===============================

function DarkOrLight() {

    // Check karo ki Windows/System Dark Mode me hai ya nahi
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        // Agar Dark Mode hai to body par dark class lagao
        document.body.classList.remove("light");
        document.body.classList.add("dark");

    } else {

        // Warna Light Mode apply karo
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
}


// ===============================
// Check if theme is already saved
// ===============================

// Local Storage se saved theme nikalo
const savedTheme = localStorage.getItem("theme");


// Agar user ne pehle koi theme select ki hui hai
if (savedTheme) {

    // Pehle dono classes hata do
    document.body.classList.remove("light", "dark");

    // Fir saved theme apply kar do
    document.body.classList.add(savedTheme);

} else {

    // Agar kuch save nahi hai to System Theme follow karo
    DarkOrLight();
}



// ===========================================
// Listen for System Theme Changes
// ===========================================

// Agar Windows ki theme change ho
window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", () => {

    // Sirf tabhi system theme apply karo
    // Jab user ne apni koi theme save na ki ho
    if (!localStorage.getItem("theme")) {
        DarkOrLight();
    }

});



// ===============================
// Theme Toggle Button
// ===============================

// Toggle button select karo
const toggle = document.querySelector(".circle");


// Toggle button par click event
toggle.addEventListener("click", () => {

    // Agar abhi Dark Mode hai
    if (document.body.classList.contains("dark")) {

        // Light Mode me switch karo
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        // User ki choice Local Storage me save karo
        localStorage.setItem("theme", "light");

    } else {

        // Warna Dark Mode me switch karo
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        // User ki choice Local Storage me save karo
        localStorage.setItem("theme", "dark");
    }

});