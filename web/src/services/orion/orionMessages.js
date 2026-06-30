function getWelcomeMessage(profile) {
  if (profile.rating >= 4.8) {
    return "Excelente trabajo. Tu reputación inspira mucha confianza.";
  }

  if (profile.rating >= 4.5) {
    return "Vas por muy buen camino. Con algunos ajustes podrás mejorar aún más.";
  }

  return "Detecté varias oportunidades para fortalecer tu perfil.";
}

export default getWelcomeMessage;