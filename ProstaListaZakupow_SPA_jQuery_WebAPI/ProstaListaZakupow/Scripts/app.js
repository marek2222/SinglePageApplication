var listaZakupow = {};

function utworzListeZakupow() {
    listaZakupow.name = $("#listeZakupow_nazwa").val();
    listaZakupow.items = new Array();

    // Web Service Call

    showShoppingList();
}

function showShoppingList() {
    $("#listaZakupow_tytul").html(listaZakupow.name);
    $("#listaZakupow").empty();

    $("#divDodawanie").hide();
    $("#divPrzegladanie").show();

    $("#nowaPozycja_nazwa").focus();
    $("#nowaPozycja_nazwa").keyup(function (event) {
        if (event.keyCode == 13) {
            dodajPozycje();
        }
    });
}

function dodajPozycje() {
    var newItem = {};
    newItem.name = $("#nowaPozycja_nazwa").val();
    listaZakupow.items.push(newItem);
    console.info(listaZakupow);

    drawItems();
    $("#nowaPozycja_nazwa").val("");
}

function drawItems() {
    var $list = $("#listaZakupow").empty();

    for (var i = 0; i < listaZakupow.items.length; i++) {
        var currentItem = listaZakupow.items[i];
        var $li = $("<li>").html(currentItem.name)
            .attr("id", "item_" + i);
        var $deleteBtn =
            $("<button onclick='deleteItem(" + i + ")'>D</button>").appendTo($li);
        var $checkBtn =
            $("<button onclick='checkItem(" + i + ")'>C</button>").appendTo($li);

        $li.appendTo($list);
    }
}

function deleteItem(index) {
    listaZakupow.items.splice(index, 1);
    drawItems();
}

function checkItem(index) {
    if ($("#item_" + index).hasClass("checked")) {
        $("#item_" + index).removeClass("checked");
    }
    else {
        $("#item_" + index).addClass("checked");
    }
}

function getShoppingListById(id) {
    console.info(id);

    listaZakupow.name = "Mock Shopping List";
    listaZakupow.items = [
        { name: "Milk" },
        { name: "Cornflakes" },
        { name: "Strawberries" }
    ];

    showShoppingList();
    drawItems();
}

$(document).ready(function () {
    console.info("ready");
    $("#listeZakupow_nazwa").focus();
    $("#listeZakupow_nazwa").keyup(function (event) {
        if (event.keyCode == 13) {
            utworzListeZakupow();
        }
    });

    var pageUrl = window.location.href;
    var idIndex = pageUrl.indexOf("?id=");
    if (idIndex != -1) {
        getShoppingListById(pageUrl.substring(idIndex + 4));
    }
});