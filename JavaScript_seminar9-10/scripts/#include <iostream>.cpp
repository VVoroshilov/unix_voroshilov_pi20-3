#include <iostream>
#include <locale.h>
using namespace std;
int k = 0;
long long pow_bin(long long a, long long n)
{
    k++;
    if (n == 0)
        return 1;
    long long b = pow_bin(a, n / 2);
    if (n % 2 == 1)
        return b * b * a;
    else
        return b * b;
}

int main()
{
    setlocale(LC_ALL, "RUS");
    long long a, n;
    cout << "Размер массива для проверки: ";
    cin >> size;
    cout << "Введите основание степени: ";
    cin >> a;


    for (int i = 0; i < size; ++i)
    {
        cout << "====== " << size << "====== " << endl;
        cout << a << "^" << i+1 << " = " << pow_bin(a, i+1) << endl;
        cout << "Количество итераций: " << k;
        k = 0;
    }
}





