document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');
  const introVideo = document.getElementById('intro-video');
  const logoLink = document.querySelector('.logo');
  
  if (!introOverlay || !introVideo || !logoLink) return;

  // Check if user has already seen the intro
  const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
  
  if (hasSeenIntro) {
    // Skip intro if already seen in this session
    introOverlay.style.display = 'none';
    return;
  }

  // Mark intro as seen
  sessionStorage.setItem('hasSeenIntro', 'true');

  // Hide the original logo initially
  logoLink.style.opacity = '0';

  // Stop video at 2.5 seconds
  introVideo.addEventListener('timeupdate', () => {
    if (introVideo.currentTime >= 2.5) {
      introVideo.pause();
      
      // Immediately start zoom and slide animation to logo position
      introOverlay.classList.add('zoom-to-logo');
      
      // After animation completes, crossfade video with real logo
      setTimeout(() => {
        // Start fading in the real logo while video is still visible
        logoLink.style.opacity = '1';
        logoLink.style.transition = 'opacity 0.3s ease';
        
        // Fade out video overlay slightly after logo starts appearing
        setTimeout(() => {
          introOverlay.classList.add('complete');
          
          // Remove overlay from DOM after fade
          setTimeout(() => {
            introOverlay.style.display = 'none';
          }, 300);
        }, 150);
      }, 1800);
    }
  });

  // Fallback: if video doesn't load, show logo after 3 seconds
  setTimeout(() => {
    if (!introOverlay.classList.contains('complete')) {
      introOverlay.classList.add('zoom-to-logo');
      setTimeout(() => {
        logoLink.style.opacity = '1';
        logoLink.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          introOverlay.classList.add('complete');
          setTimeout(() => {
            introOverlay.style.display = 'none';
          }, 300);
        }, 150);
      }, 1800);
    }
  }, 4000);
});
