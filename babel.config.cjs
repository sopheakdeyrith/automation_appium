module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
          modules: "auto", // Babel should handle ES modules
        },
      ],
    ],
  };