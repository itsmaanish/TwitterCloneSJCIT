// DOM Elements

const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');

// ***********************************************

const middleContent = document.querySelector('.middle-content');

// Connect login page to feed page

const btnTop = document.querySelector('.btn-top');

const newsFeedPage = document.querySelector('.feed-page');

const loginModel = document.querySelector('.login-model');   // btnTop ke else wale part me

const modelX = document.querySelector('.login-model');

const loginFormBtn = document.querySelector('.login-form-btn');

const postBtn = document.querySelector('.post-btn');

const modalWrapper = document.querySelector('.modal-wrapper');

const modal = document.querySelector('.modal');

const postModalX = document.querySelector('.modal-header i');

const modalPostBtn = document.querySelector('.modal-header button');

const modalFooterPlus = document.querySelector('.modal-footer span');

const modalInput = document.querySelector('.modal-input');

//sidebar
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');

//dark mode
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

// ****************************************************
// ****************************************************

// Main Page

const goToLoginPage = () => {
// If you want to hide the page then you can just take out the main page and loginPage b/w the curly braces
mainPage.style.display = 'none';
loginPage.style.display = 'grid';
};

/*mainPage.style.display = 'none';
loginPage.style.display = 'grid'; */

middleContent.addEventListener('click', e =>
 {
    if(e.target.classList[1] === 'main-btn')
    {
        goToLoginPage();
    }
    // console.log(e.target.classList);
});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if(inputUserInfo.value !== '' && inputPassword.value !== '')
    {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } 
    else{
        goToLoginPage();
        loginModel.style.display = 'block';
    }
});

// Login Page

modelX.addEventListener('click', () =>{
    loginModel.style.display = 'none';
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if(loginUserInfo.value !== '' && loginPassword.value !== ''){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }
    else{
        loginModel.style.display = 'block';
    }
});
// Post modal
postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};

postModalX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5);
    }
});

modalInput.addEventListener('keypress', e => {
    if(e.target.value !== ''){
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', e => {
    if(e.target.value === ''){
        changeOpacity(0.5);
    }
});

// Sidebar

user.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', () =>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

// dark mode

const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lighTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () =>{
    circle.classList.toggle('move');
    Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
    Array.from(lighTexts).map(lighTexts => lighTexts.classList.toggle('light'));
    Array.from(borders).map(border => border.classList.toggle('border-color'));
});



