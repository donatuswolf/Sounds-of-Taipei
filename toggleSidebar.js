let toggleSidebarStatus = true;

    let toggleSidebar = function () {
        let getSidebar = document.querySelector('.sidebar');
        let getCenter = document.querySelector('.center');
        let getBottom = document.querySelector('.bottom');
        let setArrow = document.querySelector('.more');

        if (toggleSidebarStatus === false) {
            getSidebar.style.height = '416px';
            setArrow.style.transform = 'rotate(0deg)';

            getCenter.style.opacity = 1;
            getBottom.style.opacity = 1;

            toggleSidebarStatus = true;

            

        } else if (toggleSidebarStatus === true) {
            getCenter.style.opacity = 0;
            getBottom.style.opacity = 0;

            getSidebar.style.height = '104px';
            setArrow.style.transform = 'rotate(180deg)';

            toggleSidebarStatus = false;

        }
    }