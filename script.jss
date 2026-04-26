document.getElementById('verifyBtn').addEventListener('click', function() {
    const statusBox = document.getElementById('status');
    
    // Simulate a security check
    statusBox.innerText = "Checking CloudFront Distribution...";
    
    setTimeout(() => {
        statusBox.innerHTML = "✅ SSL/TLS Active | ✅ OAC Restrictive Policy Verified | Site Owner: Ranganath Gowda C B";
    }, 1000);
});