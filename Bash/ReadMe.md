## Convert CRLFS to LFS 

```
find . -type f -print0 | xargs -0 dos2unix

find . -type f -print0 | xargs -0 -n 1 -P 4 dos2unix // thread
```
