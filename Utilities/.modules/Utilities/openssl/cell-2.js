ROOT = /Users/
briancullinan / jupytangular2 / Utilities / ca

# create
a
client
key
cd
$ROOT
openssl
genrsa - aes256 - passout
pass:x \
      -out
intermediate / private
/localhost.key.pem 2048
chmod
700
intermediate / private
/localhost.key.pem

# create
a
client
csr
cd
$ROOT
openssl
req - config
intermediate / openssl.cnf \
      -passin
pass:x \
      -subj
'/C=US/ST=Who/L=Is/O=John/OU=Galt/CN=localhost' \
      -key
intermediate / private
/localhost.key.pem \
      -new - sha256 - out
intermediate / csr / localhost.csr.pem
# sign
the
client
certificate
with the intermediate
CA
cd
$ROOT
openssl
ca - config
intermediate / openssl.cnf \
      -passin
pass:x \
      -extensions
server_cert - days
375 - notext - md
sha256 \
      -batch \
      - in intermediate / csr / localhost.csr.pem \
      -out
intermediate / certs / localhost.cert.pem
chmod
744
intermediate / certs / localhost.cert.pem
# verify
client
certificate
openssl
x509 - noout - text \
      - in intermediate / certs / localhost.cert.pem
openssl
verify - CAfile
intermediate / certs / ca - chain.cert.pem \
      intermediate / certs / localhost.cert.pem      


#openssl
genrsa - des3 - passout
pass:x - out
server.pass.key
2048
#openssl
rsa - passin
pass:x - in server.pass.key - out
server.key
#rm
server.pass.key
#openssl
req - new - key
server.key - out
server.csr
#openssl
x509 - req - sha256 - days
365 - in server.csr - signkey
server.key - out
server.crt
#security
add - trusted - cert - d - r
trustRoot - k / Users / briancullinan / Library / Keychains / login.keychain / Users / briancullinan / jupytangular2 / Utilities / ca / certs / ca.cert.pem
#security
add - trusted - cert - d - r
trustRoot - k / Users / briancullinan / Library / Keychains / login.keychain / Users / briancullinan / jupytangular2 / Utilities / ca / intermediate / certs / localhost.cert.pem