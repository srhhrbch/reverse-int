module.exports = function reverse(n) {
	let number = Math.abs(n).toString().split('').reverse().join('');
	return number;
}