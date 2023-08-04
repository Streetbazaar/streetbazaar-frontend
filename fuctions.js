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
    const date = new Date(dateString);
  
    // Get the local time zone offset in minutes
    const offset = date.getTimezoneOffset();
  
    // Adjust the date by adding the offset in minutes
    date.setMinutes(date.getMinutes() + offset);
    
    const hour = date.getHours();
    const minute = date.getMinutes();
  
  
    const hour12 = (hour > 12) ? hour - 12 : hour;
    const ampm = (hour >= 12) ? 'PM' : 'AM';
  
    const formattedTime = `${hour12.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${ampm}`;
  
  
    return formattedTime;
  }
  
  export function formatDateString(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
  
    const formattedDate = `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
   
  
  
  
    return formattedDate;
  }
  
  export function addTime(timeUnit, amount) {
    var parsedAmount = isNaN(amount) ? parseFloat(amount) : amount;
    var currentTime = new Date();
    var newTime = new Date(currentTime);
  
    if (timeUnit === 'minutes') {
      newTime.setMinutes(newTime.getMinutes() + parsedAmount);
    } else if (timeUnit === 'hours') {
      newTime.setHours(newTime.getHours() + parsedAmount);
    } else if (timeUnit === 'seconds') {
      newTime.setSeconds(newTime.getSeconds() + parsedAmount);
    }
  
    var hours = newTime.getHours();
    var minutes = newTime.getMinutes();
  
    // Format the time
    var formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    
    return formattedTime;
  }
  
  // // Example usage:
  // var updatedTime = addTime('minutes', 10); // Add 10 minutes
  
  // console.log(updatedTime);
  
  export function getRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
  
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return 'yesterday';
    } else if (hours > 1) {
      return `${hours} hours ago`;
    } else if (hours === 1) {
      return 'an hour ago';
    } else if (minutes > 1) {
      return `${minutes} minutes ago`;
    } else if (minutes === 1) {
      return 'a minute ago';
    } else {
      return 'just now';
    }
  }