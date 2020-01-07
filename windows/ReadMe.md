# Windows 

## Proxy Server - System wide

Start Powershell with admin rights and:

    netsh winhttp set proxy <Proxyserver:Port>
    netsh winhttp import proxy source=ie
    netsh winhttp set proxy <Proxyserver:Port> bypass-list="*.mydomain.intern" 
