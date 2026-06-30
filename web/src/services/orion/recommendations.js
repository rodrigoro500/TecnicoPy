function getRecommendations(profile) {
  const recommendations = [];

  if (profile.reviews < 150) {
    recommendations.push({
      priority: 1,
      title: "Conseguí más opiniones",
      description:
        "Las opiniones generan mucha confianza y mejoran tu posicionamiento.",
    });
  }

  if (profile.responseMinutes > 10) {
    recommendations.push({
      priority: 2,
      title: "Respondé más rápido",
      description:
        "Responder antes de 10 minutos aumenta las posibilidades de conseguir clientes.",
    });
  }

  if (profile.jobs < 500) {
    recommendations.push({
      priority: 3,
      title: "Publicá nuevos trabajos",
      description:
        "Las fotografías recientes aumentan la confianza de los clientes.",
    });
  }

  return recommendations;
}

export default getRecommendations;