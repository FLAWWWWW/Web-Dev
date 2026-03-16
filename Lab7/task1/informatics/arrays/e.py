n, m = map(int, input().split())

winner = 0
best_throw = -1
best_sum = -1

for i in range(n):
    row = list(map(int, input().split()))
    row_max = max(row)
    row_sum = sum(row)

    if row_max > best_throw:
        best_throw = row_max
        best_sum = row_sum
        winner = i
    elif row_max == best_throw:
        if row_sum > best_sum:
            best_sum = row_sum
            winner = i

print(winner)