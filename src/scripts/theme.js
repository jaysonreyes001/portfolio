if(localStorage.getItem('theme')){
     if(localStorage.getItem('theme') == 'dark'){
          document.documentElement.classList.add('dark')
     }
     else{
          document.documentElement.classList.remove('dark')
     }
}

const theme = localStorage.getItem('theme');
export default theme;