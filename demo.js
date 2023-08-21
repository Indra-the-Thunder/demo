let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');



function dualBlack() {
    document.getElementById('img1').style.display = 'block';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img6').style.display = 'none';

    document.getElementById('name').innerHTML = "Brooklyn Black (DC)";
    document.getElementById('name').style.color = '#000000';

    document.getElementById('main_cont').style.background = 'linear-gradient(to bottom, #c4c4c4, #909090, #5f5f5f, #323232, #040404)';
}

function dualBlue() {
    document.getElementById('img2').style.display = 'block';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img6').style.display = 'none';

    document.getElementById('name').innerHTML = "Caribbean Blue (DC)";
    document.getElementById('name').style.color = '#007bff';

    document.getElementById('main_cont').style.background = 'linear-gradient(to bottom, #c4c4c4, #b1afd2, #979ce1, #6f8af0, #007bff)';
}

function dualRed() {
    document.getElementById('img3').style.display = 'block';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img6').style.display = 'none';

    document.getElementById('name').innerHTML = "Racing Red (DC)";
    document.getElementById('name').style.color = '#e2302a';

    document.getElementById('main_cont').style.background = 'linear-gradient(to bottom, #c4c4c4, #c3a7c7, #d881af, #e95578, #e2302a)';
}

function singleBlue() {
    document.getElementById('img4').style.display = 'block';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img5').style.display = 'none';
    document.getElementById('img6').style.display = 'none';

    document.getElementById('name').innerHTML = "Caribbean Blue (SC)";
    document.getElementById('name').style.color = '#007bff';

    document.getElementById('main_cont').style.background = 'linear-gradient(to bottom, #c4c4c4, #b1afd2, #979ce1, #6f8af0, #007bff)';
}

function singleRed() {
    document.getElementById('img5').style.display = 'block';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img6').style.display = 'none';


    document.getElementById('name').innerHTML = "Racing Red (SC)";
    document.getElementById('name').style.color = '#e2302a';

    document.getElementById('main_cont').style.background = 'linear-gradient(to bottom, #c4c4c4, #c3a7c7, #d881af, #e95578, #e2302a)';

}

function singleGrey() {
    document.getElementById('img6').style.display = 'block';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img5').style.display = 'none';

    document.getElementById('name').innerHTML = "Techno Grey (SC)";
    document.getElementById('name').style.color = '#79797c';

    document.getElementById('main_cont').style.background = 'linear-gradient(to bottom, #c4c4c4, #b1b1b1, #9e9e9f, #8b8b8d, #79797c)';
}


setInterval(spinn, 100);
setInterval(spinn1, 100);
setInterval(spinn2, 100);
setInterval(spinn3, 100);
setInterval(spinn4, 100);
setInterval(spinn5, 100);

function spinn() {
    let range = document.getElementById('range').value;
    let main = document.getElementById('main');

    main.innerHTML = '<img src="pow_img/dual_black/' + range + '.png">';
    console.log(range);
}

function spinn1() {
    let range = document.getElementById('range1').value;
    let main = document.getElementById('main1');

    main.innerHTML = '<img src="pow_img/dual_blue/' + range + '.png">';
    console.log(range);
}

function spinn2() {
    let range = document.getElementById('range2').value;
    let main = document.getElementById('main2');

    main.innerHTML = '<img src="pow_img/dual_red/' + range + '.png">';
    console.log(range);
}

function spinn3() {
    let range = document.getElementById('range3').value;
    let main = document.getElementById('main3');

    main.innerHTML = '<img src="pow_img/single_blue/' + range + '.png">';
    console.log(range);
}

function spinn4() {
    let range = document.getElementById('range4').value;
    let main = document.getElementById('main4');

    main.innerHTML = '<img src="pow_img/single_red/' + range + '.png">';
    console.log(range);
}

function spinn5() {
    let range = document.getElementById('range5').value;
    let main = document.getElementById('main5');

    main.innerHTML = '<img src="pow_img/single_grey/' + range + '.png">';
    console.log(range);
}