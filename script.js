// -------------------------Services Description Function------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// -------------------------Responsiveness Function------------------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu()
{
    sidemenu.style.right = "0";
}
function closemenu()
{
    sidemenu.style.right = "-200px";
}

// -----------------------------Form SubmitEvent---------------------------------

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwZIH-l_2sCuPQUh5SYGTSpK_y2pUJZVrBdH3g2DCFqqAhYZ9trISvEQ-e_XaBzL8Tk/exec'

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwZIH-l_2sCuPQUh5SYGTSpK_y2pUJZVrBdH3g2DCFqqAhYZ9trISvEQ-e_XaBzL8Tk/exec'
// const form = document.forms['submit-to-google-sheet']
      
// form.addEventListener('submit', e => 
// {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// }) 

const scriptURL = 'https://script.google.com/macros/s/AKfycbwZIH-l_2sCuPQUh5SYGTSpK_y2pUJZVrBdH3g2DCFqqAhYZ9trISvEQ-e_XaBzL8Tk/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
      
form.addEventListener('submit', e => 
{
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => 
    {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function()
        {
            msg.innerHTML = " ";
        },3000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
    alert("Message is submitted");
}) 


// -------------------------------@Support & Contact Origional Devloper-------------------------------
//                        https://github.com/jamiewilson/form-to-google-sheets
//                       link->https://youtu.be/0YFrGy_mzjY?si=NayKXIhRP7_iZLQ_
//                                  ---------Happy Coding---------