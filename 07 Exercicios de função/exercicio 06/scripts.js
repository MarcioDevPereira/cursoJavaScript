function ident(num) {
    if (typeof num === "string") {
    console.log("Este dado é uma String");
    } else if (typeof num === "number") {
    console.log("Este dado é um Number");
    } else if (typeof num === "boolean") {
    console.log("este dado é boolean");
    }

}

ident(true);
ident("Marcio");
ident(25);