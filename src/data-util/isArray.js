export default function (arr) {
	return arr && typeof arr === 'object' && 'length' in arr
}