# abort on errors
set -e

# build
npm run build
# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/felix-D2/space-tourism-website.git master:gh-pages

cd -
