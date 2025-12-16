function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
// Appointment Booking System
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");
    const successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const appointment = {
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                department: document.getElementById("department").value,
                doctor: document.getElementById("doctor").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value
            };

            // Save to localStorage
            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            appointments.push(appointment);
            localStorage.setItem("appointments", JSON.stringify(appointments));

            successMessage.textContent = "Appointment booked successfully! We will contact you soon.";

            form.reset();
        });
    }
});

            form.reset();
        });
    }
});

