// 1. 변수 선언: const, let, var 각각 활용
const BONUS_SCORE = 5;      // 보너스 점수 (고정값)
let input = prompt("시험 점수를 입력하세요 (0~100):");
var score = Number(input);  // 입력받은 문자열을 숫자로 변환

// 2. 최종 점수 계산 (이항 산술 및 복합 대입 연산자 활용)
// 입력 점수에 보너스 5점을 더함
score += BONUS_SCORE; 

// 3. 등급 부여 (if, else if, else 및 논리 연산자 활용)
var grade;
if (score >= 100) {
    grade = "S";
} else if (score >= 90 && score < 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else {
    grade = "F";
}

// 4. 합격/불합격 여부 판단 (삼항 연산자 및 연산자 우선순위 활용)
// 60점 이상이면 Pass, 아니면 Fail
let status = (score >= 60) ? "Pass" : "Fail";

// 5. 등급별 메시지 출력 (switch 활용)
let message;
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    case "F":
        message = "Please try harder!";
        break;
    default:
        message = "알 수 없는 등급입니다.";
}

// 6. 콘솔 최종 출력
console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);