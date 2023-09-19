export function addCommas(number) {
  if (number === null) return;
  if (number === undefined) return;
  let numberStr = number.toString();
  if (numberStr.length <= 3) {
    return numberStr;
  } else {
    return addCommas(numberStr.slice(0, -3)) + "," + numberStr.slice(-3);
  }
}

export function roundToNearestWholeNumber(decimal) {
  return Math.round(decimal);
}

export function formatTimeString(dateString) {
  // Get the local time zone offset in minutes

  const date = new Date(dateString);

  // Use toLocaleTimeString to format the time in the user's local timezone
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedTime;
}

export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const formattedDate = `${day.toString().padStart(2, "0")}/${(month + 1)
    .toString()
    .padStart(2, "0")}/${year}`;

  return formattedDate;
}

// // Example usage:
// var updatedTime = addTime('minutes', 10); // Add 10 minutes

// console.log(updatedTime);

export function getTimeAgo(dateString) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);
  const timeDifference = currentDate - inputDate;

  // Calculate seconds, minutes, and hours
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  // Check the conditions and return the appropriate string
  if (timeDifference < 1000) {
    return "just now";
  } else if (seconds < 60) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (inputDate.getDate() === currentDate.getDate() - 1) {
    return "yesterday";
  } else {
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    const day = inputDate.getDate();
    return `${day.toString().padStart(2, "0")}/${(month + 1)
      .toString()
      .padStart(2, "0")}/${year}`;
  }
}
