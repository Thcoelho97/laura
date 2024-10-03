function sim() {
    Swal.fire({
        title: "VAMO INTER",
        text: "É OS GURI",
        icon: "success"
    });
}
function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = randomico(0, 100);
    btn.style.left = randomico(0, 100);
    console.log("opsss");
}
function randomico(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}