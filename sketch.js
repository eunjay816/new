//let width=windowWidth, height=windowHeight;//1
//let star;//2
let stars=[];//8 이제 배열로 여러개
let factor=100;
let speedSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);//1
  //star = createVector(200,200, 10);//2 vector(x,y,z)
 // star = createVector(800,200, 10);//7 우측에서 나오게 만들어보기
 /* star = createVector(
    random(-width, width),
    random(-height, height),
    10
  );//7이제 랜덤으로 벡터 만들어보기*/
  speedSlider=createSlider(0, 20,2);//0~20범위의 0을 시작값으로 하는 슬라이더 생성
  for(let i=0; i<500; i++){
    stars[i]=createVector(
      random(-width*factor, width*factor),
      random(-height*factor, height*factor),
      random(10, 400)//11조금 더 한쪽으로 모으기, 13 factor변수만큼 곱해줘
    );
    stars[i].pz = stars[i].z;
  }//9 50개의 점 맨들기
}

function draw() {
  background(0);
  fill(255, 250, 140);
  translate(width/2, height/2);//5 원점을 가운데로 오게
  //let x = star.x/star.z; //4 영점으로 접근하게
  //let y = star.y/star.z; //4
  for(let star of stars){
    let x=star.x/star.z;
    let y=star.y/star.z;
    let px=star.x/star.pz;
    let py=star.y/star.pz;
    //let d=15;
    let d=map(star.z, 0, 400, 10, 1);//12점크기 조정
    circle(x,y,d);
    stroke(255, 255, 150);
    line(x,y,px,py);//line은 noStrokeㅇ때문에 ㄴㄴ
    star.pz = star.z;
    star.z -=speedSlider.value();
    if (star.z<1){
      star.x=random(-width*factor, width*factor);
      star.y=random(-width*factor, width*factor);
      star.z=400;
      star.pz=400;
    }//11 일정수준 이상인 경우 리셋시킴(다시 점이 돌아오도록 만드는 것임)
  }//10
  //let d=15;//3
  //let d=15;//map(star.z, 0, 400, 1, 10);//6 원이 점점 커지게
  //circle(x, y, d);//3
  //star.z +=1;  //3진행이 될수록 빠르게, 진행속도감
}
