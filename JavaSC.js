<input type="file" id="uploadPFP" accept="image/*">
<br><br>
<img id="profilePic" src="" alt="Your Profile Picture" width="150" height="150" style="border-radius: 50%; display: none;" />

<script>
  const uploadInput = document.getElementById('uploadPFP');
  const profilePic = document.getElementById('profilePic');

  uploadInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      profilePic.src = imageURL;
      profilePic.style.display = 'block';
    }
  });

<script>
  const phrases = ["My LinkSpace", "music • midnight • chaos", "🎧 HeadstrmShiaa 🎵"];
  let currentPhrase = 0;
  let currentLetter = 0;
  let isDeleting = false;
  const speed = 100;
  const typedText = document.getElementById("typed-text");

  function typeLoop() {
    const current = phrases[currentPhrase];
    if (isDeleting) {
      typedText.textContent = current.substring(0, currentLetter--);
    } else {
      typedText.textContent = current.substring(0, currentLetter++);
    }

    if (!isDeleting && currentLetter === current.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // pause before deleting
      return;
    }

    if (isDeleting && currentLetter === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }

    setTimeout(typeLoop, isDeleting ? 60 : speed);
  }

  window.onload = typeLoop;
</script>
