import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Mail, Send, User, MessageSquare, X, CheckCircle } from "lucide-react";
import { exito, noEnviado, limpiarInput } from "../utils/sendForm";
import { useDarkMode } from "@buttons/DarkModeProvider";

const getThemeColors = (isDark) => ({
  primary: '#004085',
  secondary: '#6c757d',
  bgPrimary: isDark ? '#1D232A' : '#F5F6F7',
  bgSecondary: isDark ? '#232946' : '#ffffff',
  textPrimary: isDark ? '#F5F6F7' : '#232946',
  textSecondary: isDark ? '#e0e0e0' : '#354A5F',
  textMuted: isDark ? '#999' : '#868e96',
  gradientPrimary: isDark ? 'linear-gradient(135deg, #004085 0%, #0066cc 100%)' : 'linear-gradient(135deg, #004085 0%, #1a75ff 100%)',
  borderColor: isDark ? 'rgba(0, 64, 133, 0.15)' : 'rgba(0, 64, 133, 0.08)',
  borderColorFocus: isDark ? 'rgba(0, 64, 133, 0.4)' : 'rgba(0, 64, 133, 0.25)',
  shadowSmall: isDark ? '0 4px 12px rgba(0, 64, 133, 0.15)' : '0 4px 12px rgba(0, 64, 133, 0.1)',
  shadowMedium: isDark ? '0 10px 25px rgba(0, 64, 133, 0.2)' : '0 10px 25px rgba(0, 64, 133, 0.12)',
});

const Formulario = () => {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const colors = getThemeColors(isDark);
  
  const [viewForm, setViewForm] = useState(true); // Empieza abierto como el original
  const [focusedInput, setFocusedInput] = useState(null);
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredToggle, setIsHoveredToggle] = useState(false);

  const getStyles = () => ({
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3rem 1rem',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: 700,
      color: isDark ? colors.textPrimary : '#004085',
      marginBottom: '0.5rem',
      background: isDark ? colors.gradientPrimary : 'linear-gradient(90deg, transparent 0%, #004085 0%, #004085 100%, transparent 100%)',
      WebkitBackgroundClip: isDark ? 'text' : 'unset',
      WebkitTextFillColor: isDark ? 'transparent' : 'unset',
      backgroundClip: isDark ? 'text' : 'unset',
      padding: isDark ? '0' : '0',
      borderRadius: isDark ? '0' : '0',
      display: 'inline-block',
      position: 'relative',
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
      maxWidth: '600px',
      margin: '0 auto',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    formContainer: {
      background: isDark ? 'rgba(29, 35, 42, 0.7)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderColor,
      boxShadow: colors.shadowSmall,
    },
    formGroup: {
      marginBottom: '1.25rem',
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
      padding: '0.75rem 0.875rem',
      fontSize: '0.95rem',
      color: colors.textPrimary,
      background: isDark ? 'rgba(245, 246, 247, 0.04)' : 'rgba(0, 0, 0, 0.01)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderColor,
      borderRadius: '0.5rem',
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
      padding: '0.75rem 0.875rem',
      fontSize: '0.95rem',
      color: colors.textPrimary,
      background: isDark ? 'rgba(245, 246, 247, 0.04)' : 'rgba(0, 0, 0, 0.01)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.borderColor,
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '100px',
    },
    submitButton: {
      width: '100%',
      padding: '0.875rem 2rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'white',
      background: colors.gradientPrimary,
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1.5rem',
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: colors.shadowSmall,
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
          <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>{t('contact.title')}</h3>
        <p style={styles.subtitle}>
          {viewForm ? "" : t('contact.subtitle')}
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
          title={viewForm ? t('contact.closeForm') : t('contact.openForm')}
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
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder={t('contact.namePlaceholder')}
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
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder={t('contact.emailPlaceholder')}
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
                {t('contact.subject')}
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder={t('contact.subjectPlaceholder')}
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
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t('contact.messagePlaceholder')}
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
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Formulario;