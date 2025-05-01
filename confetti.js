// Confetti animation script with custom stickers
document.addEventListener('DOMContentLoaded', function() {
    // Create canvas for confetti
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confetti-canvas';
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '9999';
    document.body.appendChild(confettiCanvas);

    // Set canvas size
    const resizeCanvas = () => {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Get canvas context
    const ctx = confettiCanvas.getContext('2d');

    // Confetti particles array
    const confetti = [];
    
    // Animation ID for requestAnimationFrame
    let animationId;

    // Load sticker images
    const sticker1 = new Image();
    const sticker2 = new Image();
    
    // Set the path to the images (using JPEGs instead of SVGs)
    sticker1.src = 'images/IMG_8967.jpeg';
    sticker2.src = 'images/IMG_8978.jpg';
    
    // Wait for images to load before creating confetti
    let imagesLoaded = 0;
    const totalImages = 2;
    
    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            createConfetti(150); // Half the number of confetti particles
            startAnimation();
        }
    }
    
    sticker1.onload = imageLoaded;
    sticker2.onload = imageLoaded;
    
    // Error handling for images
    sticker1.onerror = function() {
        console.error("Error loading sticker1 image");
        // Use a fallback
        sticker1.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z';
    };
    
    sticker2.onerror = function() {
        console.error("Error loading sticker2 image");
        // Use a fallback
        sticker2.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z';
    };

    // Create confetti particles
    function createConfetti(amount) {
        for (let i = 0; i < amount; i++) {
            // Randomly choose between sticker1 and sticker2
            const stickerType = Math.random() > 0.5 ? 'sticker1' : 'sticker2';
            
            // Position confetti across the entire width of the screen
            const startX = Math.random() * confettiCanvas.width;
            // Vary the starting height for a cascading effect
            const startY = -100 - Math.random() * 500;
            
            // Add the confetti particle
            confetti.push({
                x: startX,
                y: startY,
                size: Math.random() * 40 + 30, // Size between 30-70px
                type: stickerType,
                speed: Math.random() * 0.025 + 0.025, // Quarter of original speed
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.5, // Quarter rotation speed
                wobble: Math.random() * 10,
                wobbleSpeed: Math.random() * 0.025, // Quarter wobble speed
                gravity: 0.005 + Math.random() * 0.0125, // Quarter gravity
                opacity: 1,
                fadeSpeed: 0.0025 + Math.random() * 0.0035 // Half fade speed
            });
        }
    }

    // Draw a confetti sticker
    function drawConfetti(particle) {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation * Math.PI / 180);
        ctx.globalAlpha = particle.opacity;
        
        // Create a circular clipping path for the sticker
        ctx.beginPath();
        const radius = particle.size / 2;
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        // Draw the appropriate sticker image
        if (particle.type === 'sticker1') {
            ctx.drawImage(sticker1, -radius, -radius, particle.size, particle.size);
        } else {
            ctx.drawImage(sticker2, -radius, -radius, particle.size, particle.size);
        }
        
        // Restore context and draw a border around the sticker
        ctx.restore();
        
        // Add a colored border
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation * Math.PI / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = particle.type === 'sticker1' ? '#32CD32' : '#00FFFF';
        ctx.stroke();
        ctx.restore();
    }

    // Update and draw all confetti
    function updateConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        for (let i = confetti.length - 1; i >= 0; i--) {
            const p = confetti[i];
            
            p.y += p.speed;
            p.x += Math.sin(p.wobble) * 0.125; // Quarter wobble effect
            p.wobble += p.wobbleSpeed;
            p.rotation += p.rotationSpeed;
            p.speed += p.gravity;
            
            // Start fading when confetti is in the bottom 50% of the screen
            if (p.y > confettiCanvas.height * 0.5) {
                p.opacity -= p.fadeSpeed;
            }

            // Remove confetti when it's off-screen or faded out
            if (p.y > confettiCanvas.height + 100 || p.opacity <= 0) {
                confetti.splice(i, 1);
                
                // Add a new confetti at the top to keep the animation going
                if (Math.random() > 0.75) { // 25% chance to add a new one
                    const stickerType = Math.random() > 0.5 ? 'sticker1' : 'sticker2';
                    const startX = Math.random() * confettiCanvas.width;
                    
                    confetti.push({
                        x: startX,
                        y: -100,
                        size: Math.random() * 40 + 30,
                        type: stickerType,
                        speed: Math.random() * 0.125 + 0.125, // Quarter of original speed
                        rotation: Math.random() * 360,
                        rotationSpeed: (Math.random() - 0.5) * 0.5, // Quarter rotation speed
                        wobble: Math.random() * 10,
                        wobbleSpeed: Math.random() * 0.025, // Quarter wobble speed
                        gravity: 0.0125 + Math.random() * 0.0125, // Quarter gravity
                        opacity: 1,
                        fadeSpeed: 0.0025 + Math.random() * 0.0035 // Half fade speed
                    });
                }
            } else {
                drawConfetti(p);
            }
        }

        // Continue the animation
        animationId = requestAnimationFrame(updateConfetti);
    }

    // Start the animation
    
    function startAnimation() {
        animationId = requestAnimationFrame(updateConfetti);
    }
});