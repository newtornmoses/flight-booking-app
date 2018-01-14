const picdate = new pickaday({
    field: document.getElementById('datepicker'),
});

document.getElementById('datepicker').addEventListener('focus', function() {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        firstDay: 1,
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000, 2020]
    });
    return picker;
});

window.onload = function() {
    alert(0);
}