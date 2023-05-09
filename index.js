const round = document.getElementById('round-number')
const count = document.getElementById('count-number')
const increment = document.getElementById('increment')
let r_no = 0;
let c_no = 0;
document.addEventListener('keydown', (e) => {
    console.log(e)
    if (e.code === 'Space') {
        count.innerHTML = ++c_no;
        if (c_no === 108) {
            setTimeout(() => {
                c_no = 0;
                count.innerHTML = c_no;
                round.innerHTML = ++r_no;
            }, 300);
        }
    }
})

increment.addEventListener('click', (e) => {
    count.innerHTML = ++c_no;
    if (c_no === 108) {
        setTimeout(() => {
            c_no = 0;
            count.innerHTML = c_no;
            round.innerHTML = ++r_no;
        }, 300);
    }
    increment.blur();
})


document.getElementById('reset-btn').addEventListener('click', (e) => {
    r_no = 0;
    c_no = 0;
    round.innerHTML = 0;
    count.innerHTML = 0;
    document.getElementById('reset-btn').blur();
})