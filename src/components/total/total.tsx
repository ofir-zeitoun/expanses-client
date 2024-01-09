import { useQuery } from '@tanstack/react-query';
import fetchTotalExpenses from "../../api/total-expensesApi";

function Total() {
    const { data } = useQuery({
        queryKey: ["total"],
        queryFn: fetchTotalExpenses,
      });

  return (
    <div>{`Total: ${data}`}</div>
  )
}

export default Total