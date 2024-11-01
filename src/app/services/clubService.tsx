import apiClient from './apiClient';

type Club = {
  clubName: string;
  description: string;
};

// Function to get a list of clubs
export const fetchClubs = async (): Promise<Club[]> => {
  try {
    const response = await apiClient.get('/clubs');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch clubs.');
  }
};