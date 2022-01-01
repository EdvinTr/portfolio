export const fetchDiscordUserById = async (discordId: string) => {
  try {
    const { DISCORD_BOT_TOKEN } = process.env;
    const res = await fetch(`https://discord.com/api/v9/users/${discordId}`, {
      method: "GET",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    });
    const { username, discriminator } = await res.json();

    if (username && discriminator) {
      const possibleDiscordAccount = `${username}#${discriminator}`;
      if (/\w+#\d{4}/.test(possibleDiscordAccount)) {
        return possibleDiscordAccount;
      }
    }
    throw new Error();
  } catch {
    return null;
  }
};
