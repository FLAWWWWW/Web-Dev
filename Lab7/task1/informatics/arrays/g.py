n, m = map(int, input().split())

global_max = -1
winners = []

for i in range(n):
    row = list(map(int, input().split()))
    row_max = max(row)

    if row_max > global_max:
        global_max = row_max
        winners = [i]
    elif row_max == global_max:
        winners.append(i)

print(len(winners))
for x in winners:
    print(x, end=" ")