function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    var color = getRandomColor();
    document.getElementById('colorBox').style.backgroundColor = color;
    document.getElementById('colorCode').textContent = color;
  }
  
  function copyToClipboard() {
    var text = document.getElementById('colorCode').textContent;
    var textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Show "Copied!" message 
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function() {
      copyMessage.style.display = 'none';
    }, 2000);
  }
  