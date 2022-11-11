$().ready(()=>{
    $('.scroll-pane').on('mousewheel',function(event){
        let deltaY=event.originalEvent.wheelDeltaY;
        console.log(deltaY)
        console.log( $(this).find(".scroll-content").css("transform"));
        if(deltaY>0){
            // 向上
            $(this).find(".scroll-content").css("transform","translateY(20%)")
            $(this).find(".scroll-vertical-bar").css("transform","translateY(-50%)")
        }else{
            // 上下
            $(this).find(".scroll-content").css("transform","translateY(-20%)")
            $(".scroll-vertical-bar").css("transform","translateY(50%)")
        }

    })
})