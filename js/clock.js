var dom = document.getElementById('clock'); //获取元素
var ctx = dom.getContext('2d'); //上下文
var width = ctx.canvas.width; //上下文的宽度
var height = ctx.canvas.height; //上下文的高度
var r = width / 2;  //半径
var rem = width/ 200; //比例（因为初始样式的数据是按照200为基准的）

// 绘制圆环
function drawBackground() {
    ctx.save();
    ctx.translate(r, r); //确定坐标远点
    ctx.beginPath(); //开始画图
    ctx.lineWidth = 10 * rem; // 设置线条粗细
    ctx.arc(0, 0, r - ctx.lineWidth/2, 0, 2 * Math.PI, false); //绘制圆形
    ctx.stroke(); //绘制


    // 绘制小时数
    var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = 18* rem + 'px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hourNumbers.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30* rem);
        var y = Math.sin(rad) * (r - 30* rem);
        ctx.fillText(number, x, y);
    })


    // 绘制小时数对应的点
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18* rem);
        var y = Math.sin(rad) * (r - 18* rem);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = "#000";
            ctx.arc(x, y, 2* rem, 0, 2 * Math.PI, false);
        } else {
            ctx.fillStyle = "#ccc";
            ctx.arc(x, y, 2* rem, 0, 2 * Math.PI, false);
        }
        ctx.fill();
    }

}




// 画时针
function drawHour(hour, minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * minute;
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 6* rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10* rem);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();

}

// 画分针
function drawMinute(minute, second) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute;
    var srad = 2 * Math.PI / 60 / 60 * second;
    ctx.rotate(rad + srad);
    ctx.lineWidth = 3* rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10* rem);
    ctx.lineTo(0, -r + 30* rem);
    ctx.stroke();
    ctx.restore();
}

// 画秒针
function drawSecond(second) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#c14543';
    var rad = 2 * Math.PI / 60 * second;
    ctx.rotate(rad);
    ctx.moveTo(-2* rem, 20* rem);
    ctx.lineTo(2* rem, 20* rem);
    ctx.lineTo(1, -r + 18* rem);
    ctx.lineTo(-1, -r + 18* rem);
    ctx.fill();
    ctx.restore();
}

// 画中心点
function drawDot() {
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(0, 0, 3* rem, 2 * Math.PI, false)
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    drawBackground();
    drawHour(hour, minute);
    drawMinute(minute, second);
    drawSecond(second);
    drawDot();
    ctx.restore();
}


draw();
setInterval(draw, 1000);