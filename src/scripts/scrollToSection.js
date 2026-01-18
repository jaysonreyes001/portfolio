export const  scrollToSection = (section,e) => {
     const el = document.getElementById(section)
     if(e.currentTarget){
          const y = el.offsetTop - 130;
               window.scrollTo({
               top: y,
               behavior: 'smooth'
          })
     }
}
