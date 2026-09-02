export default {
  expo: {
    name: "Central de Demandas",
    slug: "central-demandas-mobile",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    experiments: { baseUrl: process.env.EXPO_BASE_URL || "/" },
    web: { bundler: "metro", output: "single" }
  }
};
