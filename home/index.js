//hide the content of homepage if havbar menu button clicked in mobile devices for responsive design.

function hideHomepage(){
    var chboxs = document.getElementsByName("chckbox");
    var vis = "block";
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "none";
            break;
        }
    }
 document.getElementById('mainboxHomepage').style.display = vis;

}


 function startfundRaiserMethod(){
     window.location.href = "Fundraiser.html";
 }


// change background color of button talk button
var talk  = document.getElementsByClassName('talk');

for(let val of talk){
    val.onmouseover = function(){
        val.style.backgroundColor = "#01BFBD";
        val.style.color = "rgb(255, 255, 255)";
        val.style.cursor = "pointer";
    }
    
    val.onmouseleave = function(){
        val.style.backgroundColor = "white";
        val.style.color = "#01BFBD";
    }
}

// change background color of button start button
var startFund = document.getElementsByClassName('start-fundraiser');

for(let i=0; i<startFund.length; i++){
    if(i != 2 && i != 4){
        startFund[i].onmouseover = function(){
            startFund[i].style.backgroundColor = "#039695";
            startFund[i].style.cursor = "pointer";
        }
    
        startFund[i].onmouseleave = function(){
            startFund[i].style.backgroundColor = "#01BFBD";
        }
    }
}

// support button 
var support = document.getElementById('support');

support.onmouseover = function(){
    support.style.cursor = "pointer";
}

//causes dynamic

var causes = document.getElementById('causes-img').childNodes;

for(let i=1; i<causes.length; i+=2){
    causes[i].onmouseover = function(){
        causes[i].style.cursor ="pointer";
    }
}

//success stories dynamic
var successCar = document.getElementById("successCarousel");

var success =
[
    {
        image : "https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0",
        h2 : "You are the reason Suraj gets to live his dream",
        p : "“Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father)",
    },

    {
        image : "https://kettocdn.gumlet.io/media/banner/0/96/image/0717875196afb641172a631c282e1875d76b8930.jpg?w=auto&dpr=1.0",
        h2 : "Heroes like you helped my son win his battle.",
        p : "“May Allah bless you all! Thanks to your generous donations, Afzal underwent a successful BMT to treat thalassemia major. We are eternally grateful to you all for gifting our little bundle of joy a second chance at life!” -Reshma (Mother)",
    },

    {
        image : "https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg?w=auto&dpr=1.0",
        h2 : "My daughter finally gets to enjoy her childhood",
        p : "“My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood. Words cannot express how grateful I am to you angels!” - Prajakta (Mother)",
    }
]

var ind = 0;

var leftS = document.getElementById("leftSuccess");

leftS.onclick = function(){
    if(ind === 2){
        ind = 0;
    }
    else{
        ind++;
    }
    card.remove();
    car(ind);
}

var rightS = document.getElementById("rightSuccess");
rightS.onclick = function(){
    if(ind === 0){
        ind = 2;
    }
    else{
        ind--;
    }
    card.remove();
    car(ind);
}

function car(i){
    var card = document.createElement("div");
    card.setAttribute('id','card');
    
    var img = document.createElement("img");
    img.src = success[i].image;
    
    var divInfo = document.createElement("div");
    divInfo.setAttribute('id', 'divInfo');
    
    var H2 = document.createElement('h2');
    H2.textContent = success[i].h2;
    H2.setAttribute('class','font-style');
    H2.setAttribute('class','font-color_1');
    
    var P = document.createElement('p');
    P.textContent = success[i].p;
    P.setAttribute('class','font-style');
    P.setAttribute('class','font-color_1');
    
    var divA = document.createElement('div');
    divA.setAttribute('id','divA');
    
    var A = document.createElement('a');
    A.textContent = "Read More";
    A.setAttribute('class','green-color-text-2')
    
    divA.appendChild(A);
    
    divInfo.append(H2,P, divA);
    
    card.append(img, divInfo);
    
    successCar.append(card);
}

car(ind);

