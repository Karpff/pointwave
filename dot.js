class Dot
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.amplitude = 0;
    this.cycle = 0;
    this.color = "";
    this.waved = 0;
    this.fade = 0.9;
  }

  update()
  {
    if(this.amplitude>0)
    {
      this.cycle+=5;
      this.amplitude*=this.fade;
    }
    if(this.amplitude<1&&this.amplitude!=0)
    {
      this.cycle = 0;
      this.amplitude = 0;
      up--;
      if(up==0)wave.power=0;
    }
    if(wave.waving&&this.waved<wave.id&&this.amplitude==0&&wave.size>getDistance(this.x,this.y,wave.x,wave.y))
    {
      up++;
      this.cycle = 0;
      this.amplitude = wave.power;
      wave.power-=0.04;
      this.waved++;
      this.fade = wave.dur;
    }
  }

  draw()
  {
    c.beginPath();
    if(this.color=="")c.fillStyle = "rgba(0,0,"+this.amplitude*5+",1)";
    else c.fillStyle = this.color;
    c.arc(this.x,this.y+Math.sin(this.cycle/180*Math.PI)*this.amplitude,4,0,Math.PI*2);
    c.fill();
  }
}
