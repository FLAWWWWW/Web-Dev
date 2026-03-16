n, m = map(int, input().split())

max_sum = -1
max_row = 0

for i in range(n):
    row = list(map(int, input().split()))
    s = sum(row)
    if s > max_sum:
        max_sum = s
        max_row = i

print(max_sum)
print(max_row)