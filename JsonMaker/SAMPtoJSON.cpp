// SAMPtoJSON.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

struct Materia {
    string nombre;
    int semestre;
    string clave;
};

int main() {
    ifstream txt;
    ofstream json;

    string clave, nomMateria, extra;
    int semestre = 0;
    char c = (char)34;
    string doble = " ";
    doble[0] = c;

    cout << doble << "\n";

    vector<Materia> materias;

    Materia materia;

    //vector<int> a;

    txt.open("prueba2.txt");

    /*while (!txt.eof()) {
        getline(txt, extra);
        cout << extra << endl;
    }*/

    while (txt >> extra) {
        if (extra == "Semestre") {
            semestre++;
            for (int i = 0; i < 7; i++) {
                txt >> extra;
            }

            txt >> clave >> nomMateria;

            //cout << "clave: " << clave << "\nnombre: " << nomMateria << "\n\n";

            while (clave.length() > 2) {
                materia.nombre = nomMateria;
                materia.clave = clave;
                materia.semestre = semestre;
                txt >> nomMateria;
                //cout << "nomMateria1: " << nomMateria << "\n\n";
                while (nomMateria.length() > 1 || nomMateria[0] > '9') {
                    materia.nombre += " ";
                    materia.nombre += nomMateria;
                    txt >> nomMateria;
                    //cout << "nomMateria2: " << nomMateria << "\nmateria.nombre: " << materia.nombre << "\n\n";
                }
                for (int i = 0; i < 4; i++) {
                    txt >> extra;
                }
                materias.push_back(materia);
                txt >> clave >> nomMateria;
            }
        }
    }

    txt.close();

    cout << "size: " << materias.size();

    /*for (int i = 0; i < materias.size(); i++) {
        cout << "\nMateria: " << materias[i].nombre << "\n";
        cout << "Semestre: " << materias[i].semestre<< "\n";
        cout << "Clave: " << materias[i].clave << "\n";
    }*/

    json.open("prueba2Res.json");

    json << "[\n";

    for (int i = 0; i < materias.size(); i++) {
        extra = "{\n";

        extra += doble + "nombre" +                 doble + ": " +      doble + materias[i].nombre +                doble + ",\n";
        extra += doble + "clave" +                  doble + ": " +      doble + materias[i].clave +                 doble + ",\n";
        extra += doble + "semestre" +               doble + ": " +      to_string(materias[i].semestre) +                   ",\n";
        extra += doble + "requisitoAcreditado" +    doble + ": [],\n" + doble + "requisitoCursado" +                doble + ": []\n},\n";

        json << extra;
    }

    json << "]";

    json.close();
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
