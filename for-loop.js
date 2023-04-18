for(let i = 1, z = 1; i <= 4108; (i = i * 2 + z), z--){
    document.write(i);
    if(i < 4108){
        document.write(", ");
    }
}