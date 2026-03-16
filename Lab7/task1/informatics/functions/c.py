def xor(x, y):
    if (x and not y) or (not x and y):
        return 1
    return 0

x, y = map(int, input().split())
print(xor(bool(x), bool(y)))