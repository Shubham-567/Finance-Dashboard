export const GET = async () => {
  const data = {
    aum: {
      value: "12.19 Cr",
      mom: "+0.77%",
      trend: "up",
    },
    sip: {
      value: "1.39 Lakh",
      mom: "+0%",
      trend: "up",
    },
  };

  return Response.json(data);
};
