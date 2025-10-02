document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    envelope.addEventListener('click', function() {
        // Toggle the open class on the envelope
        envelope.classList.toggle('open');
        
        // Add a bounce effect when clicked
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('bounce');
            setTimeout(function() {
                envelope.classList.remove('bounce');
            }, 500);
        }
    });
});
