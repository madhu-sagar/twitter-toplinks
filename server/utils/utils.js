// const leadZeros = (val, positions = 2) => {
//   const s = `0${val}`;
//   return s.substr(s.length - positions);
// };

// const formatTimestampToString = (d, includeMilliseconds = false) => {
//   const year = d.getFullYear();
//   const month = d.getMonth() + 1;
//   const date = d.getDate();
//   const hours = d.getHours();
//   const mins = d.getMinutes();
//   const seconds = d.getSeconds();
//   const milliseconds = d.getMilliseconds();
//   let dateStr = `${year}-${leadZeros(month)}-${leadZeros(date)} ${leadZeros(hours)}:${leadZeros(mins)}:${leadZeros(seconds)}`;
//   if (includeMilliseconds) {
//     dateStr = `${dateStr}.${leadZeros(milliseconds, 3)}`;
//   }
//   return dateStr;
// };

// module.exports = { leadZeros, formatTimestampToString };
