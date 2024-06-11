<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Пример воспроизведения звука</title>
</head>
<body>

<button id="playSound">Воспроизвести звук</button>

<audio id="soundClip" src="path_to_your_audio_file.mp3"></audio>//аудиовыход

<script>
document.getElementById('playSound').addEventListener('click', function() {
    var audio = document.getElementById('soundClip');
    audio.play();
});
</script>

</body>
</html>
