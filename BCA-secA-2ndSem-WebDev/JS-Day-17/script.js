localStorage.setItem('username', 'JohnDoe');
sessionStorage.setItem('theme', 'dark');

// Getting items
const username = localStorage.getItem('username');
const theme = sessionStorage.getItem('theme');

console.log('Username:', username); // Output: JohnDoe
console.log('Theme:', theme); 


localStorage.removeItem('username');