var modal = document.getElementById('modal');
var thumbnail = document.getElementById('thumbnail');
var modalImg = document.getElementById('modalImg');
var close = document.getElementById('close');

thumbnail.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
}

close.onclick = function() {
    modal.style.display = 'none';
}
