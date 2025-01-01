import { ActivityCalendar } from "react-activity-calendar";
import { contributions } from "./lib/gql/queries/contribution";
import { useEffect, useState } from "react";

function User({ username }: { username: string }) {
  const [data, setData] = useState([
    { date: "2024-06-01", count: 1, level: 1 },
  ]);
  useEffect(() => {
    contributions(username).then((data) => setData(data));
  });
  return (
    <>
      {username}
      <ActivityCalendar data={data} />
    </>
  );
}
export default User;
