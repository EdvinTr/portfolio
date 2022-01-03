export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  banner: null;
  banner_color: null;
  accent_color: null;
}

export const fetchDiscordUserById = async (
  discordUserId: string
): Promise<DiscordUser | null> => {
  try {
    const { DISCORD_BOT_TOKEN } = process.env;
    const res = await fetch(
      `https://discord.com/api/v9/users/${discordUserId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );
    const user = await res.json();
    if (!user) {
      throw new Error();
    }
    return user;
  } catch {
    return null;
  }
};

export const extractDiscordUsername = (
  discordUser: DiscordUser
): string | null => {
  const { username, discriminator } = discordUser;
  if (!username || !discriminator) {
    return null;
  }
  return `${username}#${discriminator}`;
};
