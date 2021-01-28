jupyter-book build book
git add .
git commit -m "update"
git push
ghp-import -n -p -f ./book/_build/html
