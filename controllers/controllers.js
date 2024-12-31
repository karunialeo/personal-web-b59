const { Sequelize, QueryTypes } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(config.development);

function renderHome(req, res) {
  res.render("index");
}

// BLOG
let blogs = [
  {
    author: "Karunia Leo G",
    title: "title 1",
    content: "content 1",
    image: "https://picsum.photos/200/300",
    postedAt: new Date(),
  },
  {
    author: "Karunia Leo G",
    title: "title 2",
    content: "content 2",
    image: "https://picsum.photos/200/300",
    postedAt: new Date(),
  },
];

async function renderBlog(req, res) {
  const query = `SELECT * FROM public."Blogs" ORDER BY "createdAt" DESC`;
  const blogs = await sequelize.query(query, { type: QueryTypes.SELECT });

  console.log(blogs);

  res.render("blog", { blogs: blogs });
}

async function renderBlogDetail(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM public."Blogs" WHERE id = ${id}`;
  const blogDetail = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("blog-detail", { data: blogDetail[0] });
}

function renderBlogAdd(req, res) {
  res.render("blog-add");
}

async function addBlog(req, res) {
  //   const { title, content } = req.body;
  console.log("form submitted");
  const { title, content } = req.body;

  const image = "https://picsum.photos/200/300";

  const query = `INSERT INTO public."Blogs"
                  (title, content, image)
                  VALUES
                  ('${title}', '${content}', '${image}')
  `;

  const result = await sequelize.query(query, { type: QueryTypes.INSERT });

  console.log(result);

  res.redirect("/blog");
}

async function renderBlogEdit(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM public."Blogs" WHERE id = ${id}`;
  const dataToEdit = await sequelize.query(query, { type: QueryTypes.SELECT });

  console.log("data yang mau di edit :", dataToEdit); // array

  res.render("blog-edit", { data: dataToEdit[0] });
}

async function updateBlog(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  const query = `UPDATE public."Blogs"
    SET title = '${title}', content = '${content}'
    WHERE id = ${id}`;

  const result = await sequelize.query(query, { type: QueryTypes.UPDATE });

  // let updatedBlog = {
  //   author: "Karunia Leo G",
  //   title: title,
  //   content: content,
  //   image:
  //     "https://www.bernas.id/wp-content/uploads/2022/04/01482212730Naruto.png",
  //   postedAt: new Date(),
  // };
  console.log("result update :", result);

  res.redirect("/blog");
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  const query = `DELETE FROM public."Blogs"
                  WHERE id = ${id}`;
  const result = await sequelize.query(query, { type: QueryTypes.DELETE });

  console.log("result query delete :", result);

  res.redirect("/blog");
}

// CONTACT

function renderContact(req, res) {
  res.render("contact");
}

function renderTestimonials(req, res) {
  res.render("testimonial");
}

function render404(req, res) {
  res.send(`halaman ini tidak ada!`);
}

module.exports = {
  renderHome,
  renderContact,
  renderBlog,
  renderBlogDetail,
  updateBlog,
  deleteBlog,
  renderBlogAdd,
  renderBlogEdit,
  addBlog,
  renderTestimonials,
  render404,
};
