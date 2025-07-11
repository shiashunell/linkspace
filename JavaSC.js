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
  const text = "music • midnight • chaos" "My link space"; // <- change this line
  let index = 0;
  let isDeleting = false;
  const speed = 120;
  const typedText = document.getElementById("typed-text");

  function typeLoop() {
    if (!isDeleting && index <= text.length) {
      typedText.textContent = text.substring(0, index);
      index++;
    } else if (isDeleting && index >= 0) {
      typedText.textContent = text.substring(0, index);
      index--;
    }

    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // pause before deleting
      return;
    }

    if (isDeleting && index === 0) {
      isDeleting = false;
    }

    setTimeout(typeLoop, isDeleting ? 80 : speed);
  }

  window.onload = typeLoop;
</script>
