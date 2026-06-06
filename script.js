const TRANSLATIONS = {
  pt: {
    eyebrow: 'Celebração de casamento',
    subtitle: 'Com alegria no coração, convidamos você para celebrar este momento tão especial conosco.',
    date: '18 de Setembro de 2027 · Lisboa, Portugal',
    storyTitle: 'Nossa História',
    storyText: 'Entre encontros, viagens, conversas longas e muitos sonhos partilhados, construímos uma história simples, bonita e cheia de amor. Agora queremos celebrar este novo capítulo ao lado das pessoas que fazem parte da nossa vida.',
    detailsTitle: 'Detalhes do Casamento',
    venue: 'Cerimônia e recepção em Lisboa, Portugal. Mais detalhes sobre local, horários e transporte serão partilhados em breve.',
    dressCode: 'Dress code: elegante e confortável para uma celebração especial.',
    rsvpTitle: 'Confirmação de Presença',
    rsvpText: 'Por favor, confirme a sua presença assim que possível para nos ajudar com a organização.',
    rsvpButton: 'Confirmar presença',
    messageTitle: 'Com carinho',
    messageText: 'A sua presença é o nosso maior presente. Estamos muito felizes por partilhar este dia com você.',
    footer: 'Com amor'
  },
  es: {
    eyebrow: 'Celebración de boda',
    subtitle: 'Con alegría en el corazón, te invitamos a celebrar este momento tan especial con nosotros.',
    date: '18 de septiembre de 2027 · Lisboa, Portugal',
    storyTitle: 'Nuestra Historia',
    storyText: 'Entre encuentros, viajes, largas conversaciones y muchos sueños compartidos, construimos una historia sencilla, bonita y llena de amor. Ahora queremos celebrar este nuevo capítulo con las personas que forman parte de nuestra vida.',
    detailsTitle: 'Detalles de la Boda',
    venue: 'Ceremonia y recepción en Lisboa, Portugal. Pronto compartiremos más detalles sobre el lugar, los horarios y el transporte.',
    dressCode: 'Código de vestimenta: elegante y cómodo para una celebración especial.',
    rsvpTitle: 'Confirmación de Asistencia',
    rsvpText: 'Por favor, confirma tu asistencia lo antes posible para ayudarnos con la organización.',
    rsvpButton: 'Confirmar asistencia',
    messageTitle: 'Con cariño',
    messageText: 'Tu presencia es nuestro mejor regalo. Estamos muy felices de compartir este día contigo.',
    footer: 'Con amor'
  },
  en: {
    eyebrow: 'Wedding celebration',
    subtitle: 'With joy in our hearts, we invite you to celebrate this very special moment with us.',
    date: '18 September 2027 · Lisbon, Portugal',
    storyTitle: 'Our Story',
    storyText: 'Through shared moments, trips, long conversations, and many dreams, we built a simple, beautiful story full of love. Now we want to celebrate this new chapter with the people who are part of our lives.',
    detailsTitle: 'Wedding Details',
    venue: 'Ceremony and reception in Lisbon, Portugal. More details about the venue, schedule, and transport will be shared soon.',
    dressCode: 'Dress code: elegant and comfortable for a special celebration.',
    rsvpTitle: 'RSVP',
    rsvpText: 'Please confirm your presence as soon as possible to help us with the planning.',
    rsvpButton: 'Confirm attendance',
    messageTitle: 'With love',
    messageText: 'Your presence is our greatest gift. We are very happy to share this day with you.',
    footer: 'With love'
  }
};

function setLang(lang) {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS.pt;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translations[key] || key;
  });

  document.querySelectorAll('.lang-switch button').forEach((button) => {
    button.classList.remove('active');
  });

  const activeButton = document.getElementById(`${lang}Btn`);
  if (activeButton) activeButton.classList.add('active');

  localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ptBtn').addEventListener('click', () => setLang('pt'));
  document.getElementById('esBtn').addEventListener('click', () => setLang('es'));
  document.getElementById('enBtn').addEventListener('click', () => setLang('en'));

  const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';
  setLang(savedLanguage);
});
