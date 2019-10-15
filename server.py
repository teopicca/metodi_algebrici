from flask import *

app = Flask(__name__)




def euclide(x, y):
    
    while(y!=0):
        r = x % y
        x = y
        y = r

    return x

def bezout(a, b):
    r = a
    r1 = b
    u = 1 
    v = 0
    u1 = 0
    v1 =1
    while(r1 !=0):
        q = int(r/r1)
        rs = r
        us = u
        vs = v
        r = r1
        u = u1
        v = v1
        r1 = rs - q*r1
        u1 = us - q*u1
        v1 = vs - q*v1

    return (u, v)



def diofantea(a, b, c):
    
    mcd = euclide(a,b)
    if c%mcd == 0:
            (x,y) = bezout(a,b)
            x = x * (c/mcd)
            y = y * (c/mcd)
            xk = b / mcd 
            yk = a / mcd
            return (x,y, xk, yk)
    else:
        return False
  
     

@app.route('/', methods=['GET', 'POST'])
def metodi():

    if request.json:
        inpt = request.json['input']
        print(inpt)

        if inpt[:3] == 'mcd':
            try:
                inpt.replace(' ', '')
                open = inpt.find('(')
                close = inpt.find(')')
                comma = inpt.find(',')
                x = int(inpt[open+1 :comma])
                y = int(inpt[comma+1 : close])

                print(x, y)
          
                result = euclide(x, y)
                return jsonify(status = 200, type = 'mcd', result = result)
            
            except:
                return jsonify(status = 200, type = 'error')

   
        if inpt[:3] == 'dio':
            try:
                inpt = inpt.replace(' ', '')
                open = inpt.find('(')
                close = inpt.find(')')
                x1 = inpt.find('x')
                y1 = inpt.find('y')
                equal = inpt.find('=')

                x = int(inpt[open+1: x1])
                y = int(inpt[x1+1 : y1])
                c = int(inpt[equal+1 : close])
                print(x,y,c)
                (x,y, xk, yk) = diofantea(x, y, c)
                print(x,y, xk, yk)
                
                return jsonify(status = 200, type = 'dio', x = x, y = y)

            except:
                return jsonify(status = 200, type = 'error')

        return jsonify(status=500, type = None)


if __name__ == '__main__':
    
            
        app.run(host='0.0.0.0', debug=True)


