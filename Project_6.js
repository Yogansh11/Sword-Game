function survive() {
    var soldier = parseInt(document.getElementById("soldier").value);
    var s = parseInt(document.getElementById("sword").value);
    s--

    if (soldier < 0) {
        alert("Number of soldiers should be Greater than 0");
    }
    else if (isNaN(soldier) || isNaN(s)) {
        alert("Enter Valid Number");
    }
    else if ((soldier < s + 1)) {
        alert("Soldier with sword can not be greater then number of soldiers");
    }
    else if (s < 0) {
        alert("Soldier with sword should be greater then or equal to 1");
    }
    else if (s == null || soldier == null) {
        alert("Enter Valid Number");
    }
    else {
        var a = new Array(soldier);
        for (var i = 0; i < soldier; i++) {
            a[i] = i + 1;
        }
        while (a.length > 1) {
            s++;
            s = s % (a.length);
            a.splice(s, 1)
        }
        result = a[0];
        form.result.value = result;
    }
}