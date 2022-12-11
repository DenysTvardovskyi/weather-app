const formatDate = (date: string | Date, options: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleString('en-US', options);

export default formatDate;
