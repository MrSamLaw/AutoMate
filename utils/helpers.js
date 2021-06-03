module.exports = {
    format_date: (date) => {
      // Format date as to locale
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
}; 