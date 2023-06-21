#
#   Apach内のhtdocsにこのディレクトリをコピーする
#
cd ..

echo "Dir Copy Start" 

if [ ! -d "C:/Apache/Apache24/htdocs/pwa" ]; 
    then rm -rf C:/Apache/Apache24/htdocs/pwa
fi

cp -r pwa C:/Apache/Apache24/htdocs

echo "Finish" >> DirCopy.log

g++ ./src/run.cpp -o run

run.exe

sleep 1

rm -r run.exe

echo "Finish"

# cd C:/Apache/Apache24/htdocs

