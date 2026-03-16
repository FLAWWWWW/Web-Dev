y = int(input())
for i in range(2, y + 1):
    if y % i == 0:
        print(i)
        break