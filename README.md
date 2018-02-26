# Client Cookies QR Code generator for Orbot

Generate **Client Cookies QR codes** for Orbot.

The typical use case is:
* you have a [Stealth Hidden Service](https://www.torproject.org/docs/tor-manual.html.en#HiddenServiceAuthorizeClient)
* you want to configure Orbot, on your mobile device, with the right service url & cookie

Normally this info is mantained in _${HiddenServiceDir}/hostname_ file - hosted in the server - in this format:

```shell
ServiceUrl.onion ClientCookie # Comment
```

## Usage

```shell
git clone https://github.com/sub/client-cookies-qrcode.git
cd client-cookies-qrcode
yarn install
# pass to yarn qr the configuration string as copied
# from ${HiddenServiceDir}/hostname (don't forget the double quotes!)
yarn qr "ServiceUrl.onion ClientCookie # Comment"
```

Now you'll find a file named _ServiceUrl.onion.png_ in your working dir.
Simply:
- open the file on your pc
- open Orbot on your mobile phone
- tap menu (in the top right corner) -> Hidden Services -> Client Cookies
- tap menu (in the top right corner)  -> Read from QR
- scan the qr code image
- restart orbot

## Links
- [Tor: Onion Service Protocol](https://www.torproject.org/docs/onion-services.html.en)
- [Configuring Onion Services for Tor](https://www.torproject.org/docs/tor-onion-service)
- [Tor's protocol specifications::Authorization for limited number of clients](https://gitweb.torproject.org/torspec.git/tree/rend-spec-v2.txt#n928)

