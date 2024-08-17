module.exports = {
  apps: [
    {
      name: 'elite',
      script: 'dist/main.js',
      wait_ready: true,
      kill_timeout: 300000,
    },
  ],
};
