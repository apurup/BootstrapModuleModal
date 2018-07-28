$('document').ready(()=>{

    $('#openModal').click(function () {
           $('.modal').fadeIn("fast",function () {


               $('.modal').animate({
                   paddingTop:"+=30vh"
               },600)
               $('.modal-content').fadeIn('slow')
           });

    });
    $('.close,#cancel,#save').click(function () {

            $('.modal').animate({
                paddingTop:"-=50vh"
            },500)
            $('.modal').fadeOut("fast")
            $('.modal-content').fadeOut('fast');


        });
    $(window).click(function (event) {

        if(event.target.getAttribute('id')===$('.modal').attr('id'))
        {
            $('.modal').animate({
                paddingTop:"-=50vh"
            },500)
            $('.modal').fadeOut("fast")
            $('.modal-content').fadeOut('fast');




        }
    });

    $('button').click(function () {
        //alert($(this).attr("data-target"))

        if($(this).attr("data-toggle")==='collapse')
        {
            //alert($(this).attr("data-target"));
            let acid = $($(this).attr("data-target")).attr("data-parent");
            let temp=$(this).attr("data-target")
            let id = temp.substr(1,temp.length)
            //alert(id)


            $("div[data-parent='"+acid+"'][id!='"+id+"']").slideUp("slow");
            $($(this).attr("data-target")).slideToggle("slow");


        }
    })
});