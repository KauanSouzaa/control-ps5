const menuList = document.getElementById("menu-list")
        menuList.style.maxHeight = "0px" //quando a aplicação começar, ele não vai aparecer 

        function showMenu(){
            if (menuList.style.maxHeight == "0px"){
                menuList.style.maxHeight = "120px"
            }
            else {
                menuList.style.maxHeight = "0px"
            }


        }
