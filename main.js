//기본 로직
//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호 < 유저번호 Down!메세지
//랜덤번호 > 유저번호 Up!메세지
//Reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 종료된다.(더 이상 추측 불가. 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 줄이지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 줄이지 않는다.

let computerNum = 0;
const $playButton = document.querySelector("#play-button");
const $userInput = document.querySelector("#user-Input");
$playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = parseInt(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  const userValue = $userInput.value;
  if (userValue < computerNum) {
    console.log("UP!!");
  } else if (userValue > computerNum) {
    console.log("DOWN!!");
  } else {
    console.log("정답입니다!!!");
  }
}

pickRandomNum();