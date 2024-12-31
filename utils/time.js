function formatDateToWIB(date) {
  let months = [
    "Jan", // 0
    "Feb", // 1
    "Mar", // 2
    "Apr", // 3
    "Mei", // 4
    "Jun", // 5
    "Jul", // 6
    "Aug", // 7
    "Sep", // 8
    "Okt", // 9
    "Nov", // 10
    "Des", // 11
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = months[date.getMonth()]; // ===>>> bukan nama bulan, bukan angka bulan, tapi index dari bulan tersebut
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0"); // ===> "2"

  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(targetDate) {
  let now = new Date();
  // console.log("WAKTU SEKARANG :");
  // console.log(now);
  // console.log("WAKTU POST :");
  // console.log(targetDate);
  let selisih = now - targetDate;
  // console.log("SELISIH WAKTU :");
  // console.log(selisih);
  let diffInSeconds = Math.floor((now - targetDate) / 1000); // satuan dari ms ke detik

  // console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  let diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  }

  let diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  let diffInMonth = Math.floor(diffInDays / 30);
  return `${diffInMonth} month${diffInMonth > 1 ? "s" : ""} ago`;
}

module.exports = {
  formatDateToWIB,
  getRelativeTime,
};
