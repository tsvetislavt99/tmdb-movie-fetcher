const SUMMARY_MAX_LENGTH = 132;
/**
 * @function formatOverview
 * @param {string} summary The summary of the article
 * @returns {string} The formatted summary
 * @description Format the summary of the article. It should be a string with a maximum of 207 characters.
 * If the summary is longer than 207 characters, it will be truncated and an ellipsis will be added. The function will cut the string at the last space before the 207th character.
 */
const formatOverview = (summary, length = SUMMARY_MAX_LENGTH) => {
  if (summary.length > length) {
    return `${summary.substring(0, summary.lastIndexOf(' ', length))}...`;
  }
  return summary;
};

export default formatOverview;
