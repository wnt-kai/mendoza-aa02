x = 0;
do{
    x++;
    if(x % 2 == 0){
        document.write(x);
        if(x < 50){
            document.write(", ");
        }
    }
}while(x <= 50)