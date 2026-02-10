function handleSubmit(event) {
  event.preventDefault();

  const form = document.forms["myForm"];
  const formData = new FormData(form);

  const name = formData.get("name").trim();
  const gender = formData.get("gender");
  const hobbies = formData.getAll("hobbies");
  const phone = formData.get("phone");
  const appointment = formData.get("appointment");
  const country = formData.get("country");
  const resume = formData.get("resume");
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const confirmPassword = formData.get("confirmPassword").trim();

  if (
    !name ||
    !gender ||
    !email ||
    !password ||
    !confirmPassword ||
    !appointment ||
    !country ||
    !phone
  ) {
    alert("All fields are required");
    return;
  }

  if (!/^9\d{9}$/.test(phone) && !/^01\d{7}$/.test(phone)) {
    alert("Invalid phone number");
    return false;
  }

  const now = new Date();
  const selectedDate = new Date(appointment);
  if (selectedDate < now) {
    alert("Appointment date & time cannot be in the past");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return;
  }

  if (!resume.name) {
    alert("Please upload resume");
    return;
  }

  const allowedExtensions = ["pdf", "jpg", "jpeg", "png"];
  const extension = resume.name.split(".").pop().toLowerCase();
  if (!allowedExtensions.includes(extension))
    return alert("Unsupported file format");

  const maxSize = 2 * 1024 * 1024;
  if (resume.size > maxSize) {
    alert("File size should be less than 2MB");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password did not match");
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long and contain at least one lowercase, one uppercase, one number, and one symbol.",
    );
    return;
  }

  console.log("Form data:", {
    name,
    gender,
    hobbies,
    appointment,
    resume,
    country,
    email,
    password,
    confirmPassword,
  });
  alert("Form submitted successfully!");
}
