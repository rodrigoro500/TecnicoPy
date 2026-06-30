const profile = {
  verified: true,
  reviews: 128,
  rating: 4.9,
  responseMinutes: 8,
  completedProfile: 100,
  jobs: 320,
  complaints: 0,
};

function calculateOrionScore(profile) {
  let score = 0;

  // Identidad verificada
  if (profile.verified) score += 20;

  // Reputación
  if (profile.rating >= 4.8) score += 20;
  else if (profile.rating >= 4.5) score += 15;
  else score += 10;

  // Opiniones
  if (profile.reviews >= 100) score += 15;
  else if (profile.reviews >= 50) score += 10;
  else score += 5;

  // Tiempo de respuesta
  if (profile.responseMinutes <= 10) score += 15;
  else if (profile.responseMinutes <= 30) score += 10;
  else score += 5;

  // Perfil completo
  if (profile.completedProfile === 100) score += 15;

  // Experiencia
  if (profile.jobs >= 300) score += 10;
  else if (profile.jobs >= 100) score += 5;

  // Reclamos
  if (profile.complaints === 0) score += 5;

  return {
    score,
    level:
      score >= 90
        ? "Excelente"
        : score >= 75
        ? "Muy bueno"
        : score >= 60
        ? "Bueno"
        : "En desarrollo",
    color:
      score >= 90
        ? "green"
        : score >= 75
        ? "blue"
        : score >= 60
        ? "yellow"
        : "red",
  };
}

const result = calculateOrionScore(profile);

console.log(result);

export default calculateOrionScore;