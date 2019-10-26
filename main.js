var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

var dots = [];

function getDistance(x1,y1,x2,y2)
{
  return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

let n = 20;
for(let i=0;i<39;i++)
{
  for(let j=0;j<n;j++)
  {
    dots.push(new Dot(canvas.width/2+(j-n/2)*20+10,canvas.height/2+(i-39/2)*18+9));
  }
  if(i<19)n++;
  else n--;
}

var maxDistance = getDistance(dots[0].x,dots[0].y,canvas.width/2,canvas.height/2)+5;

var up = 0;
var counter = 0;
var counting = 0;

var mouseX;
var mouseY;

window.addEventListener("mousemove",e=>
{
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener("mousedown",e=>
{
  if(up==0)
  {
    counter=0;
    counting = true;
  }
});

window.addEventListener("mouseup",e=>
{
  if(up==0)
  {
    wave.waving = true;
    wave.size = 0;
    wave.x = e.clientX;
    wave.y = e.clientY;
    wave.dur = 0.9+counter/1000;
    wave.power = 50;
    wave.id++;
  }
  counter = 0;
  counting = false;
});

var wave =
{
  waving: false,
  size: 0,
  x: 0,
  y: 0,
  power: 0,
  id: 0,
  update: function()
  {
    if(this.waving)
    {
      this.size+=5;
    }
  }
}

function animate()
{
  if(counting)counter++;
  if(counter>90)counter=90;
  c.clearRect(0,0,canvas.width,canvas.height)
  wave.update();
  for(let i=0;i<dots.length;i++)
  {
    dots[i].update();
    dots[i].draw();
  }
  c.fillStyle="#666666";
  c.fillRect(0,0,20,canvas.height);
  c.fillStyle="#0066FF";
  c.fillRect(0,canvas.height-counter/90*canvas.height,20,counter/90*canvas.height)
}
setInterval(animate,10);
