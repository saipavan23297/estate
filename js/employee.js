const correctPasscode = "1234"; // Change this to your desired passcode

document.addEventListener('DOMContentLoaded', function() {
    const passcodePrompt = document.getElementById('passcode-prompt');
    const passcodeInput = document.getElementById('passcode');
    const submitPasscode = document.getElementById('submit-passcode');
    const inquiriesContainer = document.getElementById('inquiries-container');
    const inquiriesTable = document.getElementById('inquiries-table').getElementsByTagName('tbody')[0];

    submitPasscode.addEventListener('click', checkPasscode);
    passcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPasscode();
        }
    });

    function checkPasscode() {
        if (passcodeInput.value === correctPasscode) {
            passcodePrompt.style.display = 'none';
            inquiriesContainer.style.display = 'block';
            loadInquiries();
        } else {
            alert('Incorrect passcode. Please try again.');
            passcodeInput.value = '';
        }
    }

    function loadInquiries() {
        // This is a mock function. In a real application, you'd fetch data from a server.
        const mockData = [
            { name: "John Doe", email: "john@example.com", phone: "123-456-7890", inquiry: "Product information request" },
            { name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", inquiry: "Shipping inquiry" },
            { name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555", inquiry: "Pricing question" }
        ];

        inquiriesTable.innerHTML = ''; // Clear existing rows

        mockData.forEach(inquiry => {
            const row = inquiriesTable.insertRow();
            row.insertCell(0).textContent = inquiry.name;
            row.insertCell(1).textContent = inquiry.email;
            row.insertCell(2).textContent = inquiry.phone;
            row.insertCell(3).textContent = inquiry.inquiry;
        });
    }
});