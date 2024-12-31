const { Sequelize, QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const config = require("../config/config.json");
const { Blog, User } = require("../models");

const saltRounds = 10;

const sequelize = new Sequelize(config.development);

async function authRegister(req, res) {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.redirect("/login");
}

async function authLogin(req, res) {
  const { email, password } = req.body;

  // check if user exist
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.render("page-404", { message: "User tidak ditemukan" });
  }

  // check if password is correct
  const isValidated = await bcrypt.compare(password, user.password);

  if (!isValidated) {
    return res.render("page-403");
  }

  let loggedInUser = user.toJSON();

  delete loggedInUser.password;

  req.session.user = loggedInUser;

  // delete req.session.user.password;

  res.redirect("/");
}

function authLogout(req, res) {
  req.session.user = null;

  res.redirect("/login");
}

function renderHome(req, res) {
  const user = req.session.user;
  res.render("index", { user });
}

function renderLogin(req, res) {
  const user = req.session.user;

  if (user) {
    res.redirect("/");
  } else {
    res.render("auth-login");
  }
}

function renderRegister(req, res) {
  const user = req.session.user;

  if (user) {
    res.redirect("/");
  } else {
    res.render("auth-register");
  }
}

async function renderBlog(req, res) {
  const { user } = req.session;

  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
  });

  console.log(blogs);

  res.render("blog", { blogs: blogs, user });
}

async function renderBlogDetail(req, res) {
  const { id } = req.params;

  const blogDetail = await Blog.findOne({
    where: {
      id: id,
    },
  });

  if (blogDetail === null) {
    res.render("page-404", { message: "Blog tidak ditemukan" });
  } else {
    console.log("detail blog :", blogDetail);

    res.render("blog-detail", { data: blogDetail });
  }
}

function renderBlogAdd(req, res) {
  res.render("blog-add");
}

async function addBlog(req, res) {
  //   const { title, content } = req.body;
  console.log("form submitted");
  const { title, content } = req.body;

  const image = "https://picsum.photos/200/300";

  const result = await Blog.create({ title, content, image });

  console.log("result creating blog", result);

  res.redirect("/blog");
}

async function renderBlogEdit(req, res) {
  const { id } = req.params;

  const dataToEdit = await Blog.findOne({
    where: {
      id: id,
    },
  });

  if (dataToEdit === null) {
    res.render("page-404", { message: "Blog tidak ditemukan" });
  } else {
    console.log("data yang mau di edit :", dataToEdit); // array

    res.render("blog-edit", { data: dataToEdit });
  }
}

async function updateBlog(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  const result = await Blog.update(
    {
      title: title,
      content: content,
      updatedAt: sequelize.fn("NOW"),
    },
    {
      where: {
        id: id,
      },
    }
  );

  console.log("result update :", result);

  res.redirect("/blog");
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  const result = await Blog.destroy({
    where: {
      id,
    },
  });

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
  renderLogin,
  authLogin,
  renderRegister,
  authRegister,
  authLogout,
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
