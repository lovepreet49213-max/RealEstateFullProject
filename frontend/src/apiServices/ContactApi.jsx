import axios from "axios";


// const API = axios.create({
//   baseURL: "http://localhost:8000/",
//   withCredentials: true,
// });

export const sendMail = async (Form_data) => {


 try {
     const response = await fetch("https://localhost:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "lovepreet49213@gmail.com",
          subject: "Contact Form - Real Estate Website",
          text: `
                Name: ${Form_data.name}
                Email: ${Form_data.email}

                Message:
                ${Form_data.message}
          `,
        }),
      });

      alert("Message sent successfully!");
      // setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    }



debugger;
console.log("Sending mail data:");


//   const response = await API.post("/send-email", mailData);
  return response.data;
};