# Windows 

## Proxy Server With Credentials

    netsh winhttp import proxy source=ie
    $Wcl=New-Object System.Net.WebClient
    $Creds=Get-Credential
    $Wcl.Proxy.Credentials=$Creds
    
    

## Proxy Server - Without Credentials

Start Powershell with admin rights and:

    netsh winhttp set proxy <Proxyserver:Port>
    netsh winhttp import proxy source=ie
    netsh winhttp set proxy <Proxyserver:Port> bypass-list="*.mydomain.intern" 
    netsh winhttp show proxy
    netsh winhttp reset proxy  // Remove all

### Tunneling through a socks proxy

    netsh winhttp set proxy proxy-server="socks=localhost:9090" bypass-list="localhost"
