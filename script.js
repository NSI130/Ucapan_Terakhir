const ucapan = {
  "Revan": "Revan, teman baik yang duduk tepat di sampingku. Semoga kamu jadi pribadi yang lebih baik dan menemukan cewek cantik di SMK!",
  "Callysta": "Callysta, temen yang duduk di belakangku. Kamu orang baik. Semoga di SMA nanti kamu bisa jadi lebih baik lagi ya.",
  "Neyfa": "Neyfa, teman duduknya Callysta. Semoga kamu bisa lebih taat, lebih fokus, dan siapa tahu... ketemu Revan lagi di masa depan?",
  "Mikael": "Mikael, kita bareng selama 3 kelas. Makasih ya udah jadi teman baik. Semoga dapat pengganti Ivana dan sukses di badminton!",
  "Danish": "Danish, Nish, gw harap lu bisa lebih baik dari sebelumnya. Semoga nemu yang lebih baik dari Tabina juga ya!",
  "Kekey": "Kekey, tetap jadi pribadi yang terus berkembang. Semoga nanti dapat permata—yang benar-benar permata.",
  "Vania": "Hai Van... mungkin kita nggak akan sering bertemu lagi. Tapi aku sempat menyukaimu. Aku masih. Jadi lebih baik, ya.",
  "Prima": "Prima, lu kuat walau tanpa Ave dan Marissa. Gw percaya lu orang hebat. Tetap jadi orang yang berguna ya.",
  "Ivana": "Hey Kunti Bogellll, makasih buat masa-masa ini. Semoga kamu bisa jadi lebih baik yaa~ (Salam dari Mikel).",
  "Chaderick": "Hey Chad, semoga di SMA bisa lebih keren lagi. Kalau ke Depok, jangan sungkan. OSN, body goal, semua semoga tercapai!",
  "Risa": "Woi Risa, cosplay kapan? Gw tunggu. Sayang udah selesai. Semoga kamu capai semua impianmu ya.",
  "Zefanya": "Zeff, temen hebat pas kelas 8. Makasih udah kasih banyak sudut pandang baru. Semoga semua harapanmu tercapai!",
  "Aka": "HIIIIIIIII~ Meskipun kita nggak selalu dekat, kamu pernah jadi temanku. Maaf aku nggak bisa selalu ada. Tapi kamu harus semangat dan terus improve ya!",
  "Raissa": "Heyyy Raiii~ Semoga harimu selalu lancar ya walau aku mungkin jarang aktif lagi. Kamu orang baik.",
  "Ara": "Nyari apa lu? Gw tahu lu pasti nyari ini kan.",
  "Salwa": "Heyy Salwa, makasih ya untuk momen-momen yang pernah ada. Semoga kamu dapatkan apa yang kamu inginkan, jadi pribadi yang lebih baik juga ya.",
  "Adenna": "Heyy Denna, semoga Sylus beneran jadi suami kamu. Makasih udah jadi cerita di hidupku, titip salam buat Kirana ya!",
  "Ibam": "Woy Barry! Lu orang baik. Semoga lu jadi body builder hebat dan masuk ke Olympian, bro!",
  "Lira": "Hai Lira, makasih udah jadi bagian dari cerita hidupku. Semoga kamu dapat apa yang kamu inginkan dan semua berjalan lancar ya.",
  "Ratri": "Woi Ratri, sehat-sehat terus ya. Udah dulu, gw mau makan.",
  "Fauzan": "Fauzan dan Eko, semoga kalian sehat selalu. Gw tunggu lihat kalian pakai seragam TNI AL. Keren itu!",
  "Eko": "Fauzan dan Eko, semoga kalian sehat selalu. Gw tunggu lihat kalian pakai seragam TNI AL. Keren itu!"
};

function cariUcapan() {
  const input = document.getElementById("nameInput").value.trim();
  const nama = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(); // Format huruf kapital di awal
  const outputDiv = document.getElementById("output");

  if (ucapan[nama]) {
    outputDiv.textContent = ucapan[nama];
  } else {
    outputDiv.textContent = "Maaf, ucapan untuk nama tersebut tidak ditemukan.";
  }
}
