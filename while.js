x = 0;
while(x <= 51){
    x++;
    if(x % 2 == 1){
        document.write(x);
        if(x < 51){
            document.write(", ");
        }
    }
}