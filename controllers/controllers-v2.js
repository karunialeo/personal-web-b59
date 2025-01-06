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

  req.flash("success", "Berhasil mendaftar. Silahkan login.");
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
    req.flash("error", "User tidak ditemukan.");
    return res.redirect("/login");
  }

  // check if password is correct
  const isValidated = await bcrypt.compare(password, user.password);

  if (!isValidated) {
    req.flash("error", "Password mismatch.");
    return res.redirect("/login");
  }

  let loggedInUser = user.toJSON();

  delete loggedInUser.password;

  req.session.user = loggedInUser;

  req.flash("success", "Berhasil login");
  res.redirect("/blog-add");
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
  const user = req.session.user || null;

  if (user) {
    res.redirect("/");
  } else {
    res.render("auth-register");
  }
}

async function renderBlog(req, res) {
  let { user } = req.session;

  console.log("user yg sedang login", user);

  const blogs = await Blog.findAll({
    include: {
      model: User,
      as: "user",
      attributes: { exclude: ["password"] },
    },
    order: [["createdAt", "DESC"]],
  });

  console.log(blogs);

  // if (user) {
  //   res.render("blog", { blogs, user: user });
  // } else {
  // }
  res.render("blog", { blogs, user });
}

async function renderBlogDetail(req, res) {
  let { user } = req.session;
  const { id } = req.params;

  const blogDetail = await Blog.findOne({
    include: {
      model: User,
      as: "user",
      attributes: { exclude: ["password"] },
    },
    where: {
      id: id,
    },
  });

  if (blogDetail === null) {
    res.render("page-404", { message: "Blog tidak ditemukan" });
  } else {
    console.log("detail blog :", blogDetail);

    res.render("blog-detail", { data: blogDetail, user });
  }
}

function renderBlogAdd(req, res) {
  let { user } = req.session;

  if (!user) {
    req.flash("error", "Silahkan login.");
    return res.redirect("/login");
  }

  res.render("blog-add", { user });
}

async function addBlog(req, res) {
  console.log("request body", req.body);
  console.log("informasi file", req.file);
  let { user } = req.session;
  //   const { title, content } = req.body;
  console.log("form submitted");
  const { title, content } = req.body;

  const image = "http://localhost:5500/" + req.file.path;

  const result = await Blog.create({ title, content, image, user_id: user.id });

  console.log("result creating blog", result);

  res.redirect("/blog");
}

async function renderBlogEdit(req, res) {
  let { user } = req.session;
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

    res.render("blog-edit", { data: dataToEdit, user });
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
  let { user } = req.session;
  res.render("contact", { user });
}

function renderTestimonials(req, res) {
  let { user } = req.session;
  res.render("testimonial", { user });
}

function render404(req, res) {
  let { user } = req.session;
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
