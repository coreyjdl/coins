# used python to figure out the logic needed
# for brainstorming solutions it's my go to language 

# value amount in cents: integer
def make_change(value):

    output = {}

    coins = (
        ("silver dollar",   100),
        ("half dollar",     50),
        ("quarter",         25),
        ("dime",            10),
        ("nickel",          5),
        ("penny",           1)
    )

    for (name, face) in coins:
        output[name] = value // face
        value %= face

    return output

def main():

    in_value = input("value: ")
    
    # convert input to cents
    value_in_cents = int(100 * float(in_value))
    
    change = make_change(value_in_cents)  
    print(change)

if __name__ == ("__main__"):
    main()