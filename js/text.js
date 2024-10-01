var fortunes = [
    "One man's trash is another man's treasure.",
    "The early bird catches the worm.",
    "Never look a gift horse in the mouth.",
    "God helps those who help themselves.",
    "You can't always get what you want.",
    "A friend in need is a friend indeed.",
    "A little bit of knowledge is a dangerous thing.",    
    "All is fair in love and war.",
    "Don't put the cart before the horse.",
    "Practice makes perfect.",
        ];
    
    document.getElementById('new').onclick = showFortune;
    
    function showFortune() {
        document.getElementById('fortune').innerHTML = 
            randomElement(fortunes);
        
    }
    
    function randomInt(n){
        return Math.floor(Math.random() * n);
    }
    
    function randomElement(data){
        var length = data.length;
        var which = randomInt(length);
        return data[which];
    }
     function vcenter() {
         var ht = window.innerHeight - 300; 
         var half = ht / 2;
         document.body.style.paddingTop = half + 'px';
     }
    
    vcenter();
    
    window.onresize = vcenter;
    
    showFortune();
// button that goes back to the main page
    function goBackToPage(){
        window.location.href = 'index.html'; 
    }