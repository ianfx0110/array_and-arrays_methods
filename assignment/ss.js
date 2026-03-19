// Config merger
function buildConfig(userConfig) {
  const defaults = { theme: "light", retries: 3 };

  // Use user values or defaults
  const config = {
    theme: userConfig.theme ?? defaults.theme,
    retries: userConfig.retries ?? defaults.retries
  };

  