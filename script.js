// header toggle 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle("fa-xmark")
})

//typing effect 
let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer', 'Back-End Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay: 2000,
    loop:true,
})

document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var msg=document.getElementById("msg").value;

    var mailtoUrl = "mailto:hthiwanki293@gmail.com" +
    "?subject=" + encodeURIComponent(subject) + "&body=" +encodeURIComponent("Name: " +name + "\nEmail: "+email+"\n\n" +msg);

    window.location.href=mailtoUrl;
});

//active link state on Scroll
//Get All links
let navlinks = document.querySelectorAll('nav ul li a')
//Get All sections
let sections = document.querySelectorAll('section')
console.log(sections)
window.addEventListener('scroll',function(){
    const scrollPos= window.scrollY +20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });

        }
    });
});