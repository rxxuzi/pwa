#include <stdio.h>
#include <time.h>
#include <sys/types.h>

void g_f(){

}

int main(void){
    //write date and now time to ./date.log
    time_t timer;
    struct tm *local;
    char buf[80];
    timer = time(NULL);
    local = localtime(&timer);
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", local);
    FILE *fp;
    fp = fopen("./rsc/run_sh.log", "a+");
    fprintf(fp, "%s (success)\n", buf);
    fclose(fp);
    return 0;
}