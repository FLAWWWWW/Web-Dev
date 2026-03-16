n = int(input())

for i in range(n):
    for j in range(n):
        if j < n - 1 - i:
            print(0, end=" ")
        elif j == n - 1 - i:
            print(1, end=" ")
        else:
            print(2, end=" ")
    print()