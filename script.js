let val = '1.1.1'

$(document).ready(function () {

    $("#layer").change(function () {
        var val = $(this).val();
        if (val == "0") {
            $("#region").html("<option value='0.0'>Select a region</option>");
        } else if (val == "1") {
            $("#region").html("<option value='0.0'>Select a region</option> <option value='1.1'>Cliff of the abyss</option><option value='1.2'>Rocky Caverns</option>");
        } else if (val == "2") {
            $("#region").html("<option value='0.0'>Select a region</option> <option value='2.1'>Edge of the forest</option><option value='2.2'>Inverted Forest</option><option value='2.3'>The long river</option>");

        } else if (val == "3") {
            $("#region").html("<option value='0.0'>Select a region</option> <option value='3.1'>First Region</option><option value='3.2'>Second Region</option>");

        } else if (val == "4") {
            $("#region").html("<option value='0.0'>Select a region</option> <option value='4.1'>First Region</option><option value='4.2'>Second Region</option>");

        }
    });

    $("#region").change(function () {
        var val = $(this).val();
        if (val == "0.0") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option>");
        } else if (val == "1.1") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='1.1.1'>Tentacle Goat</option><option value='1.1.2'>Swarm of Insects</option> <option value='1.1.3'>Hippogriff</option> <option value='1.1.4'>Five-Eyed Vulture</option> <option value='1.1.5'>Basilisk</option>");
        } else if (val == "1.2") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='1.1.2'>Swarm of Insects</option> <option value='1.1.3'>Hippogriff</option> <option value='1.1.4'>Five-Eyed Vulture</option> <option value='1.1.5'>Basilisk</option> <option value='1.2.1'>Fanged Harvestman</option> <option value='1.2.2'>Owlbear</option>");

        } else if (val == "2.1") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='2.1.1'>Manticore</option> <option value='1.2.2'>Owlbear</option><option value='2.1.3'>Corpse Weeper</option><option value='2.2.1'>Armored Ape</option><option value='2.1.4'>Melting Death</option>");

        } else if (val == "2.2") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='2.2.1'>Armored Ape</option><option value='2.2.2'>Phase Spider</option><option value='2.1.4'>Melting Death</option><option value='2.2.3'>Primordial Ape</option>");

        } else if (val == "2.3") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='2.3.1'>Dismemberement Troll</option><option value='2.3.2'>Phase Spider</option><option value='2.3.3'>Melting Death</option>");

        } else if (val == "3.1") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='3.1.1'>Chuul</option><option value='3.1.2'>Aboleth</option> <option value='3.1.3'>Ripper</option> <option value='3.1.4'>The Maw</option>");

        } else if (val == "3.2") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='3.2.1'>No Entry</option>");

        } else if (val == "4.1") {
            $("#monster").html("<option value='0.0.0'>Select a monster</option> <option value='4.1.1'>Old Stinkeye</option><option value='4.1.2'>Water Leaper</option> <option value='4.1.3'>Hydra</option>");
        }
    });
    $("#monster").change(function () {
        var val = $(this).val();
        if (val == "1.1.1") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "1.1.2") {
            document.getElementById("informations").src = "img/insectswarm.png";
        } else if (val == "1.1.3") {
            document.getElementById("informations").src = "img/hippogriff.png";
        } else if (val == "1.1.4") {
            document.getElementById("informations").src = "img/fiveeyedvulture.png";
        } else if (val == "1.1.5") {
            document.getElementById("informations").src = "img/basilisk.png";
        } else if (val == "1.2.1") {
            document.getElementById("informations").src = "img/fangedharvestman.png";
        } else if (val == "1.2.2") {
            document.getElementById("informations").src = "img/owlbear.png";
        } else if (val == "2.1.1") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.1.2") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.1.3") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.1.4") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.1.5") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.2.1") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.2.2") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "2.2.3") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "3.1.1") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "3.1.2") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "3.1.3") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "3.2.1") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "4.1.1") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "4.1.2") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        } else if (val == "4.1.3") {
            document.getElementById("informations").src = "img/tentaclegoat.png";
        }
    });
});



window.onscroll = function () {
    rotate();
};

function rotate() {
    let bouton = document.getElementById("like");
    bouton.style.transform = "rotate(" + window.pageYOffset / 1 + "deg)";
}

function pop() {
    document.getElementById('popup').style.display = 'block';
}
function hideme() {
    document.getElementById('popup').style.display = 'none';
}