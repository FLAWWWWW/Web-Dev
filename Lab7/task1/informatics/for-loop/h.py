h = int(input())

for i in range(1, h + 1):
    if h % i == 0:
        print(i, end=" ")