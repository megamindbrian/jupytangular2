ROOT = /Users/
briancullinan / jupytangular2 / Utilities / ca

# prepare
root
CA
mkdir
$ROOT

cd
$ROOT
mkdir
certs
crl
newcerts
private
chmod
700
private
touch
index.txt
echo
1000 > serial

echo
'
# OpenSSL
root
CA
configuration
file.

    [ca]
# man
ca
default_ca = CA_default

    [CA_default]
# Directory
and
file
locations.dir = /Users/
briancullinan / jupytangular2 / Utilities / ca
certs = \$dir / certs
crl_dir = \$dir / crl
new_certs_dir = \$dir / newcerts
database = \$dir / index.txt
serial = \$dir / serial
RANDFILE = \$dir / private
/.rand

# The
root
key
and
root
certificate.private_key = \$dir / private
/ca.key.pem
certificate = \$dir / certs / ca.cert.pem

# For
certificate
revocation
lists.crlnumber = \$dir / crlnumber
crl = \$dir / crl / ca.crl.pem
crl_extensions = crl_ext
default_crl_days = 30

# SHA - 1
is
deprecated, so
use
SHA - 2
instead.default_md = sha256

name_opt = ca_default
cert_opt = ca_default
default_days = 375
preserve = no
policy = policy_strict

    [policy_strict]
# The
root
CA
should
only
sign
intermediate
certificates
that
match.
# See
the
POLICY
FORMAT
section
of
man
ca.countryName = match
stateOrProvinceName = match
organizationName = match
organizationalUnitName = optional
commonName = supplied
emailAddress = optional

    [policy_loose]
# Allow
the
intermediate
CA
to
sign
a
more
diverse
range
of
certificates.
# See
the
POLICY
FORMAT
section
of
the
ca
man
page.countryName = optional
stateOrProvinceName = optional
localityName = optional
organizationName = optional
organizationalUnitName = optional
commonName = supplied
emailAddress = optional

    [req]
# Options
for the req
tool
default_bits = 2048
distinguished_name = req_distinguished_name
string_mask = utf8only

# SHA - 1
is
deprecated, so
use
SHA - 2
instead.default_md = sha256

# Extension
to
add
when
the - x509
option
is
used.x509_extensions = v3_ca

    [req_distinguished_name]
# See < https
://en.wikipedia.org/wiki/Certificate_signing_request>.
countryName = Country
Name(2
letter
code
)
stateOrProvinceName = State
or
Province
Name
localityName = Locality
Name
0.
organizationName = Organization
Name
organizationalUnitName = Organizational
Unit
Name
commonName = Common
Name
emailAddress = Email
Address

# Optionally, specify
some
defaults.countryName_default = GB
stateOrProvinceName_default = England
localityName_default =
    0.
organizationName_default = Alice
Ltd
organizationalUnitName_default =
    emailAddress_default =

        [v3_ca]
# Extensions
for a typical
CA(man
x509v3_config
).
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid
:
always, issuer
basicConstraints = critical, CA
:
true
keyUsage = critical, digitalSignature, cRLSign, keyCertSign

    [v3_intermediate_ca]
# Extensions
for a typical
intermediate
CA(man
x509v3_config
).
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid
:
always, issuer
basicConstraints = critical, CA
:
true, pathlen
:
0
keyUsage = critical, digitalSignature, cRLSign, keyCertSign

    [usr_cert]
# Extensions
for client certificates(man
x509v3_config
).
basicConstraints = CA
:
FALSE
nsCertType = client, email
nsComment = \'OpenSSL Generated Client Certificate\'
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid, issuer
keyUsage = critical, nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = clientAuth, emailProtection

    [server_cert]
# Extensions
for server certificates(man
x509v3_config
).
basicConstraints = CA
:
FALSE
nsCertType = server
nsComment = \'OpenSSL Generated Server Certificate\'
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid, issuer
keyUsage = critical, digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

    [alt_names]
IP
.1 = 127.0
.0
.1
DNS
.1 = localhost

    [crl_ext]
# Extension
for CRLs(man x509v3_config
).
authorityKeyIdentifier = keyid
:
always

    [ocsp]
# Extension
for OCSP signing
certificates(man
ocsp
).
basicConstraints = CA
:
FALSE
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid, issuer
keyUsage = critical, digitalSignature
extendedKeyUsage = critical, OCSPSigning

" > $ROOT/openssl.cnf

# create
root
key
cd
$ROOT
openssl
genrsa - aes256 - passout
pass:x - out
private
/ca.key.pem 4096
chmod
700
private
/ca.key.pem
# generate
root
certificate
cd
$ROOT
openssl
req - config
openssl.cnf \
      -passin
pass:x \
      -key
private
/ca.key.pem \
      -new - x509 - days
7300 - sha256 - extensions
v3_ca \
      -subj
'/C=US/ST=Who/L=Is/O=John/OU=Galt/CN=localhost' \
      -out
certs / ca.cert.pem
chmod
744
certs / ca.cert.pem
# verify
root
ca
openssl
x509 - noout - text - in certs / ca.cert.pem
