import { gqlClient } from "../gqlClient";

export const query = `query ($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
          }
        }
      }
    }
  }
}`;

const Level: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function contributions(username: string) {
  const response: any = await gqlClient(query, {
    username,
  });
  return response.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((o: any) => o.contributionDays)
    .map((o: any) => {
      return {
        date: o.date,
        count: o.contributionCount,
        level: Level[o.contributionLevel],
      };
    });
}
