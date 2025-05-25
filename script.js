document.getElementById("btnShow").addEventListener("click", function() {
    const input = document.getElementById("nameInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (input === "") {
        resultDiv.textContent = "Tolong ketik nama dulu ya!";
        return;
    }

    const name = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    const filePath = `ucapan/${name}.txt`;

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Ucapan tidak ditemukan!");
            return response.text();
        })
        .then(text => {
            resultDiv.textContent = text;
        })
        .catch(() => {
            resultDiv.textContent = "Maaf, ucapan untuk nama ini belum tersedia.";
        });
});
