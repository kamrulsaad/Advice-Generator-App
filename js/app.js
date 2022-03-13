const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => generateAdvice(data.slip))
}

 const generateAdvice = data => {
     document.getElementById('advice-number').innerText = data?.id;
     document.getElementById('quote').innerText = `"${data.advice}"`;
 }

 fetchAdvice();