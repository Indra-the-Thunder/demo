window.onscroll = function() { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function searchShow() {
    var show = document.getElementById("search_bar");
    if (show.style.top === "-248px") {
        show.style.top = "0px";
    } else {
        show.style.top = "-248px";
    }
}

function menuShow() {
    var show_1 = document.getElementById("side_menu");
    if (show_1.style.marginRight === "-318px") {
        show_1.style.marginRight = "0px";
    } else {
        show_1.style.marginRight = "-318px";
    }

}

function cancle() {
    var vis = document.getElementById("search_bar");
    if (vis.style.top === "0px") {
        vis.style.top = "-248px";
    } else {
        vis.style.top = "0px";
    }
}

function cancle2() {
    var vis_1 = document.getElementById("side_menu");

    if (vis_1.style.marginRight === "0px") {
        vis_1.style.marginRight = "-318px";
    } else {
        vis_1.style.marginRight = "0px";
    }

}

function dualBlack() {
    document.getElementById('image').src = 'n160_images/black_00.png';
    document.getElementById('col 1').style.outline = '2px solid #006ad0';
    document.getElementById('col 2').style.outline = '2px solid #c4c4c4';
    document.getElementById('col_name').innerText = "Brooklyn Black";
}

function dualBlue() {
    document.getElementById('image').src = 'n160_images/blue_00.png';
    document.getElementById('col 2').style.outline = '2px solid #006ad0';
    document.getElementById('col 1').style.outline = '2px solid #c4c4c4';
    document.getElementById('col_name').innerText = "Caribbean Blue";
}

function go_Dual() {
    document.getElementById('dual').style.display = 'block';
    document.getElementById('single').style.display = 'none';
    document.getElementById('select_Dual').style.background = '#007bff';
    document.getElementById('select_Single').style.background = '#b0cde9';
    document.getElementById('single_h2').style.color = '#007bff';
    document.getElementById('dual_h2').style.color = '#fff';

    dualBlack();
}

function go_Single() {
    document.getElementById('dual').style.display = 'none';
    document.getElementById('single').style.display = 'block';
    document.getElementById('select_Single').style.background = '#007bff';
    document.getElementById('select_Dual').style.background = '#b0cde9';
    document.getElementById('single_h2').style.color = '#fff';
    document.getElementById('dual_h2').style.color = '#007bff';

    singleBlue();

}

function singleBlue() {
    document.getElementById('image').src = 'n160_images/single_blue_00.png';
    document.getElementById('col 3').style.outline = '2px solid #006ad0';
    document.getElementById('col 4').style.outline = '2px solid #c4c4c4';
    document.getElementById('col 5').style.outline = '2px solid #c4c4c4';
    document.getElementById('col_name 1').innerText = "Caribbean Blue";
}

function singleRed() {
    document.getElementById('image').src = 'n160_images/single_red_00.png';
    document.getElementById('col 3').style.outline = '2px solid #c4c4c4';
    document.getElementById('col 4').style.outline = '2px solid #006ad0';
    document.getElementById('col 5').style.outline = '2px solid #c4c4c4';
    document.getElementById('col_name 1').innerText = "Racing Red";
}

function singleGrey() {
    document.getElementById('image').src = 'n160_images/single_grey_00.png';
    document.getElementById('col 3').style.outline = '2px solid #c4c4c4';
    document.getElementById('col 4').style.outline = '2px solid #c4c4c4';
    document.getElementById('col 5').style.outline = '2px solid #006ad0';
    document.getElementById('col_name 1').innerText = "Techno Grey";
}

function showMenu1() {
    var menu1 = document.getElementById('ul_1');
    if (menu1.style.display === "none") {
        menu1.style.display = 'block';
    } else {
        menu1.style.display = 'none';
    }
}

function showMenu1() {
    var menu1 = document.getElementById('ul_1');
    if (menu1.style.display === "none") {
        menu1.style.display = 'block';
    } else {
        menu1.style.display = 'none';
    }
}

function showMenu2() {
    var menu1 = document.getElementById('ul_2');
    if (menu1.style.display === "none") {
        menu1.style.display = 'block';
    } else {
        menu1.style.display = 'none';
    }
}

function finance_page() {

    window.open(
        "finance.html", "_blank"
    );
}