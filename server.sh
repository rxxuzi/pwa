#
#   Apach内のhtdocsにこのディレクトリをコピーする
#
cd ..
if [ ! -d "C:/Apache/Apache24/htdocs/ps" ]; 
    then mkdir C:/Apache/Apache24/htdocs/ps
fi
cp -r pwa C:/Apache/Apache24/htdocs

echo "Finish" >> DirCopy.log

gcc ./src/run_sh.c
a.exe
sleep 1
rm a.exe

# cd C:/Apache/Apache24/htdocs

