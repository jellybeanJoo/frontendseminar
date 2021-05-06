function whatTime() {
    function addZero(num) {
        return (num<10 ? '0'+num : ''+num)
    }
    const today=new Date()
    const dayList=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    const hh=addZero(today.getHours())
    const mm=addZero(today.getMinutes())
    const ss=addZero(today.getSeconds())

    const yy=addZero(today.getFullYear())
    const MM=addZero(today.getMonth()+1)
    const DD=addZero(today.getDate())
    const yo=dayList[today.getDay()].toUpperCase()

    document.getElementById('hours').innerText=hh
    document.getElementById('minutes').innerText=mm
    document.getElementById('seconds').innerText=ss

    document.getElementById('year').innerText=yy
    document.getElementById('month').innerText=MM
    document.getElementById('date').innerText=DD
    document.getElementById('day').innerText=yo
}
setInterval(whatTime,1000)