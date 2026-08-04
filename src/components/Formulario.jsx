// src/components/Formulario.jsx - VERSIÓN SIMPLIFICADA ESTILO SAP
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  X, 
  CheckCircle, 
  Loader2, 
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { exito, noEnviado } from "../utils/sendForm";

const Formulario = () => {
  const { t } = useTranslation();
  const [viewForm, setViewForm] = useState(true); // Abierto por defecto
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const form = useRef();

  const key = process.env.Email_key;
  const publicKey = process.env.public_key;

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(key, "template_40uel95", form.current, publicKey);
      form.current.reset();
      setStatus("success");
      exito();
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus("error");
      noEnviado();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contactame" 
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14"
    >
      {/* Encabezado simplificado */}
      <div className="text-center mb-6">
        
        <h3 className="text-2xl sm:text-3xl font-bold text-[#232946] dark:text-[#F5F6F7]">
          {t("contact.title")}
        </h3>
      </div>

      {/* Botón para abrir/cerrar - Integrado */}
      <div className="max-w-xl mx-auto mb-6">
        <button
          onClick={() => setViewForm(!viewForm)}
          className={`
            w-full flex items-center justify-between px-5 py-3.5
            text-sm font-semibold
            bg-white dark:bg-[#1D232A]
            border rounded-lg
            transition-all duration-200
            hover:shadow-md
            ${viewForm 
              ? 'border-[#004085]/30 dark:border-[#4DB1FF]/30 text-[#004085] dark:text-[#4DB1FF]' 
              : 'border-[#004085] dark:border-[#4DB1FF] text-[#004085] dark:text-[#4DB1FF] hover:bg-[#004085]/5 dark:hover:bg-[#4DB1FF]/5'
            }
          `}
          type="button"
        >
          <span className="flex items-center gap-2">
            <Mail size={18} />
            {viewForm ? t("contact.closeForm") : t("contact.openForm")}
          </span>
          <ChevronRight 
            size={18} 
            className={`transition-transform duration-300 ${viewForm ? 'rotate-90' : ''}`}
          />
        </button>
      </div>

      {/* Formulario - Estilo SAP compacto */}
      <div
        className={`
          max-w-xl mx-auto transition-all duration-300 ease-in-out
          ${viewForm
            ? "opacity-100 translate-y-0 max-h-[1500px] pointer-events-auto"
            : "opacity-0 translate-y-4 max-h-0 overflow-hidden pointer-events-none"
          }
        `}
      >
        <div className="bg-white dark:bg-[#1D232A] rounded-lg border border-[#004085]/10 dark:border-[#004085]/20 shadow-sm p-5 sm:p-6">
          
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />

            {/* Campo Nombre */}
            <div>
              <label
                htmlFor="user_name"
                className={`
                  block text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-200
                  ${focusedField === 'name' ? 'text-[#004085] dark:text-[#4DB1FF]' : 'text-[#354A5F] dark:text-[#e0e0e0]'}
                `}
              >
                {t("contact.name")} <span className="text-[#b32020]">*</span>
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] dark:text-[#6a6d70]" />
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder={t("contact.namePlaceholder")}
                  required
                  disabled={isSubmitting}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full pl-9 pr-3 py-2.5
                    text-sm text-[#232946] dark:text-[#F5F6F7]
                    bg-white dark:bg-[#232a32]
                    border rounded
                    transition-all duration-200
                    focus:outline-none focus:ring-1
                    disabled:opacity-50 disabled:cursor-not-allowed
                    placeholder:text-[#a0a0a0] dark:placeholder:text-[#6a6d70]
                    ${focusedField === 'name' 
                      ? 'border-[#004085] dark:border-[#4DB1FF] ring-[#004085]/20 dark:ring-[#4DB1FF]/20' 
                      : 'border-[#d9d9d9] dark:border-[#3c4854] hover:border-[#004085]/50 dark:hover:border-[#4DB1FF]/50'
                    }
                  `}
                />
              </div>
            </div>

            {/* Campo Email */}
            <div>
              <label
                htmlFor="user_email"
                className={`
                  block text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-200
                  ${focusedField === 'email' ? 'text-[#004085] dark:text-[#4DB1FF]' : 'text-[#354A5F] dark:text-[#e0e0e0]'}
                `}
              >
                {t("contact.email")} <span className="text-[#b32020]">*</span>
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] dark:text-[#6a6d70]" />
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  disabled={isSubmitting}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full pl-9 pr-3 py-2.5
                    text-sm text-[#232946] dark:text-[#F5F6F7]
                    bg-white dark:bg-[#232a32]
                    border rounded
                    transition-all duration-200
                    focus:outline-none focus:ring-1
                    disabled:opacity-50 disabled:cursor-not-allowed
                    placeholder:text-[#a0a0a0] dark:placeholder:text-[#6a6d70]
                    ${focusedField === 'email' 
                      ? 'border-[#004085] dark:border-[#4DB1FF] ring-[#004085]/20 dark:ring-[#4DB1FF]/20' 
                      : 'border-[#d9d9d9] dark:border-[#3c4854] hover:border-[#004085]/50 dark:hover:border-[#4DB1FF]/50'
                    }
                  `}
                />
              </div>
            </div>

            {/* Campo Asunto */}
            <div>
              <label
                htmlFor="asunto"
                className={`
                  block text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-200
                  ${focusedField === 'subject' ? 'text-[#004085] dark:text-[#4DB1FF]' : 'text-[#354A5F] dark:text-[#e0e0e0]'}
                `}
              >
                {t("contact.subject")} <span className="text-[#b32020]">*</span>
              </label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] dark:text-[#6a6d70]" />
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder={t("contact.subjectPlaceholder")}
                  required
                  disabled={isSubmitting}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full pl-9 pr-3 py-2.5
                    text-sm text-[#232946] dark:text-[#F5F6F7]
                    bg-white dark:bg-[#232a32]
                    border rounded
                    transition-all duration-200
                    focus:outline-none focus:ring-1
                    disabled:opacity-50 disabled:cursor-not-allowed
                    placeholder:text-[#a0a0a0] dark:placeholder:text-[#6a6d70]
                    ${focusedField === 'subject' 
                      ? 'border-[#004085] dark:border-[#4DB1FF] ring-[#004085]/20 dark:ring-[#4DB1FF]/20' 
                      : 'border-[#d9d9d9] dark:border-[#3c4854] hover:border-[#004085]/50 dark:hover:border-[#4DB1FF]/50'
                    }
                  `}
                />
              </div>
            </div>

            {/* Campo Mensaje */}
            <div>
              <label
                htmlFor="message"
                className={`
                  block text-xs font-bold uppercase tracking-wider mb-1 transition-colors duration-200
                  ${focusedField === 'message' ? 'text-[#004085] dark:text-[#4DB1FF]' : 'text-[#354A5F] dark:text-[#e0e0e0]'}
                `}
              >
                {t("contact.message")} <span className="text-[#b32020]">*</span>
              </label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-3 top-3 text-[#a0a0a0] dark:text-[#6a6d70]" />
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  rows="4"
                  required
                  disabled={isSubmitting}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`
                    w-full pl-9 pr-3 py-2.5
                    text-sm text-[#232946] dark:text-[#F5F6F7]
                    bg-white dark:bg-[#232a32]
                    border rounded
                    transition-all duration-200
                    focus:outline-none focus:ring-1
                    disabled:opacity-50 disabled:cursor-not-allowed
                    resize-y min-h-[90px]
                    placeholder:text-[#a0a0a0] dark:placeholder:text-[#6a6d70]
                    ${focusedField === 'message' 
                      ? 'border-[#004085] dark:border-[#4DB1FF] ring-[#004085]/20 dark:ring-[#4DB1FF]/20' 
                      : 'border-[#d9d9d9] dark:border-[#3c4854] hover:border-[#004085]/50 dark:hover:border-[#4DB1FF]/50'
                    }
                  `}
                />
              </div>
            </div>

            {/* Estados */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm">
                <CheckCircle size={16} className="shrink-0" />
                <span>¡Mensaje enviado con éxito!</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-sm">
                <AlertCircle size={16} className="shrink-0" />
                <span>Error al enviar. Inténtalo de nuevo.</span>
              </div>
            )}

            {/* Botón de Envío - Estilo SAP */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-2.5 px-4 
                text-sm font-bold uppercase tracking-wider text-white
                bg-[#004085] 
                border border-[#004085]
                rounded
                cursor-pointer
                flex items-center justify-center gap-2
                transition-all duration-200
                hover:bg-[#003366] hover:border-[#003366]
                active:bg-[#002244]
                disabled:opacity-60 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-[#004085]/30
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>{t("contact.send")}</span>
                </>
              )}
            </button>

            {/* Campos obligatorios */}
            <p className="text-xs text-[#a0a0a0] dark:text-[#6a6d70] text-center">
              <span className="text-[#b32020]">*</span> Campos obligatorios
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;