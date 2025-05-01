// Y2K-Inspired Script for Birthday Invitation Website

document.addEventListener('DOMContentLoaded', function() {
    // Add some Y2K-inspired cursor effects
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // Create and append the cursor trail elements
    const trailCount = 5;
    const trails = [];
    
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.backgroundColor = i % 2 === 0 ? '#32CD32' : '#00FFFF';
        document.body.appendChild(trail);
        trails.push({
            element: trail,
            x: 0,
            y: 0
        });
    }
    
    // Update the cursor trail positions with a delay
    document.addEventListener('mousemove', function(e) {
        setTimeout(function() {
            updateTrails(e.pageX, e.pageY);
        }, 100);
    });
    
    function updateTrails(x, y) {
        for (let i = trails.length - 1; i > 0; i--) {
            trails[i].x = trails[i-1].x;
            trails[i].y = trails[i-1].y;
        }
        
        trails[0].x = x;
        trails[0].y = y;
        
        trails.forEach((trail, index) => {
            trail.element.style.left = trail.x + 'px';
            trail.element.style.top = trail.y + 'px';
            trail.element.style.width = (10 - index) + 'px';
            trail.element.style.height = (10 - index) + 'px';
        });
    }
    
    // Add CSS for cursor effects
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #32CD32;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
        }
        
        .cursor-trail {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
        }
        
        body {
            cursor: none;
        }
    `;
    document.head.appendChild(style);
    
    // Show/hide guest count based on attendance
    const attendingSelect = document.getElementById('attending');
    const guestsField = document.getElementById('guests').parentElement;
    
    attendingSelect.addEventListener('change', function() {
        if (this.value === 'no') {
            guestsField.style.display = 'none';
        } else {
            guestsField.style.display = 'block';
        }
    });
});