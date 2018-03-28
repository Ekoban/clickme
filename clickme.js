const counter = document.getElementById('counter');

let count = 0;
counter.value = count;

add = (i) => {
	count += i;
	counter.value = count;
};

reset = () => {
	count = 0;
	counter.value=count;
}