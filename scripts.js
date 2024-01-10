fetch('https://economia.awesomeapi.com.br/last/usd-brl')
    .then(response => response.json())
    .then(data => {
        const valorDolar = data.USDBRL.ask;
        const valorFormatado = `$ ${parseFloat(valorDolar).toFixed(2)}`;
        document.getElementById('cotacao').textContent = valorFormatado;
    })
    .catch(error => {
        console.error('Erro ao buscar cotação', error);
        document.getElementById('cotacao').textContent = 'Erro ao carregar';
    });

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('liquidCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var drops = [];
    for (let i = 0; i < 100; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 2 + 1
        });
    }


    function drawDrop(drop) {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2);
        ctx.fillStyle = 'purple';
        ctx.fill();
    }


    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        drops.forEach(drop => {
            drop.y += drop.speed;
            drawDrop(drop);


            if (drop.y > canvas.height) {
                drop.y = 0;
                drop.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
});
