export const GET = async () => {
  const data = {
    purchases: { value: 0, amount: "0.00 INR" },
    redemptions: { value: 0, amount: "0.00 INR" },
    rejectedTransactions: { value: 0, amount: "0.00 INR" },
    sipRejections: { value: 0, amount: "0.00 INR" },
    newSip: { value: 0, amount: "0.00 INR" },
  };

  return Response.json(data);
};
