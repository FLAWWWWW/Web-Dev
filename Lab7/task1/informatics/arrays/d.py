n, m = map(int, input().split())

max_value = -1
max_i = 0
max_j = 0

for i in range(n):
    row = list(map(int, input().split()))
    for j in range(m):
        if row[j] > max_value:
            max_value = row[j]
            max_i = i
            max_j = j

print(max_value)
print(max_i, max_j)