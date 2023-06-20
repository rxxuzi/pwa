#include <iostream>
#include <fstream>
#include <chrono>
#include <ctime>
#include <iomanip>
int main() {
    //write date and now time to ./run.log

    std::ifstream ifs("./run.log");
    std::string line;
    int line_number = 0;
    std::string path = "./run.log";

    while (std::getline(ifs, line)) {
        ++line_number;
    }
    //print line_number
    std::cout << line_number << std::endl;
    ifs.close();

    std::time_t now = std::chrono::system_clock::to_time_t(std::chrono::system_clock::now());
    std::ofstream ofs(path, std::ios_base::app);
    // ofs << std::ctime(&now) << " (success)" << std::endl;
    ofs << std::put_time(std::localtime(&now), "%Y-%m-%d %H:%M:%S Run : " ) << line_number << " t" << std::endl;
    ofs.close();
    return 0;
}

