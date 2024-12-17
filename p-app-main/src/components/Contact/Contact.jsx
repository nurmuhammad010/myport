import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  // Telegram bot token va chat_id
  const BOT_TOKEN = "123456789:ABCdEfGhIjKlMnOpQrStUvWxYz"; // O'zingizning bot tokeningiz
  const CHAT_ID = "YOUR_CHAT_ID"; // O'zingizning chat ID (BotFather orqali topish)

  const sendToTelegram = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");
    const message = formData.get("message");

    // Telegramga yuboriladigan matn
    const text = `📩 *Yangi xabar!* \n\n👤 Ism: ${user_name} \n📧 Email: ${user_email} \n📝 Xabar: ${message}`;

    // Telegram Bot API orqali so'rov yuborish
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Message sent to Telegram:", data);
        setDone(true);
        form.current.reset(); // Formani tozalash
      })
      .catch((err) => console.error("Error sending message:", err));
  };

  return (
    <div className="contact-form" id="contact">
      {/* Chap tomondagi matn */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      {/* Forma qismi */}
      <div className="c-right">
        <form ref={form} onSubmit={sendToTelegram}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
