$(() => {
  graph.width = window.innerWidth;
  graph.height = window.innerHeight;
  const c = document.getElementById("graph");
  const ctx = c.getContext("2d");

  graphHeight = 500
  graphWidth = 700

  aquaBlue = 'aqua'
  secondaryBlue = 'rgb(0, 89, 255)'

  arcGraphRadii = [150, 175]

  let fill = false

  function displayAxis() {
    ctx.clearRect(0, 0, graphWidth, graphHeight)
    ctx.strokeStyle = secondaryBlue
    ctx.beginPath()
    ctx.moveTo(18, 18)
    ctx.lineTo(18, graphHeight - 18)
    ctx.lineTo(graphWidth - 20, graphHeight - 18)
    ctx.lineWidth = 3
    ctx.stroke()
  }

  function displayAxisSexy() {
    ctx.shadowBlur = 3;
    ctx.shadowColor = secondaryBlue;
    ctx.clearRect(0, 0, graphWidth, graphHeight)
    ctx.strokeStyle = secondaryBlue
    ctx.beginPath()
    ctx.moveTo(10, graphHeight - 10)
    ctx.lineTo(graphWidth - 10, graphHeight - 10)
    ctx.lineWidth = 10
    ctx.stroke()

    ctx.beginPath();
    ctx.strokeStyle = secondaryBlue
    ctx.lineWidth = 1
    ctx.arc(10, graphHeight - 10, 4.5, 0, 2 * Math.PI);
    ctx.arc(graphWidth - 10, graphHeight - 10, 4.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = secondaryBlue
    ctx.fill()

  }

  /* $(document).on('keydown', e => {
    console.log(this)
    while($(this.document.activeElement).height() > 17) $(this.document.activeElement).width($(this.document.activeElement).width()+1)
    if($(this.document.activeElement).height() > 17) $(this.document.activeElement).width($(this.document.activeElement).width()+5)
    console.log($(this.document.activeElement).height())
  })
  $('span').css('width', `${$('#plotBox').width()}`) */



  function plotPoints(val, /*  val2, */ limit) {


    ctx.beginPath()
    if (fill) ctx.moveTo(20, graphHeight - 20)

    /* console.log(val.length) */
    for (let i = 0; i < val.length; i++) {
      /* console.log([
        [i], val[i], val[i] / limit, val[i] / limit * 100
      ]) */
      let y = val[i] / limit * 100
      let x = (graphWidth - 42) / (val.length - 1) * i
      if (!fill && i == 0) ctx.moveTo(20 + x, (graphHeight - 20) - ((graphHeight - 40) * y / 100))
      ctx.lineTo(20 + x, (graphHeight - 20) - ((graphHeight - 40) * y / 100))
      /* console.log([y, x]) */

    }
    if (fill) ctx.lineTo(graphWidth - 20, graphHeight - 20)
    ctx.strokeStyle = aquaBlue
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.fillStyle = '#00aeff'
    if (fill) ctx.fill()
  }


  function plotPointsSexy(val, /*  val2, */ limit) {

    ctx.shadowBlur = 3;
    ctx.shadowColor = aquaBlue;

    console.log('jajsdhn')

    for (let i = 0; i < val.length; i++) {
      ctx.lineWidth = 1
      ctx.fillStyle = aquaBlue

      let y = val[i] / limit * 100
      let x = (graphWidth - 42) / (val.length - 1) * i

      ctx.beginPath();
      ctx.strokeStyle = aquaBlue
      ctx.arc(20 + x, (graphHeight - 30) - ((graphHeight - 50) * y / 100), 5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill()

      ctx.beginPath();
      ctx.strokeStyle = aquaBlue
      ctx.arc(20 + x, (graphHeight - 30) - ((graphHeight - 50) * y / 100), 10, 0, 2 * Math.PI);
      ctx.stroke();
    }


    ctx.beginPath()
    /* if (fill) ctx.moveTo(20, graphHeight - 20) */

    /* console.log(val.length) */
    for (let i = 0; i < val.length; i++) {
      /* console.log([
        [i], val[i], val[i] / limit, val[i] / limit * 100
      ]) */
      let y = val[i] / limit * 100
      let x = (graphWidth - 42) / (val.length - 1) * i
      if (!fill && i == 0) ctx.moveTo(20 + x, (graphHeight - 30) - ((graphHeight - 50) * y / 100))
      ctx.lineTo(20 + x, (graphHeight - 30) - ((graphHeight - 50) * y / 100))
      /* console.log([y, x]) */

    }
    ctx.strokeStyle = aquaBlue
    ctx.lineWidth = 3
    ctx.stroke()
  }

  /*   console.log(`${betcount}, ${answer}, ${bet}, ${bal}, ${wins}, ${losses}, ${wlr}, ${highest}`)
    plotPoints(bals, highest)
    displayAxis() */


  function arcGraph(val) {
    if (val[0] < 1000) {
      ctx.shadowBlur = 3;
      ctx.shadowColor = aquaBlue;
      ctx.clearRect(0, 550, 700, 470)
      ctx.beginPath();
      ctx.strokeStyle = aquaBlue
      ctx.lineWidth = 5
      ctx.arc(350, 735, arcGraphRadii[0], 2 * Math.PI - 2 * Math.PI / 4 - ((2 * Math.PI / 1000) * val[0]), 2 * Math.PI / 4 * 3);
      ctx.stroke();
      ctx.fillStyle = aquaBlue
      //ctx.fill()

      ctx.font = "30px Consolas";
      let percentage = []
      console.log([val[0], val[0].toString().length])
      for (let i = 0; i < 4 - val[0].toString().length; i++) percentage[i] = '0'
      percentage = percentage.join('') + val[0].toString().replace(',', '')
      ctx.fillText(`${percentage[0]}${percentage[1]}${percentage[2]}.${percentage[3]}%`, 300, 715);

    }

    if (val[1] < 1000) {
      ctx.shadowBlur = 3;
      ctx.shadowColor = secondaryBlue;
      ctx.beginPath();
      ctx.strokeStyle = secondaryBlue
      ctx.lineWidth = 5
      ctx.arc(350, 735, arcGraphRadii[1], 2 * Math.PI - 2 * Math.PI / 4 - ((2 * Math.PI / 1000) * val[1]), 2 * Math.PI / 4 * 3);
      ctx.stroke();
      ctx.fillStyle = secondaryBlue
      //ctx.fill()

      let percentage = []
      console.log([val[1], val[1].toString().length])
      for (let i = 0; i < 4 - val[1].toString().length; i++) percentage[i] = '0'
      percentage = percentage.join('') + val[1].toString().replace(',', '')
      ctx.fillText(`${percentage[0]}${percentage[1]}${percentage[2]}.${percentage[3]}%`, 300, 755);
    }

  }


  $('#plotBox').on('keydown', event => {
    if (event.keyCode == '13') {

    }
  })

  function splitString(val) {

  }



  let pointies = []

/*   setTimeout(() => {
    setInterval(() => {
      pointies.push(Math.floor(Math.random() * 101))
      displayAxisSexy()
      plotPointsSexy(pointies, 100)

    }, 100);

    let baba = [0, 1000]
    setInterval(() => {
      arcGraph(baba)
      baba[0]++
      baba[1]--
      if (baba[0] > 1000) baba[0] = 0
      if (baba[1] < 0) baba[1] = 1000
    }, 10);

  }, 100); */

  

  function singraf2() {
    let a = []
    for (let i = 0; i < 2 * Math.PI; i += 0.1) a.push((Math.sin(i) + 1) / 2)
    return a
  }

  let b = 0
  let a = []
  let waa = [0, 1000]

  function singraf() {
    b+=0.1
    a.push((Math.sin(b) + 1) / 2)
    /* console.log([a,b]) */
    return a
  }

  function shorten(v) {
    if(v.length < 10) return v

    let shortenVal = []
    
    for(let i = 10; i >= 1; i--) {
      shortenVal.push(v[v.length-1-i])
      /* console.log(shortenVal) */
    }

    return shortenVal
  }


 /*  console.log(singraf()) */

  setInterval(() => {

    /* console.log('haha '+b) */
    
    displayAxisSexy()
    /* a = shorten(singraf()) */
    plotPointsSexy(shorten(singraf()), 1)
    /* console.log(shorten(singraf())) */
    if(waa[0] >= 1000) waa[0] = 0
    else waa[0]++
    if(waa[1] <= 0) waa[1] = 1000
    else waa[1]--
    arcGraph(waa)
    
  }, 20);

  /* ctx.beginPath();
  ctx.strokeStyle = 'rgb(0, 153, 255)'
  ctx.lineWidth = 1
  ctx.arc(30, 56, 30, 0, 2 * Math.PI);
  ctx.stroke(); */




})