function writeSystemMessage(message) {
    var txt = $("textarea");
    txt.val(txt.val() + message + "\n");
}

function setOnClearBtnAction() {
    $("#btnClean").click(function () {
        $('textarea').val('');
    });
}

function initInventoryCells() {

    var cells = $('#inventory > tbody > tr > td > img');

    cells.each(function (i, cell) {
        $(cell).dblclick(function () {
            alert(i);
        });
    });
}

function addItemToInventory(item, amountItems) {
    if (amountItems === 16) {
        $('#inventory > tbody > tr > td > img').attr("src", "pictures/Empty_cell.jpg");
        amountItems = 0;
    }
    $('#inventory > tbody > tr:eq(' + Math.floor(amountItems / 4) + ') > td:eq(' + (amountItems % 4) + ') > img').attr("src", "pictures//" + item.imageUrl);
    $('#inventory > tbody > tr:eq(' + Math.floor(amountItems / 4) + ') > td:eq(' + (amountItems % 4) + ')').attr("title", item.description);
    return amountItems + 1;
}