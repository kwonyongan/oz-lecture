// 1. 변수 선언: const 사용 (상수)
const STAR = "*";
const MAX_STARS = 10;

const getPromptInput = () => {
    // 2. 변수 선언: let 사용
    let input;
    let isNotValid = true;
    
    // 3. 반복문: while 사용
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요 (1~10):");
        
        // 사용자가 취소(Cancel)를 눌렀을 때 루프 탈출 (break 활용)
        if (inputStr === null) {
            console.log("입력이 취소되었습니다.");
            break; 
        }

        input = Number(inputStr);
        
        // 4. 조건문과 연산자: !isNaN과 논리 연산자(||)로 1~10 범위까지 함께 검사
        if (isNaN(input) || input < 1 || input > MAX_STARS) {
            console.log("Invalid input! Enter a number between 1 and 10.");
            continue; // 에러 메시지 출력 후 다시 while문 처음으로 돌아감
        }
        
        // 검사를 무사히 통과했다면 (유효한 입력)
        isNotValid = false;
    }
    
    return input;
}

// 5. 함수 선언문: 매개변수 기본값(count = 1) 설정
function printStar(count = 1) {
    // 사용자가 취소를 눌러서 값을 넘기지 않았을 경우 실행 방지
    if (count === undefined) return;

    // 6. 변수 선언: var 사용 (요구사항 충족용)
    var result = ""; 
    
    // 7. 반복문: for 사용 (입력된 숫자만큼 별 더하기)
    for (let i = 0; i < count; i++) {
        result += STAR; // const로 선언한 "*" 가져다 쓰기
    }
    
    console.log(result);
}

const input = getPromptInput();
printStar(input);