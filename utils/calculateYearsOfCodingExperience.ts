export const calculateYearsOfCodingExperience = (startDate: Date): number => {
  const MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
  const years =
    (new Date().getTime() - startDate.getTime()) / MILLISECONDS_PER_YEAR;
  return Math.floor(years);
};
