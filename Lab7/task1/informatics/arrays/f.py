n, m = map(int, input().split())

global_max = -1
count = 0

for i in range(n):
    row = list(map(int, input().split()))
    row_max = max(row)

    if row_max > global_max:
        global_max = row_max
        count = 1
    elif row_max == global_max:
        count += 1

print(count)