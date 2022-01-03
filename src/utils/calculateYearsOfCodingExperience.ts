export const calculateYearsOfCodingExperience = (startDate: Date): number => {
  const ONE_YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 365;
  const currentDate = new Date();
  const years =
    (currentDate.getTime() - startDate.getTime()) / ONE_YEAR_IN_MILLISECONDS;
  return Math.floor(years);
};
