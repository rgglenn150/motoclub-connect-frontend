import { useEffect, useState } from "react";
import { fetchClubs } from "../services/clubService";

type Club = {
  clubName: string;
  description: string;
};

export default function HomePage() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch clubs from the backend API
  useEffect(() => {
    const getClubs = async () => {
      try {
        const clubsData = await fetchClubs();
        setClubs(clubsData);
      } catch (err) {
        setError("Failed to load clubs.");
      }
    };

    getClubs();
  }, []);

  return (
    <div>
      <h1>Welcome to MotoClub Connect</h1>
      <section>
        {error ? (
          <p>{error}</p>
        ) : (
          clubs.map((club) => (
            <div key={club.clubName}>
              <h2>{club.clubName}</h2>
              <p>{club.description}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
