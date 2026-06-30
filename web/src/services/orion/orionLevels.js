function getLevel(score) {
  if (score >= 95) {
    return {
      level: "Excelente",
      color: "green",
      icon: "🟢",
    };
  }

  if (score >= 85) {
    return {
      level: "Muy bueno",
      color: "blue",
      icon: "🔵",
    };
  }

  if (score >= 70) {
    return {
      level: "Bueno",
      color: "yellow",
      icon: "🟡",
    };
  }

  return {
    level: "En desarrollo",
    color: "red",
    icon: "🔴",
  };
}

export default getLevel;