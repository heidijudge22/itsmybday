// Form submission script for Formspree integration with popup confirmation

document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('rsvp-form');
    const formStatus = document.getElementById('form-status');
    
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Show loading message
        formStatus.innerHTML = 'Submitting your RSVP...';
        formStatus.className = 'form-status';
        formStatus.style.display = 'block';
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const attending = formData.get('attending');
        const guests = formData.get('guests');
        const message = formData.get('message');
        
        // Submit form data to Formspree using fetch API
        fetch('https://formspree.io/f/xwpovgye', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success popup
                showConfettiEffect();
                showResponseModal(name, attending, guests, message);
                form.reset();
                formStatus.style.display = 'none';
            } else {
                // Show error message
                formStatus.innerHTML = 'Oops! There was a problem submitting your RSVP. Please try again.';
                formStatus.className = 'form-status error';
            }
        })
        .catch(error => {
            // Show error message
            formStatus.innerHTML = 'Oops! There was a problem submitting your RSVP. Please try again.';
            formStatus.className = 'form-status error';
        });
    });
    
    // Create Y2K-style response modal
    function showResponseModal(name, attending, guests, message) {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        
        // Create modal content
        const modal = document.createElement('div');
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        modal.style.border = '3px solid #32CD32';
        modal.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.7)';
        modal.style.borderRadius = '8px';
        modal.style.padding = '30px';
        modal.style.maxWidth = '90%';
        modal.style.width = '500px';
        modal.style.textAlign = 'center';
        modal.style.position = 'relative';
        modal.style.fontFamily = "'VT323', monospace";
        
        // Add glowing effect to modal
        modal.style.animation = 'glow 1.5s infinite alternate';
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glow {
                from { box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); }
                to { box-shadow: 0 0 30px rgba(50, 205, 50, 0.8); }
            }
            
            @keyframes pulse {
                from { transform: scale(0.95); }
                to { transform: scale(1.05); }
            }
            
            @keyframes highlight {
                from { color: #FF00FF; }
                to { color: #FFFFFF; }
            }
            
            .modal-star {
                display: inline-block;
                color: #E8E8E8;
                font-size: 24px;
                margin: 0 8px;
                animation: pulse 1s infinite alternate;
            }
            
            .drinks-reminder {
                animation: highlight 1.5s infinite alternate;
                text-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
            }
        `;
        document.head.appendChild(style);
        
        // Create modal content based on attendance response
        let modalContent = '';
        
        if (attending === 'yes') {
            modalContent = `
                <div style="margin-bottom: 20px;">
                    <span class="modal-star" style="animation-delay: 0s;">★</span>
                    <span class="modal-star" style="animation-delay: 0.3s;">★</span>
                    <span class="modal-star" style="animation-delay: 0.6s;">★</span>
                </div>
                <h2 style="color: #32CD32; font-size: 36px; margin-bottom: 20px; text-shadow: 2px 2px 0 #00FFFF;">AWESOME!</h2>
                <p style="color: #00FFFF; font-size: 24px; margin-bottom: 15px;">Thanks for your RSVP, ${name}!</p>
                <p style="color: white; font-size: 20px; margin-bottom: 15px;">We can't wait to celebrate with you${guests > 1 ? ' and your guest' : ''}!</p>
                <p style="color: #32CD32; font-size: 18px; margin-bottom: 15px;">Your details have been saved. See you on August 23rd!</p>
                <p style="color: #FF00FF; font-size: 16px; margin-bottom: 25px;"><em>(Psst... drinks on you? Heidi: $heidijudge | Dedrick: $dedrick)</em></p>
                <div style="margin-top: 20px;">
                    <span class="modal-star" style="animation-delay: 0.9s;">★</span>
                    <span class="modal-star" style="animation-delay: 0.3s;">★</span>
                    <span class="modal-star" style="animation-delay: 0s;">★</span>
                </div>
            `;
        } else {
            modalContent = `
                <h2 style="color: #FF00FF; font-size: 36px; margin-bottom: 20px; text-shadow: 2px 2px 0 #00FFFF;">BUMMER!</h2>
                <p style="color: #00FFFF; font-size: 24px; margin-bottom: 15px;">Thanks for letting us know, ${name}.</p>
                <p style="color: white; font-size: 20px; margin-bottom: 15px;">We're sorry you can't make it to our party!</p>
                <p style="color: #32CD32; font-size: 18px; margin-bottom: 15px;">We'll miss you, but thanks for responding.</p>
                <p class="drinks-reminder" style="font-size: 20px; margin-bottom: 15px;">We're sad you can't make it, but reminder you can always buy us drinks from afar 💸 ;)</p>
                <p style="color: #00FFFF; font-size: 16px; margin-bottom: 25px;"><em>Heidi: $heidijudge | Dedrick: $dedrick</em></p>
            `;
        }
        
        // Add message if provided
        if (message && message.trim() !== '') {
            modalContent += `
                <div style="margin: 20px 0; padding: 15px; border: 1px dashed #00FFFF; background-color: rgba(0, 255, 255, 0.1);">
                    <p style="color: white; font-style: italic; font-size: 18px;">"${message}"</p>
                </div>
            `;
        }
        
        // Add close button
        modalContent += `
            <button id="close-modal" style="background-color: #32CD32; color: black; border: 2px solid #00FFFF; padding: 10px 25px; font-size: 20px; cursor: pointer; font-family: 'VT323', monospace; border-radius: 4px; margin-top: 20px; transition: all 0.3s ease;">CLOSE</button>
        `;
        
        modal.innerHTML = modalContent;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Add event listener to close button
        document.getElementById('close-modal').addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        // Close modal when clicking outside
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }
    
    // Create confetti effect
    function showConfettiEffect() {
        // Check if confetti function exists (loaded from confetti.js)
        if (typeof confetti === 'function') {
            const end = Date.now() + 3000; // 3 seconds
            
            // Launch confetti
            const interval = setInterval(function() {
                if (Date.now() > end) {
                    clearInterval(interval);
                    return;
                }
                
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#32CD32', '#00FFFF', '#FF00FF']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#32CD32', '#00FFFF', '#FF00FF']
                });
            }, 50);
        }
    }
});