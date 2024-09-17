document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.btn-start');
    if (startButton) {
        startButton.addEventListener('click', function(event) {
            event.preventDefault();
            const patientInfoSection = document.getElementById('patient-info');
            if (patientInfoSection) {
                patientInfoSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle form validation for patient info section
    const form = document.querySelector('.patient-info-section form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const age = document.getElementById('age').value;
            const weight = document.getElementById('weight').value;
            const gender = document.getElementById('gender').value;

            if (!age || !weight || !gender) {
                alert('يرجى ملء جميع الحقول.');
                event.preventDefault();
            }
        });
    }

    // Handle gender selection change
    const genderSelect = document.getElementById('gender');
    if (genderSelect) {
        genderSelect.addEventListener('change', function() {
            const selectedGender = genderSelect.value;
            console.log('الاختيار الحالي:', selectedGender);
        });
    }

    // Initialize AOS library
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});

// Toggle menu for mobile
function toggleMenu() {
    const menu = document.getElementById('navbarSupportedContent');
    if (menu) {
        menu.classList.toggle('open');
    }
}
