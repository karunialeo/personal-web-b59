let blogs = []; // length nya adalah 0

function addBlog(e) {
  e.preventDefault();

  let inputTitle = document.getElementById("input-blog-title").value;
  let inputContent = document.getElementById("input-blog-content").value;
  let inputImage = document.getElementById("input-blog-image");

  if (inputTitle == "" || inputContent == "" || inputImage.files.length === 0) {
    return alert("All input fields cannot be empty");
  }

  let imageURL = URL.createObjectURL(inputImage.files[0]);

  let blogs = {
    author: "Karunia Leo G",
    title: inputTitle,
    content: inputContent,
    image: imageURL,
    postedAt: new Date(),
  };

  blogs.push(blogs);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    let formattedDate = formatDateToWIB(blogs[i].postedAt);
    // menampilkan blogs yang sudah kita buat dengan mengisi form
    console.log(blogs[i]);

    blogListElement.innerHTML += `
        <div id="${i}" class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="blog-image" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" class="blog-item-title">
                ${blogs[i].title}
              </a>
            </h1>
            <div class="detail-blog-content">
              ${formattedDate} | ${blogs[i].author}
            </div>
            <p class="blog-text">
              ${blogs[i].content}
            </p>
            <p class="relative-time">${getRelativeTime(blogs[i].postedAt)}</p>
          </div>
        </div>
    `;
  }
}

function firstBlogContent() {
  return `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="blog-image" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" class="blog-item-title">
                Blog Title with Javascript
              </a>
            </h1>
            <div class="detail-blog-content">
              12 Jul 2024 22:30 WIB | Karunia Leo G
            </div>
            <p class="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              explicabo totam labore sit tempore, voluptate vitae nesciunt in
              maiores rerum, vero veritatis numquam iure aut sunt nemo.
            </p>
          </div>
        </div>
    `;
}

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
  console.log("WAKTU SEKARANG :");
  console.log(now);
  console.log("WAKTU POST :");
  console.log(targetDate);
  let selisih = now - targetDate;
  console.log("SELISIH WAKTU :");
  console.log(selisih);
  let diffInSeconds = Math.floor((now - targetDate) / 1000); // satuan dari ms ke detik

  console.log(diffInSeconds);

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
