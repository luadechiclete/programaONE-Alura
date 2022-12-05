
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(120, 50, 350, 300);
    
    pincel.fillStyle = 'black';
    pincel.fillRect(170, 100, 90, 90);

    pincel.fillStyle = 'black';
    pincel.fillRect(330, 100, 90, 90);

    pincel.fillStyle = 'black';
    pincel.fillRect(260, 190, 70, 100);

    pincel.fillStyle = 'black';
    pincel.fillRect(220, 240, 40, 110);

    pincel.fillStyle = 'black';
    pincel.fillRect(330, 240, 40, 110);