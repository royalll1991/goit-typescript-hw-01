import axios from 'axios';

async function fetchData(url: string): Promise<string[]> {
  try {
    const response = await axios.get<string[]>(url);
    return response.data;
  } catch (error ) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
