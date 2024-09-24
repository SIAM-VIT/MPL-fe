import React, { useState, useEffect } from 'react';
import { useAuthFetch } from '../Hooks/useAuthFetch';

const GetTeams = () => {
  const authFetch = useAuthFetch();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const data = await authFetch('https://mpl-be-p5xf.onrender.com/teams/getAllTeams');
        setTeams(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch teams', err);
        setError('Failed to fetch teams. Please try again later.');
        setLoading(false);
      }
    };

    fetchTeams();
  }, [authFetch]);

  if (loading) {
    return <div className="text-center py-4">Loading teams...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <div key={team.team_id} className="bg-white border rounded shadow-md p-4">
            <h2 className="text-lg font-bold">{team.team_name}</h2>
            <div className="mt-2">
              <p><strong>Team ID:</strong> {team.team_id}</p>
              <p><strong>Score:</strong> {team.score}</p>
              <p><strong>Hint Number:</strong> {team.hint_number}</p>
              <p><strong>Members:</strong> {team.team_members.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTeams;
