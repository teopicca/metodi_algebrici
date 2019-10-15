gcd(X, 0, X):- !.
gcd(0, X, X):- !.

gcd(X, Y, D):-
       	X =< Y, !, Z is Y - X, gcd(X, Z, D).
gcd(X, Y, D):- 
	gcd(Y, X, D).

coprime(G):-
	G =:=1.

are_coprime(X,Y):-
	gcd(X,Y,G),
	coprime(G).

theorem(P,A):-
	 A**P mod P =:=A.
	

fermat(P, A):-
	are_coprime(P,A) -> theorem(P,A).

is_prime(P):-
	A is P-1,
	fermat(P,A)->fermat(P,A-1).		
	

	
