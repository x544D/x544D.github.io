
$(document).ready(function(){

    
 
    var chachat = document.getElementsByClassName('chacha');
     
    for (let index = 0; index < chachat.length; index++) 
    {
        var img = chachat[index].attributes['_thmb'].value ;
        chachat[index].style.backgroundImage = "url("+img+")";    
    }

    // class="_scrshot" 
    $('._scrshot').on('click',function(e){

        e.preventDefault();

        var src = $(this).attr('src');
        var _classname = $(this).attr('class');
        
        $('#SkillsUsed DIV').html(`<img style="width:200px;height:400px;" src="${src}" />`);
        $('#SkillsUsed').fadeIn(200);
    
         
    }); 
 
    $('#SkillsUsed').on('click',function(e){
 
        $('#SkillsUsed').fadeOut(200); 
        $('#SkillsUsed DIV').empty();
    
    });  

    // Show Btn click in Videos page
    $('.Show_btn').on('click',function(e){

        e.preventDefault();

        var u = $(this).attr('_skills').replace(/\//gi,'<br>');
        
        $('#SkillsUsed DIV').html(u);

        $('#SkillsUsed').fadeIn(500);
    
         
      }); 
    
       $('#SkillsUsed').on('click',function(e){
 
        $('#SkillsUsed').fadeOut(500);
    
 
        $('#SkillsUsed DIV').empty();
    
      });  

    //   background-image: url(https://i.ytimg.com/vi/JWp58MN9cDo/hqdefault.jpg);
 
    $(".chacha").on("mouseenter", function(e)
    {
        var hexArray = ['#59d12a','#31a3c5','#c8ec27', '#cb1cee']
        var rCol = hexArray[Math.floor(Math.random() * hexArray.length)];
        
        var _ = this.getElementsByTagName('div')[0];
        this.style.border = "1px solid "+rCol;
        _.style.display = "block";

    });

    $(".chacha").on("mouseleave", function(e)
    {
        this.style.borderStyle = "dashed";
        this.getElementsByTagName('div')[0].style.display = "none";
    });
});