namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    DISCORD_BOT_TOKEN: string;
    DISCORD_USER_ID: string;
    GITHUB_USER_ID: string;
  }
}
