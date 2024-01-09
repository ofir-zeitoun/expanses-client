

const fetchTotalExpenses = (): Promise<number> =>
  fetch(`${import.meta.env.VITE_BASE_URL}/api/expanses/getTotal`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the data to inspect its structure
      return data.total as number;
    });

export default fetchTotalExpenses;
