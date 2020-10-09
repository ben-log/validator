if (typeof jQuery === "undefined") {
    console.error("error");
} else {
    $("#form").validator({
        'foo': 'var'
    });
}