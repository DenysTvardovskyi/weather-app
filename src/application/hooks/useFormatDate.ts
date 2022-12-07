const useFormatDate = () => {
  const formatDate = (
    date: string | Date,
    options: Intl.DateTimeFormatOptions,
  ) => new Date(date).toLocaleString('en-US', options);

  return {
    formatDate,
  };
};

export default useFormatDate;
