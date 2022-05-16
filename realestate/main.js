function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
        if (currentNumber >= finalNumber) {
        clearInterval(interval)
        } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
            currentNumber = finalNumber
            clearInterval(interval)
        } else {
            currentNumber += inc
        }
        callback(currentNumber)
        }
    }
    }

    document.addEventListener('DOMContentLoaded', function () {
    animateNumber(2010, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById("year").innerText = formattedNumber
    })
    
    animateNumber(206, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('pro').innerText = formattedNumber
    })
    
    animateNumber(807, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('house').innerText = formattedNumber
    })
    animateNumber(26, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('prize').innerText = formattedNumber
    })
    })