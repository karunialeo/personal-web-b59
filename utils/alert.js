const Swal = require("sweetalert2");

function sendAlert(message) {
  Swal.fire({
    title: "Oops!",
    text: message,
    icon: "error",
  });
}

module.exports = {
  sendAlert,
};
