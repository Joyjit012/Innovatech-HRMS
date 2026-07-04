// Sidebar Navigation

const menuLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section");

menuLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        menuLinks.forEach(item=>{
            item.parentElement.classList.remove("active");
        });

        this.parentElement.classList.add("active");

        const target = this.getAttribute("href");

        sections.forEach(section=>{
            section.style.display="none";
        });

        document.querySelector(target).style.display="block";

    });

});

// Show Dashboard First

sections.forEach(section=>{
    section.style.display="none";
});

document.querySelector("#dashboard").style.display="block";



// Today's Date

const today = new Date();

const options = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
};

const dateText = document.querySelector(".welcome-text p");

if(dateText){

    dateText.innerHTML=today.toLocaleDateString("en-US",options);

}



// Check In Button

const checkBtn=document.querySelector(".btn-primary");

if(checkBtn){

    checkBtn.addEventListener("click",function(){

        const now=new Date();

        const time=now.toLocaleTimeString([],{
            hour:'2-digit',
            minute:'2-digit'
        });

        const text=document.querySelector(".check-actions p");

        text.innerHTML="<strong>Last Action:</strong> Check-in at "+time;

        alert("Check In Successful");

    });

}



// Leave Form

const leaveForm=document.querySelector(".leave-form");

if(leaveForm){

    leaveForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Leave Request Submitted Successfully!");

        leaveForm.reset();

    });

}



// Logout

const logout=document.querySelector(".logout-btn");

if(logout){

    logout.addEventListener("click",function(e){

        e.preventDefault();

        const ans=confirm("Are you sure you want to logout?");

        if(ans){

            window.location.href="login.html";

        }

    });

}



// Notification

const bell=document.querySelector(".notifications");

if(bell){

    bell.addEventListener("click",function(){

        alert("You have 2 new notifications.");

    });

}