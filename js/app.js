  let startTime = performance.now();
    let frameCount = 0;

    function updateFPS() {
        let now = performance.now();
        let elapsed = now - startTime;

        if (elapsed > 1000) {
            let fps = (frameCount * 1000) / elapsed;
            document.getElementById('fps').innerText = fps.toFixed(1) + ' FPS';

            startTime = now;
            frameCount = 0;
        }

        frameCount++;
        requestAnimationFrame(updateFPS);
    }

    updateFPS();

    
    
document.addEventListener('DOMContentLoaded', function(){
      const texts = ['Hi My Name Is Hoang', 'Hey Bro, I’m a Developer', 'I really like being alone','What About You :)?', 'I think you are beautiful', 'I’m still alone', 'Be my girlfriend, okay?', 'I Love U']; // Mảng chứa các câu văn cần hiển thị
      let i = 0;
      let j = 0;
      let isDeleting = false;

      function typeWriter() {
        const currentText = texts[j];
        if(!isDeleting && i <= currentText.length) {
          document.querySelector('.typing-effect').textContent = currentText.substring(0, i);
          i++;
          setTimeout(typeWriter, 140);
          if (i > currentText.length) {
            isDeleting = true;
          }
        } else if (isDeleting && i >= 0) {
          document.querySelector('.typing-effect').textContent = currentText.substring(0, i);
          i--;
          setTimeout(typeWriter, 140);
          if (i === 0) {
            isDeleting = false;
            j = (j + 1) % texts.length; // Chuyển sang câu tiếp theo trong mảng
          }
        }
      }

      typeWriter();
    });
    
 