// Form submission script for Formspree integration

document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('rsvp-form');
    const formStatus = document.getElementById('form-status');
    
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Form will be submitted normally to Formspree
        // This script just adds some visual feedback
        
        // Show loading message before form submits
        formStatus.innerHTML = 'Submitting your RSVP...';
        formStatus.className = 'form-status';
        formStatus.style.display = 'block';
        
        // Create Y2K-style success modal
        const showSuccessModal = (name, attending, guests) => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.backgroundColor = 'black';
            modal.style.border = '3px solid #32CD32';
            modal.style.boxShadow = '0 0 20px #00FFFF';
            modal.style.padding = '20px';
            modal.style.zIndex = '10000';
            modal.style.maxWidth = '80%';
            modal.style.textAlign = 'center';
            
            modal.innerHTML = `
                <h3 style="color: #32CD32; font-family: 'VT323', monospace; margin-bottom: 15px; font-size: 24px;">THANK YOU!</h3>
                <p style="color: #00FFFF; margin-bottom: 10px;">Your RSVP has been received, ${name}!</p>
                <p style="color: #00FFFF; margin-bottom: 20px;">Attending: ${attending === 'yes' ? 'YES!' : 'NO'}</p>
                ${attending === 'yes' ? `<p style="color: #00FFFF; margin-bottom: 20px;">Number of guests: ${guests}</p>` : ''}
                <button id="close-modal" style="background: #32CD32; color: black; border: 2px solid #00FFFF; padding: 8px 15px; cursor: pointer; font-family: 'VT323', monospace; font-size: 18px;">CLOSE</button>
            `;
            
            document.body.appendChild(modal);
            
            document.getElementById('close-modal').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        };
        
        // We don't want to show the modal since Formspree will redirect to thanks.html
        // But we'll leave the code here in case you want to use it later
    });
});