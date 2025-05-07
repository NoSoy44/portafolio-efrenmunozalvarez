import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactoForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm("service_7k8ayah", "template_1fhwx1l", form.current, "6KfjuCczu3oU-nEyV")
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-3xl w-full mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100 transition"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <h3
        className="text-2xl font-semibold mb-6 text-center"
        style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
      >
        Envíame un mensaje
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-[var(--text-dark)]">
            Tu nombre
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[var(--text-dark)]">
            Tu correo
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-[var(--text-dark)]">
          Mensaje
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-semibold px-8 py-3 rounded-full transition-all"
        >
          Enviar mensaje
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-600 font-medium text-center text-sm mt-4">
          ¡Mensaje enviado con éxito!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium text-center text-sm mt-4">
          Hubo un error al enviar el mensaje. Intenta de nuevo.
        </p>
      )}
    </form>
  );
}