## Convert CRLFS to LFS 

```
find . -type f -print0 | xargs -0 dos2unix

find . -type f -print0 | xargs -0 -n 1 -P 4 dos2unix // thread
```

## Find & Delete Files/Directories (-exec)

```
find . -name "FILE-TO-FIND" -exec rm -rf {} \; // files & directories
find . -type f -name "FILE-TO-FIND" -exec rm -f {} \; // only files
```
