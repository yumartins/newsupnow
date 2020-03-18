/**
 * Make the string a valid date
 */
const getDate = (str, lang) => {
  const date = new Date(str);

  return date.toLocaleString(lang, {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export default getDate;
