window.onscroll = function (e){
    console.log(this.document.body.scrollTop);
    let div = document.getElementById("crazy_boy");
 
    if (this.document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '-200px';
    }
    if (this.document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '0%';
    }
    if (this.document.body.scrollTop >= 900 || document.documentElement.scrollTop >= 900){
        div.style.backgroundPosition = '-200px 0';
        div.style.top = '40%';
    }
    if (this.document.body.scrollTop >= 1200 || document.documentElement.scrollTop >= 1200){
        div.style.backgroundPosition = '-400px 0px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 1500 || document.documentElement.scrollTop >= 1500){
        div.style.backgroundPosition = '0px -188px';
        div.style.top = '60%';
    }
    if (this.document.body.scrollTop >= 1800 || document.documentElement.scrollTop >= 1800){
        div.style.backgroundPosition = '-200px -188px';
        div.style.top = '70%';
    }
    if (this.document.body.scrollTop >= 2100 || document.documentElement.scrollTop >= 2100){
        div.style.backgroundPosition = '-400px -188px';
        div.style.top = '80%';
    }
    if (this.document.body.scrollTop >= 2400 || document.documentElement.scrollTop >= 2400){
        div.style.backgroundPosition = '0 -188px';
        div.style.top = '90%';
    }
    if (this.document.body.scrollTop >= 2700 || document.documentElement.scrollTop >= 2700){
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '90%';
    }
}