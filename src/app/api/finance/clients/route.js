export const GET = async () => {
  const data = [
    { label: "Online", value: 60, color: "orange" },
    { label: "New", value: 2, color: "green" },
    { label: "Active", value: 541, color: "red" },
    { label: "Inactive", value: 3824, color: "darkred" },
  ];

  return Response.json(data);
};
