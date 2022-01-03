declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly PUBLIC_URL: string;
      readonly DISCORD_BOT_TOKEN: string;
      readonly DISCORD_USER_ID: string;
      readonly GITHUB_USER_ID: string;
      readonly NEXT_PUBLIC_EMAILJS_USER_ID: string;
      readonly NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
      readonly NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    }
  }
}

export {};
