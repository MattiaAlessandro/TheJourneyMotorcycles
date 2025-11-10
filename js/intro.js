document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');
  const introVideo = document.getElementById('intro-video');
  
  if (!introOverlay || !introVideo) return;

  // Check if user has already seen the intro
  const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
  
  if (hasSeenIntro) {
    // Skip intro if already seen in this session
    introOverlay.style.display = 'none';
    return;
  }

  // Mark intro as seen
  sessionStorage.setItem('hasSeenIntro', 'true');

  // Stop video at 2.5 seconds
  introVideo.addEventListener('timeupdate', () => {
    if (introVideo.currentTime >= 2.5) {
      introVideo.pause();
      
      // Start fade out and zoom animation
      setTimeout(() => {
        introOverlay.classList.add('fade-out');
        
        // Remove overlay after fade completes
        setTimeout(() => {
          introOverlay.style.display = 'none';
        }, 500);
      }, 200);
    }
  });

  // Fallback: if video doesn't load, hide overlay after 3 seconds
  setTimeout(() => {
    if (introOverlay.style.display !== 'none') {
      introOverlay.classList.add('fade-out');
      setTimeout(() => {
        introOverlay.style.display = 'none';
      }, 500);
    }
  }, 3000);
});
