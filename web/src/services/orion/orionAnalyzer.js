import calculateOrionScore from "./orionScore";
import getRecommendations from "./recommendations";
import getWelcomeMessage from "./orionMessages";
import getLevel from "./orionLevels";

function analyze(profile) {
  const scoreData = calculateOrionScore(profile);

  return {
    ...scoreData,
    level: getLevel(scoreData.score),
    welcome: getWelcomeMessage(profile),
    recommendations: getRecommendations(profile),
  };
}

export default analyze;