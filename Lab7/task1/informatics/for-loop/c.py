a2 = int(input())
b2 = int(input())

for i in range(a2, b2 + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, end=" ")