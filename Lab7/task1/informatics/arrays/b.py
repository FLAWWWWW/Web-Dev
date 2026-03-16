n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]

ok = True
for i in range(n):
    for j in range(n):
        if a[i][j] != a[j][i]:
            ok = False

if ok:
    print("yes")
else:
    print("no")