var dom = document.getElementById('clock'); //获取元素
var ctx = dom.getContext('2d'); //上下文
var width = ctx.canvas.width; //上下文的宽度
var height = ctx.canvas.height; //上下文的高度
var r = width / 2;  //半径

// 绘制圆环
function drawBackground() {
    ctx.translate(r, r); //确定坐标远点
    ctx.beginPath(); //开始画图
    ctx.lineWidth = 10; // 设置线条粗细
    ctx.arc(0, 0, r - 5, 0, 2 * Math.PI, false); //绘制圆形
    ctx.stroke(); //绘制


    var hourNumbers = [3, 4, 5, 6, 7, 8, 9,10, 11, 12, 1, 2];
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hourNumbers.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30);
        var y = Math.sin(rad) * (r - 30);
        ctx.fillText(number, x, y);
        
    })

    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18);
        var y = Math.sin(rad) * (r - 18);
        ctx.beginPath(); //开始画图
        if(i % 5 === 0){
            ctx.fillStyle = "#000";
            ctx.arc(x, y, 2, 0, 2 * Math.PI, false); //绘制圆形
        }else{
            ctx.fillStyle = "#ccc";
            ctx.arc(x, y, 2, 0, 2 * Math.PI, false); //绘制圆形
        }
        ctx.fill();
    }

}

function drawHour(hour){
    ctx.beginPath(); //开始画图
    
}

drawBackground();