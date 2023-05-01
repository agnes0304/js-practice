const addMovieModal = document.querySelector('#add-modal'); 
// const addMovieModal = document.body.children[1]; 위와 동일 
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelModalBtn = addMovieModal.querySelector('.btn--passive'); //addMovieModal이 있으니까 전체 document로 훑지 않아도 됨.
const addModalbtn = cancelModalBtn.nextElementSibling;
const inputs = addMovieModal.querySelectorAll('input');


// 나중에 다른 곳에서도 쓸 수 있게 만드려고
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleModal = () => {
    addMovieModal.classList.toggle('visible'); // toggle()메서드는 내가 원하는 클래스가 있으면 없애고, 없으면 추가하는 애임
    toggleBackdrop();
}

const backdropClickHandler = () =>{
    toggleModal();
}

const cancelModalHandler = () => {
    toggleModal();  
}

const addMovieHandler = () => {
    const titleVal = inputs[0].value;
    const imgUrlVal = inputs[1].value;
    const ratingVal = inputs[2].value;
    
    // trim()은 불필요한 공백을 제거해주는 것.
    if (titleVal.trim() ===''||imgUrlVal.trim()===''|| ratingVal.trim()===''||ratingVal < 1|| ratingVal > 5) {
        alert("Please enter valid value.") // 커스텀 모달을 사용해도 되긴 함. 
        return
    }

// 001 add modal 버튼 클릭 -> id=add-modal, backdrop에 .visible 추가
startAddMovieBtn.addEventListener('click', toggleModal);

// 002 Cancel, 배경 클릭 -> 모달 종료
backdrop.addEventListener('click',backdropClickHandler);
cancelModalBtn.addEventListener('click', cancelModalHandler);

// 003 user input
addModalbtn.addEventListener('click', addMovieHandler);
