def minifier(DATA : str):
    return str(DATA).replace("\n", "\\n").replace("\"", '\\"')

print(minifier("""{}"""))