const count = document.querySelector('.screen__number')
console.log(count)

let offset = 0

function inc() {
	offset++
	count.innerHTML = offset
}

function reset() {
	offset = 0
	count.innerHTML = offset
}
