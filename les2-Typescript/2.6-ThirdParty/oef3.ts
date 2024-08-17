import moment from 'moment';
import 'moment/locale/fr';  // Import Dutch locale

// Set the locale to Dutch
moment.locale('fr');

// 1. Calculate relative time from a specific date
const eventDate = moment('2023-01-01');
console.log(`Het evenement was ${eventDate.fromNow()}`); // "Het evenement was 8 maanden geleden"

// 2. Calculate the time until a future date
const futureDate = moment().add(10, 'days');
console.log(`Het evenement vindt plaats ${futureDate.fromNow()}`); // "Het evenement vindt plaats over 10 dagen"

// 3. Displaying the current date and time in a specific format
const now = moment();
console.log(`Huidige datum en tijd: ${now.format('dddd, D MMMM YYYY, HH:mm:ss')}`);
// Example output: "Huidige datum en tijd: vrijdag, 16 augustus 2024, 14:35:07"

// 4. Adding/subtracting time
const threeMonthsLater = moment().add(3, 'months');
console.log(`Drie maanden vanaf nu: ${threeMonthsLater.format('D MMMM YYYY')}`);
// Example output: "Drie maanden vanaf nu: 16 november 2024"

const fiveDaysAgo = moment().subtract(5, 'days');
console.log(`Vijf dagen geleden: ${fiveDaysAgo.format('D MMMM YYYY')}`);
// Example output: "Vijf dagen geleden: 11 augustus 2024"

// 5. Locale-specific formatting
console.log(`Datum in Nederlandstalige notatie: ${now.format('LL')}`);
// Example output: "Datum in Nederlandstalige notatie: 16 augustus 2024"
