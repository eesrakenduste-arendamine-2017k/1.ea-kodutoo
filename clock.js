function Clock() {

    setInterval(function () {
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
    })
}