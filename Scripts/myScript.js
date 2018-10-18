$(document).ready(function(){
    $(".slide-toggle").click(function(){
        
        let sidebar = $(".sidebar");
        
        if(sidebar.css("width") === "300px"){
            $(".sidebar").animate({
                width: "0px"
            });
            $(".sidebarOverlay").css({"display": "none"})
        }
        else if(sidebar.css("width") === "0px"){
            $(".sidebar").animate({
                width: "300px"
            });
            $(".sidebarOverlay").css({"display": "block"})
        }
    });
});