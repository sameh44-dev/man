// تأكد من تحميل DOM بالكامل قبل تنفيذ السكربت
document.addEventListener('DOMContentLoaded', function() {
    // التعامل مع زر "ابدأ"
    const startButton = document.querySelector('.btn-start');
    if (startButton) {
        startButton.addEventListener('click', function(event) {
            event.preventDefault(); // منع التصرف الافتراضي للرابط
            document.getElementById('patient-info').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // التحقق من الحقول عند تقديم النموذج
    const form = document.querySelector('.patient-info-section form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const age = document.getElementById('age').value;
            const weight = document.getElementById('weight').value;
            const gender = document.getElementById('gender').value;

            if (!age || !weight || !gender) {
                alert('يرجى ملء جميع الحقول.');
                event.preventDefault(); // منع تقديم النموذج إذا كانت الحقول غير مكتملة
            }
        });
    }

    // التعامل مع تغيير القيمة في القائمة المنسدلة
    const genderSelect = document.getElementById('gender');
    if (genderSelect) {
        genderSelect.addEventListener('change', function() {
            const selectedGender = genderSelect.value;
            console.log('الاختيار الحالي:', selectedGender);
            // يمكنك تنفيذ إجراءات إضافية بناءً على الخيار المحدد
        });
    }
});

<script>
  AOS.init();
</script>

function toggleMenu() {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.toggle('open'); // يضيف أو يزيل فئة "open"
}
