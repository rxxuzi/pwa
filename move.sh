#
#   Apach内のhtdocsにこのディレクトリをコピーする
#
cd ..
if [ ! -d "C:/Apache/Apache24/htdocs/ps" ]; 
    then mkdir C:/Apache/Apache24/htdocs/ps
fi
cp -r pwa C:/Apache/Apache24/htdocs

echo "Finish" >> DirCopy.log

g++ ./src/run.cpp -o run

run.exe

sleep 1

rm -r run.exe

# cd C:/Apache/Apache24/htdocs

