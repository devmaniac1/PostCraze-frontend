const getTimeDifferenceString = (timestamp) => {
  const now = new Date();
  const then = new Date(timestamp);
  const diffInSeconds = Math.floor((now - then) / 1000);

  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const quotient = Math.floor(diffInSeconds / unit.seconds);
    if (quotient >= 1) {
      return `${quotient} ${unit.name}${quotient > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
};

export { getTimeDifferenceString };
