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
