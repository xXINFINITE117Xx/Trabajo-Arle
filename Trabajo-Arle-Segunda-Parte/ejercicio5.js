function calcularCosto() {
    let stickerSize = document.getElementById("sticker-size").value;
    let stickerQuantity = parseInt(document.getElementById("sticker-quantity").value);

    if (isNaN(stickerQuantity) || stickerQuantity < 10) {
        alert("Por favor, ingresa una cantidad válida (mínimo 10 stickers).");
        return;
    }

    let costoSticker = 0;
    if (stickerSize === "pequeno") {
        costoSticker = 4000;
    } else if (stickerSize === "grande") {
        costoSticker = 6000;
    }

    let costoTotal = costoSticker * stickerQuantity;

    document.getElementById("result").innerText = `El costo total a pagar es: $${costoTotal}`;
}
