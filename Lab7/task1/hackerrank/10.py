t = int(input())

for _ in range(t):
    n = input()
    try:
        float(n)
        if n.count('.') == 1 and (n[0].isdigit() or n[0] in ['+', '-'] or n[0] == '.') and not n.startswith('+') and not n.startswith('-'):
            print(True)
        else:
            print(False)
    except ValueError:
        print(False)