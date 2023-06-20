
g++ ./src/run.cpp -o run
run.exe
sleep 1
rm -r run.exe

cd C:/Apache/Apache24/bin
echo "Apache server started!"
echo "Press ctrl+C to stop the server"

#press enter to stop the server
httpd


