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
  const text = "My Link Space";
  let index = 0;
  const speed = 120; // speed in ms
  const typedText = document.getElementById("typed-text");

  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  window.onload = type;
