export default function (arr, index, targetIndex) {
	var call = arr[index];
	arr.splice(index, 1);
	arr.splice(targetIndex, 0, call);
	return arr;
}