App per metodi algebrici.


Ancora in fase di sviluppo. 
Per eseguire l'applicazione:

      1) npm i expo
      2) npm i  
      3) expo start
      4) installare Expo sullo smartphone
      5) leggere il QRCode 
	  
Per eseguire il backend in python3:

      1) pip3 install flask
      2) python3 server.py
      
      
NOTE: Potrebbe essere necessario fare il forwarding della porta 5000 (porta usata da Flask per lo sviluppo), e modificare il file '/src/screens/Home.js' a riga 34 con l'IP della macchina server. 




FUNZIONI IMPLEMENTATE:
	1) MCD tra due numeri --> mcd(n1, n2)
	2) risoluzione equazioni diofantee --> dio(ax+by=c)
	3) calcolo della funzione phi di Eulero --> phi(n)
	4) calcolo dell'identita' di Bezout tra due interi --> bz(n1,n2)
