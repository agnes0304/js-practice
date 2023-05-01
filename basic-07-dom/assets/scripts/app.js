const addMovieModal = document.querySelector('#add-modal'); 
// const addMovieModal = document.body.children[1]; 위와 동일 
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelModalBtn = addMovieModal.querySelector('.btn--passive'); //addMovieModal이 있으니까 전체 document로 훑지 않아도 됨.
const addModalbtn = cancelModalBtn.nextElementSibling;
const inputs = addMovieModal.querySelectorAll('input');
const entrytextSection = document.getElementById('entry-text');
const deleteModal = document.getElementById('delete-modal'); 

const movies = [];

const updateUI = () => {
    if (movies.length === 0){
        entrytextSection.style.display = 'block';
    } else {
        entrytextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies){
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
}

const cancelMovieDeletionModal = () => {
    toggleBackdrop();
    deleteModal.classList.remove('visible');
}

const deleteMovieHandler = (movieId) => {
    // 008 are you sure에서 yes를 클릭하면 삭제할 것.
    deleteModal.classList.add('visible'); 
    toggleBackdrop();


    // deleteMovie(movieId);
};

// 006 화면에 영화 항목 렌더링
const renderNewMovie = (id, title, imageUrl, rating) => {
    const newMovieEl = document.createElement('li');
    newMovieEl.className = 'movie-element'; // CSS파일에 가면 있음. 
    // html 내용이 바뀌는게 아니기에 하드코딩함
    newMovieEl.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    
    // 007 영화 항목 삭제
    newMovieEl.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieEl);
};

// 나중에 다른 곳에서도 쓸 수 있게 만드려고
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
    toggleBackdrop();
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible'); // toggle()메서드는 내가 원하는 클래스가 있으면 없애고, 없으면 추가하는 애임
    toggleBackdrop();
};

// 005 인풋 치워주기
const clearInput = () => {
    for (const input of inputs) {
        input.value = '';
    }
};

const cancelModalHandler = () => {
    closeMovieModal();  
    clearInput();
};

const addMovieHandler = () => {
    const titleVal = inputs[0].value;
    const imgUrlVal = inputs[1].value;
    const ratingVal = inputs[2].value;
    
    if (
        titleVal.trim() ==='' || 
        imgUrlVal.trim() ==='' ||
        ratingVal.trim() ==='' || 
        +ratingVal < 1 || 
        +ratingVal > 5
        ) {
        alert("Please enter valid value.");
        return;
    }

    // 004 영화 생성 및 입력
    const newMovie = {
        id: Math.random().toString(), // 원래는 이렇게 하면 안돼. 랜덤한 수를 생성한다고 해서 중복이 안된다는 법도 없고, 일단 고유한 값을 가지게 하는 방법은 아님. 
        title: titleVal,
        image: imgUrlVal,
        rating: ratingVal
    };

    movies.push(newMovie);
    closeMovieModal();
    clearInput();
    renderNewMovie(
        newMovie.id, 
        newMovie.title, 
        newMovie.image, 
        newMovie.rating
        );
    updateUI();
}

const backdropClickHandler = () =>{
    closeMovieModal();
    cancelMovieDeletionModal();
    toggleBackdrop();
};

// 001 add modal 버튼 클릭 -> id=add-modal, backdrop에 .visible 추가
startAddMovieBtn.addEventListener('click', showMovieModal);

// 002 Cancel, 배경 클릭 -> 모달 종료
backdrop.addEventListener('click',backdropClickHandler);
cancelModalBtn.addEventListener('click', cancelModalHandler);

// 003 user input
addModalbtn.addEventListener('click', addMovieHandler);