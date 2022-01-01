namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    DISCORD_BOT_TOKEN: string;
    DISCORD_USER_ID: string;
    GITHUB_USER_ID: string;
    CONTACT_EMAIL_ADDRESS: string;
    NEXT_PUBLIC_EMAILJS_USER_ID: string;
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
  }
}
