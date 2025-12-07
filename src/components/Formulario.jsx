import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, User, MessageSquare, X, CheckCircle } from "lucide-react";
import { exito, noEnviado, limpiarInput } from "../utils/sendForm";
import { useDarkMode } from "@buttons/DarkModeProvider";

const getThemeColors = (isDark) => ({
  primary: '#007bff',
  secondary: '#6c757d',
  bgPrimary: isDark ? '#1D232A' : '#F5F6F7',
  bgSecondary: isDark ? '#232946' : '#ffffff',
  textPrimary: isDark ? '#F5F6F7' : '#232946',
  textSecondary: isDark ? '#e0e0e0' : '#354A5F',
  textMuted: isDark ? '#6c757d' : '#868e96',
  gradientPrimary: 'linear-gradient(90deg, #6c63ff, #00c6fb)',
  borderColor: isDark ? 'rgba(108,99,255,0.2)' : 'rgba(0,123,255,0.1)',
  borderColorFocus: isDark ? 'rgba(108,99,255,0.5)' : 'rgba(0,123,255,0.3)',
  shadowSmall: isDark ? '0 4px 12px rgba(108,99,255,0.2)' : '0 4px 12px rgba(0,123,255,0.15)',
  shadowMedium: isDark ? '0 10px 25px rgba(108,99,255,0.3)' : '0 10px 25px rgba(0,123,255,0.2)',
});

const Formulario = () => {
  const isDark = useDarkMode();
  const colors = getThemeColors(isDark);
  
  const [viewForm, setViewForm] = useState(true); // Empieza abierto como el original
  const [focusedInput, setFocusedInput] = useState(null);
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredToggle, setIsHoveredToggle] = useState(false);

  const getStyles = () => ({
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 1rem',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 700,
      color: colors.textPrimary,
      marginBottom: '1rem',
      background: colors.gradientPrimary,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      color: colors.textSecondary,
      textAlign: 'center',
      marginBottom: '1rem',
    },
    toggleContainer: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    toggleButton: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: colors.gradientPrimary,
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: colors.shadowMedium,
      transition: 'all 0.3s ease',
    },
    toggleButtonHover: {
      transform: 'scale(1.1)',
      boxShadow: colors.shadowMedium,
    },
    formWrapper: {
      maxWidth: '700px',
      margin: '0 auto',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    formContainer: {
      background: isDark ? 'rgba(245, 246, 247, 0.03)' : 'rgba(0, 0, 0, 0.02)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      padding: '2.5rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderColor,
      boxShadow: colors.shadowMedium,
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.95rem',
      fontWeight: 600,
      color: colors.textPrimary,
      marginBottom: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      fontSize: '1rem',
      color: colors.textPrimary,
      background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderColor,
      borderRadius: '0.75rem',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    inputFocus: {
      borderColor: colors.borderColorFocus,
      boxShadow: colors.shadowSmall,
      background: isDark ? 'rgba(245, 246, 247, 0.08)' : 'rgba(0, 0, 0, 0.05)',
    },
    textarea: {
      width: '100%',
      padding: '0.875rem 1rem',
      fontSize: '1rem',
      color: colors.textPrimary,
      background: isDark ? 'rgba(245, 246, 247, 0.05)' : 'rgba(0, 0, 0, 0.02)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderColor,
      borderRadius: '0.75rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '120px',
    },
    submitButton: {
      width: '100%',
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      color: 'white',
      background: colors.gradientPrimary,
      border: 'none',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: colors.shadowMedium,
    },
    icon: {
      color: '#4DB1FF',
    },
    hidden: {
      opacity: 0,
      transform: 'translateY(20px)',
      pointerEvents: 'none',
      maxHeight: 0,
      overflow: 'hidden',
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      pointerEvents: 'auto',
      maxHeight: '2000px',
    },
  });

  const styles = getStyles();

  const form = useRef();

  const verForm = () => {
    setViewForm(!viewForm);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uiwikh8",
        "template_40uel95",
        form.current,
        "tvVn2ElRQmSkAAMc2"
      )
      .then(
        (result) => {
          form.current.reset();
          exito();
        },
        (error) => {
          noEnviado();
        }
      );
  };

  return (
    <section style={styles.container} id="contactame">
      <div style={styles.header}>
        <h3 style={styles.title}>Contáctame</h3>
        <p style={styles.subtitle}>
          {viewForm ? "" : "Diligenciar formulario"}
        </p>
      </div>

      <div style={styles.toggleContainer}>
        <button
          onClick={verForm}
          style={{
            ...styles.toggleButton,
            ...(isHoveredToggle ? styles.toggleButtonHover : {})
          }}
          onMouseEnter={() => setIsHoveredToggle(true)}
          onMouseLeave={() => setIsHoveredToggle(false)}
          title={viewForm ? "Cerrar formulario" : "Diligenciar formulario"}
        >
          {viewForm ? (
            <X size={24} color="white" />
          ) : (
            <Mail size={24} color="white" />
          )}
        </button>
      </div>

      <div style={{...styles.formWrapper, ...(viewForm ? styles.visible : styles.hidden)}}>
        <div style={styles.formContainer}>
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="form-name" value="contact" />

            <div style={styles.formGroup}>
              <label htmlFor="user_name" style={styles.label}>
                <User size={18} style={styles.icon} />
                Nombre
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Escribe tu nombre"
                required
                style={{
                  ...styles.input,
                  ...(focusedInput === 'name' ? styles.inputFocus : {})
                }}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="user_email" style={styles.label}>
                <Mail size={18} style={styles.icon} />
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="name@example.com"
                required
                style={{
                  ...styles.input,
                  ...(focusedInput === 'email' ? styles.inputFocus : {})
                }}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="asunto" style={styles.label}>
                <CheckCircle size={18} style={styles.icon} />
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="Escribe una breve descripción del motivo de contacto"
                required
                style={{
                  ...styles.input,
                  ...(focusedInput === 'subject' ? styles.inputFocus : {})
                }}
                onFocus={() => setFocusedInput('subject')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
                <MessageSquare size={18} style={styles.icon} />
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                rows="3"
                style={{
                  ...styles.textarea,
                  ...(focusedInput === 'message' ? styles.inputFocus : {})
                }}
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>

            <button
              type="submit"
              onClick={sendEmail}
              style={{
                ...styles.submitButton,
                ...(isHoveredButton ? styles.submitButtonHover : {})
              }}
              onMouseEnter={() => setIsHoveredButton(true)}
              onMouseLeave={() => setIsHoveredButton(false)}
            >
              <Send size={20} />
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;